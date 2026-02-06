// Player types
// ----------------------------------------------
export type Player = {
    id: number;
    fullName: string;
    link: string;
    firstName: string;
    middleName: string;
    lastName: string;
    firstLastName: string;
    lastFirstName: string;
    initLastName: string;
    birthDate: string;
    currentAge: number;
    birthCity: string;
    birthStateProvince: string;
    birthCountry: string;
    height: string;
    weight: number;
    active: boolean;
    mlbDebutDate: string;
    primaryPosition: Position;
    isPlayer: boolean;
    isVerified: boolean;
    draftYear: number;
    batSide: Status;
    pitchHand: Status;
};

export type HydratedPlayer = Player & {

};

export type Position = {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
};

// What hand they use for batting or pitching
export type Status = {
    code: string;
    description: string;
};

export type HittingStats = {
    age: number;
    gamesPlayed: number;
    groundOuts: number;
    airOuts: number;
    runs: number;
    doubles: number;
    triples: number;
    homeruns: number;
    strikeouts: number;
    baseOnBalls: number;
    intentionalWalks: number;
    hits: number;
    hitByPitch: number;
    avg: string;
    atBats: number;
    obp: string;
    slg: string;
    ops: string;
    caughtStealing: number;
    stolenBases: number;
    stolenBasePercentage: string;
    caughtStealingPercentage: string;
    groundIntoDoublePlay: number;
    numberOfPitches: number;
    playeAppearances: number;
    totalBases: number;
    rbi: number;
    leftOnBase: number;
    sacBunts: number;
    sacFlies: number;
    babip: string;
    groundIntoAirouts: string;
    catcherInterference: number;
    atBatsPerHomeRun: string;
};

// Team Types
// ----------------------------------------------
export type Team = {
    springLeague: CondensedProperty;
    allStarStatus: string;
    id: number;
    name: string;
    link: string;
    season: number;
    venue: Venue;
    springVenue: Venue;
    teamCode: string;
    fileCode: string;
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    league: CondensedProperty;
    division: CondensedProperty;
    sport: CondensedProperty;
    shortName: string;
    franchiseName: string;
    clubName: string;
    active: boolean;
};

export type HydratedTeam = Team & {

};

export type TeamRosterPlayer = {
    person: CondensedProperty;
    jerseyNumber: number;
    position: Position;
    status: Status;
    parentTeamId: number;
}

export type TeamRecord = {
    team: Team;
    season: string;
    streak: {
        streakCode: string;
        streakType: string;
        streakNumber: number;
    };
    clinchIndicator: string;
    divisionRank: string;
    leagueRank: string;
    sportRank: string;
    gamesPlayed: number;
    gamesBack: string;
    wildCardGamesBack: string;
    leagueGamesBack: string;
    springLeagueGamesBack: string;
    sportGamesBack: string;
    divisionGamesBack: string;
    conferenceGamesBack: string;
    leagueRecord: {
        wins: number;
        losses: number;
        ties: number;
        pct: string;
    }
    lastUpdated: string;
    records: {
        splitRecords: SplitRecord[];
        divisionRecords: DivionOrLeagueRecord[];
        overallRecords: SplitRecord[];
        leagueRecords: DivionOrLeagueRecord[];
        expectedRecords: SplitRecord[];
    }
    runsAllowed: number;
    runsScored: number;
    divisionChamp: boolean;
    divisionLeader: boolean;
    hasWildCard: boolean;
    clinched: boolean;
    eliminationNumber: string;
    eliminationNumberSport: string;
    eliminationNumberLeague: string;
    eliminationNumberDivision: string;
    eliminationNumberConference: string;
    wildCardEliminationNumber: string;
    magicNumber: string;
    wins: number;
    losses: number;
    runDifferential: string;
    winningPercentage: string;
}



// League and Division Types
// ----------------------------------------------
export type Division = {
    id: number;
    name: string;
    season: string;
    nameShort: string;
    link: string;
    abbreviation: string;
    league: CondensedProperty;
    sport: CondensedProperty;
    hasWildCard: boolean;
    sortOrder: number;
    numPlayoffTeams: number;
    active: boolean;
}

export type League = {
    id: number;
    name: string;
    link: string;
    abbreviation: string;
    nameShort: string;
    seasonState: string;
    hasWildCard: boolean;
    hasSplitSeason: boolean;
    numGames: number;
    hasPlayoffPoints: boolean;
    numTeams: number;
    numWildCardTeams: number;
    seasonDateInfo: null;
    season: string;
    orgCode: string;
    conferencesInUse: boolean;
    divisionsInUse: boolean;
    sport: CondensedProperty;
    sortOrder: number;
    active: boolean;
}

// Standings
export type DivisionStandings = {
    standingsType: string;
    league: League;
    division: Division;
    sport: CondensedProperty;
    roundRobin: { status: boolean; };
    lastUpdated: string;
    teamRecords: TeamRecord[];
};

export type StandingsQueryResult = { records: DivisionStandings[]};

// Schedule Types

export type ScheduleQueryResult = {
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalGamesInProgress: number;
    dates: {
        date: string;
        totalItems: number;
        totalGames: number;
        games: Game[];
    }[];
}

// Game Types
export type Game = {
    gamePk: number;
    gameGuid: string;
    link: string;
    gameType: string;
    season: string;
    gameDate: string;
    officialDate: string;
    status: {
        abstractGameState: string;
        codedGameState: string;
        detailedState: string;
        statusCode: string;
        startTimeTBD: string;
        abstractGameCode: string;
    };
    teams: {
        away: {
            team: CondensedProperty;
            leagueRecord: SplitRecord;
            score: number;
            isWinner: boolean;
            splitSquad: boolean;
            seriesNumber: number;
        };
        home: {
            team: CondensedProperty;
            leagueRecord: SplitRecord;
            score: number;
            isWinner: boolean;
            splitSquad: boolean;
            seriesNumber: number;
        }
    }
    linescore: Linescore;
    venue: CondensedProperty;
    content: { link: string; };
    isTie: boolean;
    gameNumber: number;
    publicFacing: boolean;
    doubleHeader: string;
    gameDayType: string;
    tiebreaker: string;
    calendarEventId: string;
    dayNight: string;
    scheduledInnings: number;
    reverseHomeAwayStatus: boolean;
    inningBreakLength: number;
    gamesInSeries: number;
    seriesGameNumber: number;
    seriesDescription: string;
    recordSource: string;
    ifNecessary: string;
    ifNescessaryDescription: string;
}

export type Linescore = {
    currentInning: number;
    currentInningOrdinal: string;
    inningState: string;
    inningHalf: string;
    isTopInning: boolean;
    scheduledInnings: number;
    innings: Inning[];
    defense: {
        pitcher: CondensedProperty;
        catcher: CondensedProperty
        first: CondensedProperty;
        second: CondensedProperty;
        third: CondensedProperty;
        shortstop: CondensedProperty;
        left: CondensedProperty;
        center: CondensedProperty;
        right: CondensedProperty;
        batter: CondensedProperty;
        onDeck: CondensedProperty;
        inHole: CondensedProperty;
        battingOrder: number;
        team: CondensedProperty;
    }
    offense: {
        batter: CondensedProperty;
        onDeck: CondensedProperty;
        inHole: CondensedProperty;
        pitcher: CondensedProperty;
        battingOrder: number;
        team: CondensedProperty;
    }
    balls: number;
    strikes: number;
    outs: number;
}

export type Inning = {
    num: number;
    ordinalNum: string;
    home: {
        runs: number;
        hits: number;
        errors: number;
        leftOnBase: number;
    }
    away: {
        runs: number;
        hits: number;
        errors: number;
        leftOnBase: number;
    }
}

// Award types
// ----------------------------------------------
export type Award = {
    id: string;
    name: string;
    date: string;
    season: string;
    team: null;
    player: CondensedProperty;
};

//Helper Types
// ----------------------------------------------
export type Transaction = {
    id: number;
    toTeam: CondensedProperty;
    fromTeam: CondensedProperty | undefined;
    date: string;
    effectiveDate: string;
    resolutionDate: string;
    typeCode: string;
    typeDesc: string;
    description: string;
}

export type CondensedProperty = {
    id: number;
    link: string;
    name: string | undefined;
    fullName: string | undefined;
    abbreviation: string | undefined;
}

export type Venue = {
    id: number;
    name: string | undefined;
    link: string;
}

export type SplitRecord = {
    wins: number;
    losses: number;
    type: string | undefined;
    pct: string;
}

export type DivionOrLeagueRecord = {
    wins: number;
    losses: number;
    pct: string;
    division: CondensedProperty | undefined;
    league: CondensedProperty | undefined;
}