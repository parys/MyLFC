export class News {
    private id: number;
    private title: string;
    private categoryId: number;
    private categoryName: string;
    private additionTime: Date;
    private commentsCount: number;
    private authorId: number;
    private authorUserName: string;
    private brief: string;
    private message: string;
    private reads: number;
    private source: string;
    private photoPath: string;
    //private virtual ICollection< MaterialCommentDto > Comments { get; set; }
    private pending: boolean;
    private onTop: boolean;
    private canCommentary: boolean;
}