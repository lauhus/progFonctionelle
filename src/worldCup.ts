import { EQUIPES, TEquipe } from "../data/fifa-ranking";

export enum CONFEDERATION {
    "CONCACAF",
    "CONMEBOL",
    "UEFA",
    "CAF",
    "AFC" ,
    "OFC"
}

export const nbEquipeByConfForQualification = [
    { conf: CONFEDERATION.AFC, nb: 8},
    { conf: CONFEDERATION.CAF, nb: 9},
    { conf: CONFEDERATION.CONCACAF, nb: 7},
    { conf: CONFEDERATION.CONMEBOL, nb: 6},
    { conf: CONFEDERATION.OFC, nb: 2},
    { conf: CONFEDERATION.UEFA, nb: 16},
]


export function getEquipeByConfederationAfterQualification(conf: CONFEDERATION, equipes: TEquipe[], nbEquipeByConfForQualification: { conf: CONFEDERATION , nb: number}[]) {
    const equipesByConf = equipes.filter((equipe) => equipe.confederation === conf);
    const equipesSortByRank = equipesByConf.sort((equipe , equ) => equipe.rank > equ.rank ? 1 : -1);
    const nbByConf = nbEquipeByConfForQualification.find((item) => item.conf === conf);
    return equipesSortByRank.slice(0,nbByConf?.nb);
}


export type TGroup = TEquipe[];

export function getAllGroupAfterQualification(equipes: TEquipe[]) {
    const sortedEquipesByConf: Record<CONFEDERATION, TEquipe[]> = {} as Record<CONFEDERATION, TEquipe[]>;

    for (const conf of Object.values(CONFEDERATION)) {
        sortedEquipesByConf[conf] = equipes
            .filter(equipe => equipe.confederation === conf)
            .sort((a, b) => a.rank - b.rank);
    }

    const groups: TEquipe[][] = [];
    const confs = Object.values(CONFEDERATION);
    while (confs.length > 0) {
        const group: TEquipe[] = [];
        for (let i = 0; i < 4; i++) {
            if (confs.length === 0) {
                break;
            }
            const confIndex = i % confs.length;
            const conf = confs[confIndex];
            if (sortedEquipesByConf[conf].length > 0) {
                group.push(sortedEquipesByConf[conf].shift()!);
            }
        }
        groups.push(group);
        confs.splice(0, 4);
    }

    return groups;
}



