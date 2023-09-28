export type TEquipe = {
    name: string;
    cote: number
}

export type TMatch = {
    equipe1: TEquipe;
    equipe2: TEquipe;
    nul : TEquipe
}

export const MATCHS : TMatch[] = [
    {
        equipe1 : {
            name :"Monaco",
            cote: 3.20
        },
        equipe2 : {
            name :"Nice",
            cote: 2.20
        },
        nul: {
            name: 'nul',
            cote: 3.35
        }
    },
    {
        equipe1 : {
            name :"Nantes",
            cote: 6.50
        },
        equipe2 : {
            name :"Lorient",
            cote: 1.44
        },
        nul: {
            name: 'nul',
            cote: 4.95
        }
    },{
        equipe1 : {
            name :"Brest",
            cote: 2.20
        },
        equipe2 : {
            name :"Lyon",
            cote: 3.00
        },
        nul: {
            name: 'nul',
            cote: 3.70
        }
    },{
        equipe1 : {
            name :"Metz",
            cote: 3.20
        },
        equipe2 : {
            name :"Strasbourg",
            cote: 2.10
        },
        nul: {
            name: 'nul',
            cote: 3.45
        }
    },{
        equipe1 : {
            name :"Lens",
            cote: 4.25
        },
        equipe2 : {
            name :"Toulouse",
            cote: 3.50
        },
        nul: {
            name: 'nul',
            cote: 2.45
        }
    },{
        equipe1 : {
            name :"Le Havre",
            cote: 1.51
        },
        equipe2 : {
            name :"Clermont",
            cote: 5.20
        },
        nul: {
            name: 'nul',
            cote: 3.60
        }
    },{
        equipe1 : {
            name :"Montpellier",
            cote: 1.57
        },
        equipe2 : {
            name :"Rennes",
            cote: 5.20
        },
        nul: {
            name: 'nul',
            cote: 4.75
        }
    },
    {
        equipe1 : {
            name :"PSG",
            cote: 3.55
        },
        equipe2 : {
            name :"Marseille",
            cote: 3.65
        },
        nul: {
            name: 'nul',
            cote: 1.77
        }
    },
]


export function getProbabilities(matchs: TMatch[]) {
    const possibilities : string[] = Array(matchs.length * 3);
    possibilities.map((possibility) => {
        matchs.map((match) => "1");
    })
    return possibilities;
}
