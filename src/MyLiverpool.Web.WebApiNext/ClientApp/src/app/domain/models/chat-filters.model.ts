import { PagedQueryBase } from '@app/+infrastructure';

export class ChatFilters extends PagedQueryBase {
    public typeId: number;
    public lastMessageId: number;
}
