using System;
using System.ComponentModel.DataAnnotations;

namespace MyLfc.Business.Dto.Forums;

public class ForumMessageDto : IDto
{
    public int Id { get; set; }

    [Required]
    public int AuthorId { get; set; }

    public string AuthorUserName { get; set; }

    [Required]
    public string Message { get; set; }

    [Required]
    public DateTimeOffset LastModifiedTime { get; set; }

    [Required]
    public DateTimeOffset AdditionTime { get; set; }

    [Required]
    public int ThemeId { get; set; }

    public string Photo { get; set; }
}
