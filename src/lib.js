export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const EMAIL = "dhruv.shricharan@hotmail.com";
export const LINKEDIN = "https://linkedin.com/in/dhruv-shricharan-798b40186";
export const GITHUB = "https://github.com/thecozycod3r";
export const CASE_STUDIES = "https://thecozycod3r.github.io";
export const TABLE_NIGHT = "https://table-night-games.vercel.app";

export const requestAccess = (name, repo) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(`Access request: ${name}`)}&body=${encodeURIComponent(
    `Hi Dhruv,\n\nI saw ${name} on your portfolio and would like a look at the code (${repo}). My GitHub username is: \n\nThanks!`
  )}`;
