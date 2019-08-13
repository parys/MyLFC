import { PersonStatistics } from './person-statistics.model';

export class SeasonStatistics {
    public id: number;
    public startSeasonYear: number;
    public endSeasonYear: number;
    public persons: PersonStatistics[];
}