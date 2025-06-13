class Team {
    public id: number;
    public winner: boolean;
    public players: string[]; // Array of player IDs
    constructor(id: number, winner: boolean, players: string[]) {
        this.id = id;
        this.winner = winner;
        this.players = players;
    }
    public toJSON(): string {
        return JSON.stringify({
            id: this.id,
            winner: this.winner,
            players: this.players
        });
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