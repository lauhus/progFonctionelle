import { getResultForOneEquipe, playAfter, shoot } from "./penaltyShoot";
import { resultPenalty } from "./penaltyShoot";

describe('Tests pour la fonction shoot', () => {
    it('devrait renvoyer true ou false de manière aléatoire', () => {
        const result = shoot();
        expect(typeof result).toBe('boolean');
    });
});

describe('Tests pour la fonction getResultForOneEquipe', () => {
    it('devrait renvoyer un tableau de 5 résultats aléatoires', () => {
        const result = getResultForOneEquipe();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        for (const res of result) {
            expect(typeof res).toBe('boolean');
        }
    });
});

describe('Tests pour la fonction resultPenalty', () => {
    it('devrait renvoyer un tableau avec les résultats de la comparaison de deux équipes', () => {
        const team1 = [true, false, true, false, true];
        const team2 = [true, true, false, false, true];
        const result = resultPenalty(team1, team2);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(typeof result[0]).toBe('boolean');
        expect(typeof result[1]).toBe('boolean');
    });
});

describe('Tests pour la fonction playAfter', () => {
    it('devrait renvoyer un tableau avec les résultats de deux tirs non égaux', () => {
        const result = playAfter();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(typeof result[0]).toBe('boolean');
        expect(typeof result[1]).toBe('boolean');
        expect(result[0] !== result[1]).toBe(true);
    });
});
