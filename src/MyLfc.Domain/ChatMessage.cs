﻿using System;
using System.ComponentModel.DataAnnotations;
using MyLfc.Data.Common;
using MyLfc.Domain.Identity;

namespace MyLfc.Domain;

public class ChatMessage : IEntity
{
    public int Id { get; set; }

    public int AuthorId { get; set; }

    public FullUser Author { get; set; }

    public string Message { get; set; }

    public DateTimeOffset AdditionTime { get; set; }

    [MaxLength(15)]
    public string Ip { get; set; }

    public ChatMessageTypeEnum Type { get; set; }
}
