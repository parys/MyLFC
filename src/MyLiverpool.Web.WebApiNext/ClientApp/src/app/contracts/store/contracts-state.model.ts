import { GetContractsListQuery, GetContractDetailQuery } from '@network/shared/contracts';

export interface ContractsStateModel {
    contracts: GetContractsListQuery.ContractListDto[];
    contract: GetContractDetailQuery.Response;
    request: GetContractsListQuery.Request;
}
