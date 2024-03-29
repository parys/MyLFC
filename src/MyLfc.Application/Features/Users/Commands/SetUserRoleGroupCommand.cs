﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MyLfc.Application.Infrastructure.Exceptions;
using MyLfc.Domain;
using MyLfc.Data.Common;
using MyLfc.Domain.Identity;

namespace MyLfc.Application.Features.Users.Commands;

public class SetUserRoleGroupCommand
{
    public class Request : IRequest<Response>
    {
        public int UserId { get; set; }

        public int RoleGroupId { get; set; }
    }


    public class Handler : IRequestHandler<Request, Response>
    {
        private readonly ILiverpoolContext _context;

        private readonly UserManager<FullUser> _userManager;

        public Handler(ILiverpoolContext context, UserManager<FullUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByIdAsync(request.UserId.ToString());
            if (user == null)
            {
                throw new NotFoundException(nameof(FullUser), request.UserId);
            }

            var oldRoleGroup = await _context.RoleGroups
                .AsNoTracking()
                .Include(x => x.RoleGroups)
                .ThenInclude(x => x.Role)
                .FirstOrDefaultAsync(x => x.Id == user.RoleGroupId, cancellationToken);

            if (oldRoleGroup == null)
            {
                //todo what to do?
            }

            var newRoleGroup = await _context.RoleGroups
                .AsNoTracking()
                .Include(x => x.RoleGroups)
                .ThenInclude(x => x.Role)
                .FirstOrDefaultAsync(x => x.Id == request.RoleGroupId, cancellationToken);

            if (newRoleGroup == null)
            {
                throw new NotFoundException(nameof(RoleGroup), request.RoleGroupId);
            }

            var rolesToDelete = GetRolesToDelete(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));
            var rolesToAdd = GetRolesToAdd(oldRoleGroup.RoleGroups.Select(x => x.Role), newRoleGroup.RoleGroups.Select(x => x.Role));

            rolesToDelete = rolesToDelete.Where(x => x.Name != RolesEnum.Simple.ToString());
            user.RoleGroupId = request.RoleGroupId;
            if (rolesToDelete.Any())
            {
                var resultRemove =
                    await _userManager.RemoveFromRolesAsync(user, rolesToDelete.Select(x => x.Name).ToArray());
                if (!resultRemove.Succeeded)
                {
                    throw new Exception("Something went wrong. Can't update user group to new");
                }
            }

            if (rolesToAdd.Any())
            {
                var resultAdd = await _userManager.AddToRolesAsync(user, rolesToAdd.Select(x => x.Name).ToArray());
                if (!resultAdd.Succeeded)
                {
                    throw new Exception("Something went wrong. Can't update user group to new");
                }
            }

            await _context.SaveChangesAsync(cancellationToken);
            return new Response { Id = request.UserId };
        }

        private static IEnumerable<Role> GetRolesToDelete(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return oldRoles.Except(newRoles);
        }

        private static IEnumerable<Role> GetRolesToAdd(IEnumerable<Role> oldRoles, IEnumerable<Role> newRoles)
        {
            return newRoles.Except(oldRoles);
        }
    }


    public class Response
    {
        public int Id { get; set; }
    }
}
