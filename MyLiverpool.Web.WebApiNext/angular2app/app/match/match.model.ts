import { MatchEvent } from "../matchEvent/matchEvent.model";

export class Match {
    public id: number;
    public isHome: boolean;
    public clubId: number;
    public clubName: string;
    public homeClubId: number;
    public homeClubName: string;
    public homeClubLogo: string;
    public awayClubId: number;
    public awayClubName: string;
    public awayClubLogo: string;
    public dateTime: Date;
    public typeId: number;
    public typeName: string;
    public stadiumId: number;
    public stadiumName: string;
    public seasonId: number;
    public seasonName: number;
    public scoreHome: string;
    public scorePenaltyHome: number;
    public scoreAway: string;
    public scorePenaltyAway: number;
    public reportUrl: string;
    public photoUrl: string;
    public videoUrl: string;
    public commentCount: number;
    public events: MatchEvent[];
}