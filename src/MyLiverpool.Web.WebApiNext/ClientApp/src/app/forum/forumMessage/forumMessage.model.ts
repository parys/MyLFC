export class ForumMessage {
    id: number;
    themeId: number;
    //   virtual ForumTheme Theme: ;
    additionTime: Date;
    isFirstMessage: boolean;
    message: string;
    authorUserName: string;
    authorId: number;
    photo: string;
    lastModifiedTime: Date;
}
