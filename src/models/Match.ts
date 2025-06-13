import e from "express";

class Match {
    public matchId: string;
    public plateformId: string;
    public gameName: string;
    constructor(matchId: string, plateformId: string, gameName: string) {
        this.matchId = matchId;
        this.plateformId = plateformId;
        this.gameName = gameName;
    }
    public toJSON(): string {
        return JSON.stringify({
            matchId: this.matchId,
            plateformId: this.plateformId,
            gameName: this.gameName
        });
    }
 
}
export default Match;