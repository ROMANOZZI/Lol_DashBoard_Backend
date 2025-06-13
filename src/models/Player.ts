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
    public totalTeamKills: number = 0; // This should be set based on the match contex
    constructor(id: string, name: string, championName: string, teamId: string, kills: number, deaths: number, assists: number, totalDamageDealtToChampions: number) {
        this.id = id;
        this.name = name;
        this.championName = championName;
        this.teamId = teamId;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.totalDamageDealtToChampions = totalDamageDealtToChampions;
        this.killParticipation = this.calculateKillParticipation();
    }

    private calculateKillParticipation(): number {

        return this.totalTeamKills > 0 ? ((this.kills + this.assists) / this.totalTeamKills) * 100 : 0;
    }
    public toJSON(): string {
        return JSON.stringify({
            id: this.id,
            name: this.name,
            championName: this.championName,
            teamId: this.teamId,
            kills: this.kills,
            deaths: this.deaths,
            assists: this.assists,
            totalDamageDealtToChampions: this.totalDamageDealtToChampions,
            killParticipation: this.killParticipation
        });
    }
    public static fromJSON(json: string): Player {
        const data = JSON.parse(json);

        return new Player(
            data["puuid"],
            data["riNameotIdGame"],
            data["championName"],
            data["teamId"],
            data["kills"],
            data["deaths"],
            data["assists"],
            data["totalDamageDealtToChampions"]
        );
    }
}
export default Player;