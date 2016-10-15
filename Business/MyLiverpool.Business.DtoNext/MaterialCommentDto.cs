using System;
using System.Collections.Generic;

namespace MyLiverpool.Business.DTO
{
    public class MaterialCommentDto : IDto
    {
        public MaterialCommentDto()
        {
            Children = new HashSet<MaterialCommentDto>();
        }

        public int Id { get; set; }

        //public bool Pending { get; set; }

        public DateTime AdditionTime { get; set; }

        public string AuthorUserName { get; set; }

        public int AuthorId { get; set; }

        public string Photo { get; set; }

     //   [AllowHtml]
        public string Message { get; set; }

    //    [AllowHtml]
        public string Answer { get; set; }

        public int MaterialId { get; set; }

        public int? ParentId { get; set; }

        public virtual ICollection<MaterialCommentDto> Children { get; set; }

        public bool IsVerified { get; set; }
    }
}
