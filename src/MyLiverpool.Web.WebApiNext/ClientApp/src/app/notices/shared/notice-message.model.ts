import { BaseEntity } from '@domain/models/base-entity.model';

import { NoticeType } from '@notices/shared/notice-type.enum';

export class NoticeMessage extends BaseEntity<NoticeMessage> {

    static error(title: string, message: string) {
        return new NoticeMessage(NoticeType.Error, title, message);
    }

    static warning(title: string, message: string) {
        return new NoticeMessage(NoticeType.Warning, title, message);
    }

    static info(title: string, message: string) {
        return new NoticeMessage(NoticeType.Info, title, message);
    }

    static success(title: string, message: string) {
        return new NoticeMessage(NoticeType.Success, title, message);
    }

    constructor(public type: NoticeType, public title: string = null, public message: string = null) {
        super();
    }

}
