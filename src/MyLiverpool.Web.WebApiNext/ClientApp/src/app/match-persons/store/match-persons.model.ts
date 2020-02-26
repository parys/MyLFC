import { MatchPersonType } from '@domain/models/match-person-type.model';
import { GetMatchPersonsListQuery } from '@network/shared/match-persons';

export interface MatchPersonsStateModel {
    matchPersonTypes: MatchPersonType[];
    matchPersons: Record<number, GetMatchPersonsListQuery.MatchPersonListDto[]>;
    editOptions: {
        selected: GetMatchPersonsListQuery.MatchPersonListDto,
        mpType: number,
        currentCount: number,
        neededCount: number,
        personTypeId: number
    };
}
