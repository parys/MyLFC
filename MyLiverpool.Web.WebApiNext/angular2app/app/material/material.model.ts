export class Material {
    id: number;
    title: string;
    categoryId: number;
    private categoryName: string;
    private additionTime: Date;
    private commentsCount: number;
    private userId: number;
    private username: string;
    brief: string;
    message: string;
    private reads: number;
    source: string;
    photo: string;
    pending: boolean;
    onTop: boolean;
    canCommentary: boolean;
    type: number;
}