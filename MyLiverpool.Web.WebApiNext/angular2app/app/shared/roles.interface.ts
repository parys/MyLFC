export interface IRoles {
    isLogined: boolean;
    isEditor: boolean;
    isNewsmaker: boolean;
    isModerator: boolean;
    isMainModerator: boolean;
    isAdminAssistant: boolean;
    isSelf(userId: number): boolean;
}