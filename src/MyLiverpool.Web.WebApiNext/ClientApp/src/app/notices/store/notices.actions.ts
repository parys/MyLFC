import { NoticeMessage } from '@notices/shared';

export class ShowNotice {
    static readonly type = '[Notices] Show notice message';
    public constructor(public payload: NoticeMessage) { }
}
