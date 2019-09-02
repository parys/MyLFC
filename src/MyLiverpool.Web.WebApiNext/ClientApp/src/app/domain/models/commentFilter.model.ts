import { PagedQueryBase } from '@base/infrastructure';

export class CommentFilter extends PagedQueryBase {
    public onlyUnverified: boolean;
    public userId: number;
    public matchId?: number;
    public materialId?: number;
}
