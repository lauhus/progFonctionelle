export function shoot() {
    const rndm = Math.round(Math.random() * 10)
    return rndm % 2 === 0;
}

export function getResultForOneEquipe() {
    return [shoot() , shoot() , shoot() , shoot() , shoot()];
}

export function resultPenalty(team1:boolean[], team2: boolean[]) {
    const resultTeam1 = team1.filter((result) => result).length;
    const resultTeam2 = team2.filter((result) => result).length;

    return [ resultTeam1 > resultTeam2 , resultTeam2 > resultTeam1];
}

export function playAfter() {
    let resultTeam1 = shoot();
    let resultTeam2 = shoot();
    while(resultTeam1 === resultTeam2) {
        resultTeam1 = shoot();
        resultTeam2 = shoot();
    }

    return [ resultTeam1 , resultTeam2];
}



