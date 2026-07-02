import type {Team, Player, League, Sport} from "./common"

export interface StatLeaderPlayer {
    rank: number;
    value: string;
    team: Team;
    league: League;
    person: Player;
    sport: Sport;
    season: string;
    numTeams: number;
}

export interface StatLeaderCategory {
    leaderCategory: string;
    season: string;
    gameType: {
        id: string;
        description: string;
    }
    leaders: StatLeaderPlayer[];
}

export interface StatLeaders {
    leagueLeaders: StatLeaderCategory[];
}