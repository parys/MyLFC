﻿export class Transfer {
    public id: number;

    public coming: boolean;

    public startDate: Date;

    public onLoan: boolean;

    public finishDate?: Date;

    public amount: number;

    public clubId?: number;

    public clubName: string;

    public personId: number;

    public personName: string;
}