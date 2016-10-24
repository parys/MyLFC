export interface IRoles {
    isLogined: boolean;
    isEditor: boolean;
    isNewsmaker: boolean;
    isModerator: boolean;
    isAdminAssistant: boolean;
    isSelf(userId: number): boolean;
}