let iplPlayers = {
    1: {
        name: "Player 1",
        indivivalScore: 0
    },
    2: {
        name: "Player 2",
        indivivalScore: 0
    },
    3: {
        name: "Player 3",
        indivivalScore: 0
    },
    4: {
        name: "Player 4",
        indivivalScore: 0
    },
    5: {
        name: "Player 5",
        indivivalScore: 0
    },
    6: {
        name: "Player 6",
        indivivalScore: 0
    },
    7: {
        name: "Player 7",
        indivivalScore: 0
    },
    8: {
        name: "Player 8",
        indivivalScore: 0
    },
    9: {
        name: "Player 9",
        indivivalScore: 0
    },
    10: {
        name: "Player 10",
        indivivalScore: 0
    },
    11: {
        name: "Player 11",
        indivivalScore: 0
    },
    12: {
        name: "Player 12",
        indivivalScore: 0
    },
    13: {
        name: "Player 13",
        indivivalScore: 0
    },
    14: {
        name: "Player 14",
        indivivalScore: 0
    },
    15: {
        name: "Player 15",
        indivivalScore: 0
    },
    16: {
        name: "Player 16",
        indivivalScore: 0
    },
    17: {
        name: "Player 17",
        indivivalScore: 0
    },
    18: {
        name: "Player 18",
        indivivalScore: 0
    },
    19: {
        name: "Player 19",
        indivivalScore: 0
    },
    20: {
        name: "Player20",
        indivivalScore: 0
    },
    21: {
        name: "Player 21",
        indivivalScore: 0
    },
    22: {
        name: "Player 22",
        indivivalScore: 0
    }
};


function formTeam(...playerId) {
    let team = {
        players: [],
        wicket: 0,
        ball: 1,
        over: 0,
        extra: 0,
        score: 0,
        dot: 0
    };

    playerId.forEach(id => {
        team.players.push(iplPlayers[id]);
    });
    return team;
}

function getRandomScore() {
    /*  
        1 ,2 , 3, 4 ,6 => run
        
        0 => dot
        7 => wicket
        8 => wide

        5 => 1 run
        9 => 0 run => dot 
    */
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber == 5) {
        randomNumber = 1;
    } else if (randomNumber == 9) {
        randomNumber = 0;
    } else if (randomNumber == 7) {
        randomNumber = 'out';
    } else if (randomNumber == 8) {
        randomNumber = 'wide';
    }
    return randomNumber;
}


let teams = [];
let id = 0,
    teamNo = 0,
    ballCount = 0,
    count = 0,
    temp = 0;

function getScore() {
    let run = getRandomScore();
    if (teamNo <= 1) {
        check: if (teams[teamNo].wicket != 10 && teams[teamNo].ball <= 120) {
            if (run == 1 || run == 2 || run == 3 || run == 4 || run == 6) {
                console.log(`Ball ${teams[teamNo].ball} : ${run}`);
                teams[teamNo].ball++;
                ballCount++;
            } else if (run == 'out') {
                run = 0;
                teams[teamNo].wicket++;
                console.log(`Ball ${teams[teamNo].ball} : Out`);
                teams[teamNo].players[id].indivivalScore = teams[teamNo].score - temp;
                temp = teams[teamNo].score;
                console.log(`${teams[teamNo].players[id].name} Out. Scored ${teams[teamNo].players[id].indivivalScore}`);
                if (teams[teamNo].wicket == 0) {
                    break check;
                } else {
                    teams[teamNo].ball++;
                    id++;
                    ballCount++;
                }
            } else if (run == 'wide') {
                run = 1;
                teams[teamNo].extra++;
                console.log(`Ball ${teams[teamNo].ball} : Wide`);
                break check;
            } else if (run == 0) {
                run = 0;
                teams[teamNo].dot++;
                console.log(`Ball ${teams[teamNo].ball} : Dot`);
                teams[teamNo].ball++;
                ballCount++;
            }

            teams[teamNo].score = teams[teamNo].score + run;

            if (teams[teamNo].ball % 6 == 1 && teams[teamNo].ball != 0) {
                console.log(`Score : ${teams[teamNo].score} | Wicket : ${teams[teamNo].wicket} | Dot : ${teams[teamNo].dot} | Extra : ${teams[teamNo].extra}`);
                teams[teamNo].over++;
                console.log(`Over : ${teams[teamNo].over} completed !!!`);

            }
        } else {
            if (teams[teamNo].wicket == 10) {
                console.log('Innings Over!!!. All Out!!!');
            } else if (teams[teamNo].ball >= 120) {
                console.log(`Innings Over!!!. 20 Overs Completed!!!`)
            }
            console.log(`Team ${teamNo+1} :  Scored ${teams[teamNo].score} runs for ${teams[teamNo].ball} ball in ${teams[teamNo].wicket} wickets`);
            console.log(teams[teamNo]);
            teamNo++;
            id = 0;
            ballCount = 0;
            temp = 0;
            if ((teams[0].wicket == 10 || teams[0].ball >= 120) && (teams[1].wicket == 10 || teams[1].ball >= 120) && count == 0) {
                console.log(`///////////Results///////////`)
                if (teams[0].score > teams[1].score) {
                    console.log(teams);
                    console.log(`Team 1 - Score : ${teams[0].score}`);
                    console.log(`Team 2 - Score : ${teams[1].score}`);
                    console.log(`Team 1 Won the match!!!`);
                    count++;
                } else {
                    console.log(teams);
                    console.log(`Team 1 - Score : ${teams[0].score}`);
                    console.log(`Team 2 - Score : ${teams[1].score}`);
                    console.log(`Team 2 Won the match!!!`);
                    count++
                }
            }
        }
    }
}

let team1 = formTeam(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21);
let team2 = formTeam(2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22);

teams.push(team1);
teams.push(team2);
