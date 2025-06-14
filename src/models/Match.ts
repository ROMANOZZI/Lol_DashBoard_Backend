import Team from "./Team";
import DateUtility from "../utils/DateUtility";
class Match {
    public matchId: string;
    public plateformId: string;
    public gameName: string;
    public gameCreation:string;
    public gameDuration:string;
    public gameMode:string;


    public teams: Team[] = []; // Array of Team objects
    constructor(matchId: string, plateformId: string, gameName: string,
        gameCreation:number,
        gameDuration:number,
        gameMode:string
    ) {
        this.matchId = matchId;
        this.plateformId = plateformId;
        this.gameName = gameName;
        this.gameCreation=DateUtility.convertTimeStamptoString(gameCreation);
        this.gameDuration=DateUtility.convertDurationToString(gameDuration);
        this.gameMode=gameMode;
 
    }
    public toJSON(): any {
        return {
            matchId: this.matchId,
            plateformId: this.plateformId,
            gameName: this.gameName,
            gameCreation:this.gameCreation,
            gameDuration:this.gameDuration,
            teams: this.teams.map(team => team.toJSON()),
            gameMode:this.gameMode
        };
    }
    public static fromJSON(json: string): Match {
        const data = JSON.parse(json);
        return new Match(
            data["metadata"]["matchId"],
            data["info"]["platformId"],
            data["info"]["gameName"],
            data["info"]["gameCreation"],
            data["info"]["gameDuration"],
            data["info"]["gameMode"]

        );
    }
 
}
export default Match;