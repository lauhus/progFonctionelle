import React from 'react';
import './App.css';
import { COUNTRIES, TCountry } from "../data/countries";

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

function App() {


  return (
    <div className="App">
    </div>
  );
}

export default App;
