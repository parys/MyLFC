import { SeasonMonth } from "./season-month.model";

export class Season {
    public id: number;
    public startSeasonYear: number;
    public endSeasonYear: number;
    public months: SeasonMonth[];
}