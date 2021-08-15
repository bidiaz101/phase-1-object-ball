const gameObject = function () {
    const object = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', "White"],
            players: {
                "Alan Anderson": {
                    number: "0",              
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                "Brook Lopez": {
                    number: "11", 
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4',
                    blocks: '11',
                    slamDunks: '1',
                },

            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2',
                    blocks: '7',
                    slamDunks: '2',
                },
                "Bismak Biyombo": {
                    number: '0',             
                    shoe:'16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7',
                    blocks: '15',
                    slamDunks: '10',
                },
                "DeSagna Diop": {
                    number: '2',             
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4',
                    blocks: '5',
                    slamDunks: '5',
                },
                "Ben Gordon": {
                    number: '8',             
                    shoe: '15',
                    points: "33",
                    rebounds: '3',
                    assists: '2',
                    steals: '1',
                    blocks: '1',
                    slamDunks: '0',
                },
                "Brendan Haywood": {
                    number: '33',            
                    shoe: '15',
                    points: '12', 
                    assists: '12',
                    steals: '22',
                    blocks: '5',
                    slamDunks: '12',
                },
            }
        }
    }
    return object;
};

function numPointsScored (playerName) {
    for (const team in gameObject()) {
        let teamMembers = gameObject()[team].players
        for (const individual in teamMembers) {
            if (individual === playerName) {
                return teamMembers[individual].points
            }
        }
    }
};

function shoeSize (playerName) {
    for (const team in gameObject()) {
        let teamMembers = gameObject()[team].players
        for (const individual in teamMembers) {
            if (individual === playerName) {
                return teamMembers[individual].shoe
            }
        }
    }
};

function teamColors (team) {
    for (const homeOrAway in gameObject()) {
        let teamName = gameObject()[homeOrAway].teamName
        if (team === teamName) {
            return gameObject()[homeOrAway].colors
        }
    }
};

function teamNames () {
    const teams = [];
    for (const homeOrAway in gameObject()) {
        let teamName = gameObject()[homeOrAway].teamName
        teams.push(teamName);
    };
    return teams;
};

function playerNumbers(teamRequested) {
    const jerseyNums = [];
    for (const homeOrAway in gameObject()) {
        let team = gameObject()[homeOrAway].teamName
        if (team === teamRequested) {
            let athlete = gameObject()[homeOrAway].players
            for (const stats in athlete) {
                let nums = athlete[stats].number
                jerseyNums.push(nums);
            }
        }
    }
    return jerseyNums;
};

function playerStats (playerName) {
    for (const homeOrAway in gameObject()) {
        let athletesStats = gameObject()[homeOrAway].players
        for (const individual in athletesStats) {
            if (individual === playerName) {
                return gameObject()[homeOrAway].players[individual];
            }
        }
    }
};

function bigShoeRebounds () {
    const shoeSizes = [];
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            const shoeSize = athleteStats[individual].shoe
            shoeSizes.push(parseInt(shoeSize));
        }
    }
    const biggestFoot =  Math.max(...shoeSizes);
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            let shoeSize = parseInt(athleteStats[individual].shoe)
            if (biggestFoot === shoeSize) {
                return athleteStats[individual].rebounds;
            }
        }
    }
};

function mostPointsScored () {
    const allPoints = [];
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            let pointsScored = parseInt(athleteStats[individual].points)
            allPoints.push(pointsScored);
        }
    }
    const mostPoints = Math.max(...allPoints)
    for(const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for(const individual in athleteStats) {
            let individualPoints = parseInt(athleteStats[individual].points);
            if (individualPoints === mostPoints) {
                return individual;
            }
        }
    }
};

function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;
    let homeTeam = gameObject().home
    let awayTeam = gameObject().away
    for (const individual in homeTeam.players) {
        const stats = homeTeam.players[individual]
        homePoints += parseInt(stats.points);
    }
    for (const individual in awayTeam.players) {
        const stats = awayTeam.players[individual]
        awayPoints += parseInt(stats.points)
    }
    if (homePoints > awayPoints) {
        return homeTeam.teamName
    } else if (awayPoints > homePoints) {
        return awayTeam.teamName
    } else if (homePoints===awayPoints) {
        return "It\'s going into OT!"
    }
};

function playerWithLongestName () {
    const nameLengths = [];
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            const nameLength = individual.length;
            nameLengths.push(nameLength);
        }
    }
    const longestNameLength = Math.max(...nameLengths);
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            const nameLength = individual.length;
            if (longestNameLength === nameLength) {
                return individual;
            }
        }
    }
};

function doesLongNameStealATon() {
    const allSteals = [];
    const longName = playerWithLongestName();
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            const individualSteals = parseInt(athleteStats[individual].steals)
            allSteals.push(individualSteals);
        }
    }
    const mostSteals = Math.max(...allSteals);
    for (const homeOrAway in gameObject()) {
        const athleteStats = gameObject()[homeOrAway].players
        for (const individual in athleteStats) {
            const individualSteals = parseInt(athleteStats[individual].steals)
            if (individualSteals === mostSteals && individual === longName) {
                return true
            }
        }
    }
};

console.log(doesLongNameStealATon()); 
