class Player{
    public id: string;
    public name:string;
    public championName: string;
    public teamId: string;
    public kills:number;
    public deaths:number;
    public assists:number;
    public totalDamageDealtToChampions:number;
    public killParticipation:number;

    constructor(id: string, name: string, championName: string, teamId: string, kills: number, deaths: number, assists: number, totalDamageDealtToChampions: number,
        teamTotalKills: number 
    ) {
        this.id = id;
        this.name = name;
        this.championName = championName;
        this.teamId = teamId;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.totalDamageDealtToChampions = totalDamageDealtToChampions;
        this.killParticipation = this.calculateKillParticipation(teamTotalKills);
    }

    private calculateKillParticipation(teamTotalKills: number): number {

        if (teamTotalKills === 0) {
            return 0; // Avoid division by zero
        }
        const res= (((this.kills + this.assists) / teamTotalKills) * 100).toFixed(2); // Calculate kill participation as a percentage
        return parseFloat(res);
    }
    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            championName: this.championName,
            teamId: this.teamId,
            kills: this.kills,
            deaths: this.deaths,
            assists: this.assists,
            totalDamageDealtToChampions: this.totalDamageDealtToChampions,
            killParticipation: this.killParticipation
        };
    }
    public static fromJSON(json: string, teamTotalKills: number): Player {
        const data = JSON.parse(json);

        return new Player(
            data["puuid"],
            data["riotIdGameName"] ,
            data["championName"],
            data["teamId"],
            data["kills"],
            data["deaths"],
            data["assists"],
            data["totalDamageDealtToChampions"],
            teamTotalKills
        );
    }
}
export default Player;