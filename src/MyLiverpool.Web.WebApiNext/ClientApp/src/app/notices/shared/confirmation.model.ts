import { BaseEntity } from '@domain/models/base-entity.model';

export class ConfirmationMessage extends BaseEntity<ConfirmationMessage> {
    public title: string;
    public message: string;
}
