//module News {
    export class News {
        id: number;
        private title: string;
        private categoryId: number;
        private categoryName: string;
        private additionTime: Date;
        private commentsCount: number;
        private userId: number;
        private userName: string;
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
//}