import {
  getCountriesLoseFinals,
  getCountriesWinAndLoseFinales,
  getCountriesWinners,
  getCountriesWinnersAllFinals,
  getCountryPlayFinals,
  getCountryWinners,
  getTeamWithBestParticipationAndSuccessRate,
  getTeamWithMostFinalLosses,
} from "./App";
import { COUNTRIES } from "../data/countries";

const countries = COUNTRIES;

describe('Tests pour getCountriesWinAtLeastOneFinal', () => {
  it('devrait renvoyer les pays qui ont remporté au moins une finale', () => {
    const result = getCountriesWinners(countries);
    const expectedCountries = ['England', 'Italy', 'France', 'Argentina', 'Brazil', 'Germany', 'Spain', 'Uruguay'];
    expect(result.map(country => country.name)).toEqual(expect.arrayContaining(expectedCountries));
  });
});

describe('Tests pour getCountriesWinAllFinals', () => {
  it('devrait renvoyer les pays qui ont remporté chacune des finales qu\'ils ont joué', () => {
    const result = getCountriesWinnersAllFinals(countries);
    const expectedCountries = ['England', 'Spain', 'Uruguay'];
    expect(result.map(country => country.name)).toEqual(expect.arrayContaining(expectedCountries));
  });
});

describe('Tests pour getCountriesParticipateInFinalsButNeverWin', () => {
  it('devrait renvoyer les pays qui ont participé à une finale sans jamais en remporter', () => {
    const result = getCountriesLoseFinals(countries);
    const expectedCountries = ['Croatia', 'Sweden', 'Czechoslovakia', 'Hungary', 'Netherlands'];
    expect(result.map(country => country.name)).toEqual(expect.arrayContaining(expectedCountries));
  });
});

describe('Tests pour getCountriesWinAndLoseFinales', () => {
  it('devrait renvoyer les pays qui ont à la fois remporté au moins une finale ET perdu au moins une finale', () => {
    const result = getCountriesWinAndLoseFinales(countries);
    const expectedCountries = ['Italy', 'France', 'Argentina', 'Brazil', 'Germany'];
    expect(result.map(country => country.name)).toEqual(expect.arrayContaining(expectedCountries));
  });
});

describe('Tests pour getCountry Winners', () => {
  it('devrait renvoyer le pays qui a gagné le plus de finale', () => {
    const result = getCountryWinners(countries);
    const expectedCountry = 'Brazil'
    expect(result.name).toEqual(expectedCountry);
  });
});

describe('Tests pour getCountry play finals', () => {
  it('devrait renvoyer le pays qui a joué le plus de finales', () => {
    const result = getCountryPlayFinals(countries);
    const expectedCountry = 'Germany'
    expect(result.name).toEqual(expectedCountry);
  });
});


describe('Test pour getTeamWithMostFinalLosses', () => {
  it('devrait renvoyer l\'équipe ayant perdu le plus de finales de la Coupe du Monde', () => {
    const result = getTeamWithMostFinalLosses(countries);
    expect(result?.name).toEqual('Germany');
  });
});


describe('Test pour getTeamWithBestParticipationAndSuccessRate', () => {
  it('devrait renvoyer l\'équipe ayant le meilleur taux de participation couplé au meilleur taux de réussite en finale', () => {
    const result = getTeamWithBestParticipationAndSuccessRate(countries);
    expect(result?.name).toEqual('Uruguay');
  });
});
