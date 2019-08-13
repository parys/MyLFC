import { PagedQueryBase } from '@app/+infrastructure';

export class WishFilter extends PagedQueryBase {
    public typeId?: number;
    public stateId?: number;
    public filterText?: string;
}
