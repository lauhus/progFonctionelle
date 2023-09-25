import {
  getCountriesLoseFinals,
  getCountriesWinAndLoseFinales,
  getCountriesWinners,
  getCountriesWinnersAllFinals,
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
