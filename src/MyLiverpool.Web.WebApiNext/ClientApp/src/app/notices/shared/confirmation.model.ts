import { BaseEntity } from '@domain/models';

export class ConfirmationMessage extends BaseEntity<ConfirmationMessage> {
    public title: string;
    public message: string;
}
