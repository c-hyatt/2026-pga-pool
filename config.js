const CONFIG = {
  espnEventId: "401811945",
  espnEndpoint: "https://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard",
  pollIntervalMinutes: 5,

  // Paste your Google Sheet published CSV URL here once you have it
  sheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvwE8J6LLFBiFN5LwSyhgRDF5NJmhRN9dRMsy5tJ0PeQGAhIDZmvhJAT9vPeO3QMdBXtaDIxM0pKf9/pub?gid=106930365&single=true&output=csv",

  // Name normalization -- maps form submission names to ESPN API names
  // Add any mismatches you find during testing here
  nameMap: {
    "Ludvig Aberg": "Ludvig Åberg",
    "Rasmus Hojgaard": "Rasmus Højgaard",
    "Nicolai Hojgaard": "Nicolai Højgaard",
    "Padraig Harrington": "Pádraig Harrington",
  },

  tiers: [
    { label: "Tier 1 -- The Favorites",     range: "4/1 to 18/1" },
    { label: "Tier 2 -- Contenders",         range: "20/1 to 40/1" },
    { label: "Tier 3 -- Dark Horses",        range: "50/1 to 65/1" },
    { label: "Tier 4 -- Long Shots",         range: "70/1 to 125/1" },
    { label: "Tier 5 -- Big Underdogs",      range: "150/1 to 300/1" },
    { label: "Tier 6 -- The Field",          range: "500/1 and longer" },
  ]
};
