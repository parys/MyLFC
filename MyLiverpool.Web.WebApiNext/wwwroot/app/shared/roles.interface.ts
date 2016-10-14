export interface IRoles {
    isEditor: boolean;
    isNewsmaker: boolean;
    isUserAuthor(userId:number): boolean;
}