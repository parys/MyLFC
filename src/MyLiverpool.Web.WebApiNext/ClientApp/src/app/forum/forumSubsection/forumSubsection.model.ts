import { ForumTheme }  from "../forumTheme";
import { PagedList } from "@app/shared";

export class ForumSubsection {
    id: number;
    name: string;
    description: string;
    sectionId: number;
    themes: PagedList<ForumTheme>;
    themesCount: number;
}