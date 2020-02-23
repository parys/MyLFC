import { GetMatchesListQuery, GetMatchDetailQuery } from '@network/shared/matches';
import { MatchType } from '@domain/models';

export interface MatchesStateModel {
    matches: GetMatchesListQuery.MatchListDto[];
    match: GetMatchDetailQuery.Response;
    request: GetMatchesListQuery.Request;
    matchTypes: MatchType[];
}
