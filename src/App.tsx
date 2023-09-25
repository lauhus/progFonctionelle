import React from 'react';
import './App.css';
import { TCountry } from "../data/countries";

export function getCountriesWinners(countries: TCountry[]) {
  return countries.filter((country) => country.victories.length > 0);
}

export function getCountriesWinnersAllFinals(countries: TCountry[]) {
  return countries.filter((country) => country.finals.length === country.victories.length);
}

export function getCountriesLoseFinals(countries: TCountry[]) {
  return countries.filter((country) => country.finals.length > 0 && country.victories.length === 0);
}

export function getCountriesWinAndLoseFinales(countries: TCountry[]) {
  return countries.filter((country) => country.finals.length > 1 && country.victories.length < country.finals.length);
}

export function getCountryWinners(countries: TCountry[]) {
  return countries.sort((country, cntr) => country.victories.length < cntr.victories.length ? 1 :-1)[0];
}

export function getCountryPlayFinals(countries : TCountry[]){
  return countries.sort((country , cntr) => country.finals.length < cntr.finals.length ? 1 : -1)[0];
}

export function getTeamWithMostFinalLosses(countries: TCountry[]): TCountry | null {
  let mostLosses = 0;
  let teamWithMostLosses: TCountry | null = null;

  for (const country of countries) {
    const losses = country.finals.length - country.victories.length;

    if (losses > mostLosses) {
      mostLosses = losses;
      teamWithMostLosses = country;
    }
  }

  return teamWithMostLosses;
}

export function getTeamWithBestParticipationAndSuccessRate(countries: TCountry[]): TCountry | null {
  let bestTeam: TCountry | null = null;
  let bestRate = 0;

  for (const country of countries) {
    const totalFinals = country.finals.length;
    const victories = country.victories.length;
    const participationRate = totalFinals === 0 ? 0 : victories / totalFinals;

    if (participationRate > bestRate) {
      bestRate = participationRate;
      bestTeam = country;
    } else if (participationRate === bestRate) {
      const successRate = victories / totalFinals;
      const bestSuccessRate = bestTeam ? bestTeam.victories.length / bestTeam.finals.length : 0;

      if (successRate > bestSuccessRate) {
        bestRate = participationRate;
        bestTeam = country;
      }
    }
  }

  return bestTeam;
}

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
