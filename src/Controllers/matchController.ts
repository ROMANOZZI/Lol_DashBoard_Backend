import { Request, Response  } from 'express';
import Match from '../models/Match';
import Team from '../models/Team';
import Player from '../models/Player';
import FileUtility from '../utils/fileUtility';
class MatchController {
 public async getMatch(req: Request, res: Response): Promise<void> {
    try {
        
        // Respond with the match data
        const fileData = await FileUtility.readFile('Data.json');
        const match= Match.fromJSON(JSON.stringify(fileData));
        match.teams = fileData['info']['teams'].map((team:any) => {
            const totalTeamKills = fileData['info']['participants']
                .filter((player:any) => player["teamId"] === team["teamId"]).reduce((acc:any, player:any) => acc + player["kills"], 0);
            // Set total team kills for each team

            return new Team(
                team["teamId"],
                team["win"],
                fileData['info']['participants']
                    .filter((player:any) => player["teamId"] === team["teamId"]).map((player:any) => {
                        return Player.fromJSON(JSON.stringify(player), totalTeamKills);
                       
                        
                    })
            );

        });

        res.json(match.toJSON());
    } catch (error:any) {
        res.status(500).json({
        message: 'Error retrieving match',
        error: error.message
        });
    }
     }
}
export default MatchController;
export const matchController = new MatchController();