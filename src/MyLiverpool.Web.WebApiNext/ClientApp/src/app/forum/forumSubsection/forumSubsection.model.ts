import { ForumTheme } from '@forum/forumTheme';
import { PagedList } from '@domain/models';

export class ForumSubsection {
    id: number;
    name: string;
    description: string;
    sectionId: number;
    themes: PagedList<ForumTheme>;
    themesCount: number;
}
