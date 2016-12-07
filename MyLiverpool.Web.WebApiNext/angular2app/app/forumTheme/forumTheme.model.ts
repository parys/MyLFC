export class ForumTheme {

    id: number;

    //   IdOld: number;

    subsectionId: number;

    //   virtual ForumSubsection Subsection: F;

    isPool: boolean;

    onTop: boolean;

    lastMessageAdditionTime: Date;

    isClosed: boolean;

    answers: number;

    views: number;

    name: string;

    description: string;
    //   virtual User Author: ;

    authorId: number;

    //    virtual User LastAnswerUser: ;

    lastAnswerUserId: number;

    //     virtual ICollection< ForumMessage > Messages: ;
}