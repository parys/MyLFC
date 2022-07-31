﻿using System;

namespace MyLfc.Domain;

public class Transfer : IEntity
{
    public int Id { get; set; }

    public bool Coming { get; set; }

    public DateTimeOffset StartDate { get; set; }

    public bool OnLoan { get; set; }

    public DateTimeOffset? FinishDate { get; set; }

    public int? Amount { get; set; }

    public int? ClubId { get; set; }

    public Club Club { get; set; }

    public int PersonId { get; set; }

    public Person Person { get; set; }

    public int? SeasonId { get; set; }

    public Season Season { get; set; }
}
