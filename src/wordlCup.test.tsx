import { EQUIPES } from "../data/fifa-ranking";
import { CONFEDERATION, getEquipeByConfederationAfterQualification, nbEquipeByConfForQualification } from "./worldCup";

describe('Tests pour avoir la coupe du monde', () => {
    it('devrait renvoyer les équipes sélectionner pour l\'europe', () => {
        const equipeSelectedUEFA = getEquipeByConfederationAfterQualification(CONFEDERATION.UEFA,EQUIPES, nbEquipeByConfForQualification);
        expect(equipeSelectedUEFA.length).toBe(16);
    });
    it('devrait renvoyer les équipes sélectionner pour l\'Asie', () => {
        const equipeSelectedAFC = getEquipeByConfederationAfterQualification(CONFEDERATION.AFC,EQUIPES,nbEquipeByConfForQualification);
        expect(equipeSelectedAFC.length).toBe(8);
    });
    it('devrait renvoyer les équipes sélectionner pour l\'Afrique', () => {
        const equipeSelectedCAF = getEquipeByConfederationAfterQualification(CONFEDERATION.CAF,EQUIPES,nbEquipeByConfForQualification);
        expect(equipeSelectedCAF.length).toBe(9);
    });
    it('devrait renvoyer les équipes sélectionner pour l\'Oceanie', () => {
        const equipeSelectedOFC = getEquipeByConfederationAfterQualification(CONFEDERATION.OFC,EQUIPES, nbEquipeByConfForQualification);
        expect(equipeSelectedOFC.length).toBe(2);
    });
    it('devrait renvoyer les équipes sélectionner pour l\'Amerique du nord', () => {
        const equipeSelectedCONCACAF = getEquipeByConfederationAfterQualification(CONFEDERATION.CONCACAF,EQUIPES, nbEquipeByConfForQualification);
        expect(equipeSelectedCONCACAF.length).toBe(7);
    });
    it('devrait renvoyer les équipes sélectionner pour l\'Amerique du Sud', () => {
        const equipeSelectedCONMEBOL = getEquipeByConfederationAfterQualification(CONFEDERATION.CONMEBOL,EQUIPES, nbEquipeByConfForQualification);
        expect(equipeSelectedCONMEBOL.length).toBe(6);
    });
});


