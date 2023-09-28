import { getResultForOneEquipe } from "./penaltyShoot";
import { getProbabilities, MATCHS } from "./combine";

describe('Tests pour avoir les possibilités pour des combinées', () => {
    it('devrait renvoyer un tableau des combiné possible', () => {
        const matchs = MATCHS
        const result = getProbabilities(matchs);
       /* expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        for (const res of result) {
            expect(typeof res).toBe('boolean');
        }*/
    });
});
