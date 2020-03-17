import { GetContractsListQuery, GetContractDetailQuery, GetCurrentContractsListQuery } from '@network/shared/contracts';

export interface ContractsStateModel {
    contracts: GetContractsListQuery.ContractListDto[];
    currentContracts: GetCurrentContractsListQuery.CurrentContractListDto[];
    contract: GetContractDetailQuery.Response;
    request: GetContractsListQuery.Request;
    currentRequest: GetCurrentContractsListQuery.Request;
}
