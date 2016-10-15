export interface IRoles {
    isEditor: boolean;
    isNewsmaker: boolean;
    isModerator: boolean;
    isUserAuthor(userId:number): boolean;
}