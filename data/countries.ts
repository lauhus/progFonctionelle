export type TCountry = {
  name: string;
  continent: string;
  confederation: string;
  victories: number[];
  finals: number[];
}

export const COUNTRIES : TCountry[] = [
  {
    name: "England",
    continent: "Europe",
    confederation: "UEFA",
    victories: [1966],
    finals: [1966],
  },
  {
    name: "Italy",
    continent: "Europe",
    confederation: "UEFA",
    victories: [1932, 1934, 1982, 2006],
    finals: [1932, 1934, 1970, 1982, 1994, 2006],
  },
  {
    name: "France",
    continent: "Europe",
    confederation: "UEFA",
    victories: [1998, 2018],
    finals: [1998, 2018, 2006, 2022],
  },
  {
    name: "Argentina",
    continent: "South America",
    confederation: "CONMEBOL",
    victories: [1978, 1986, 2022],
    finals: [1930, 1978, 1986, 1990, 2014, 2022],
  },
  {
    name: "Brazil",
    continent: "South America",
    confederation: "CONMEBOL",
    victories: [1958, 1962, 1970, 1994, 2002],
    finals: [1950, 1958, 1962, 1970, 1994, 1998, 2002],
  },
  {
    name: "Germany",
    continent: "Europe",
    confederation: "UEFA",
    victories: [1954, 1974, 1990, 2014],
    finals: [1954, 1966, 1974, 1982, 1986, 1990, 2002, 2014],
  },
  {
    name: "Spain",
    continent: "Europe",
    confederation: "UEFA",
    victories: [2010],
    finals: [2010],
  },
  {
    name: "Uruguay",
    continent: "South America",
    confederation: "CONMEBOL",
    victories: [1930, 1950],
    finals: [1930, 1950],
  },
  {
    name: "Croatia",
    continent: "Europe",
    confederation: "UEFA",
    victories: [],
    finals: [2018],
  },
  {
    name: "Sweden",
    continent: "Europe",
    confederation: "UEFA",
    victories: [],
    finals: [1958],
  },
  {
    name: "Czechoslovakia",
    continent: "Europe",
    confederation: "UEFA",
    victories: [],
    finals: [1934, 1962],
  },
  {
    name: "Hungary",
    continent: "Europe",
    confederation: "UEFA",
    victories: [],
    finals: [1938, 1954],
  },
  {
    name: "Netherlands",
    continent: "Europe",
    confederation: "UEFA",
    victories: [],
    finals: [1974, 1978, 2010],
  },
];
