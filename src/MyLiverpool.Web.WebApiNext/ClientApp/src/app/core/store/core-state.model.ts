import { Match } from '@domain/models/match.model';

export interface CoreStateModel {
    mobile: boolean;
    notificationsCount: number;
    pmsCount: number;
    headerMatch: Match;
}
