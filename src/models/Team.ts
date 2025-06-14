import Player from "./Player";

class Team {
    public id: number;
    public winner: boolean;
    public players: Player[]; // Array of Player objects
    constructor(id: number, winner: boolean, players: Player[]) {
        this.id = id;
        this.winner = winner;
        this.players = players;
    }
    public toJSON(): any {
        return {
            id: this.id,
            winner: this.winner,
            players: this.players
        };
    }
    public static fromJSON(json: string): Team {
        const data = JSON.parse(json);
        return new Team(
            data["teamId"],
            data["win"],
            []
        );
    }
}
export default Team;