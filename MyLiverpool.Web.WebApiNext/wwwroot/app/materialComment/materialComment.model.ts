export class MaterialComment {
    id: number;
    additionTime: Date;
    authorUserName: string;
    authorId: number;
    photo: string;
    message: string;
    answer: string;
    materialId: number;
    children: MaterialComment[];
    isVerified: boolean;
}