import { PagedQueryBase } from '@base/infrastructure';

export class ChatFilters extends PagedQueryBase {
    public typeId: number;
    public lastMessageId: number;
}
