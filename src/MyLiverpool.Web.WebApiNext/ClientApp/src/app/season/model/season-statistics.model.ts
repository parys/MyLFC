import { PersonStatistics } from './personStatistics.model';

export class SeasonStatistics {
    public id: number;
    public startSeasonYear: number;
    public endSeasonYear: number;
    public persons: PersonStatistics[];
}