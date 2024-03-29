//Base URL
const base_url = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_API_KEY;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1; //returns an integer from 0 to 11 (????)
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currenDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currenDate}&ordering=-rating&page_size=10&key=${API_KEY}`;
const upcomping_games = `games?dates=${currenDate},${nextYear}&ordering=-added&page_size=10&key=${API_KEY}`;
const newGames = `games?dates=${lastYear},${currenDate}&ordering=-released&page_size=10&key=${API_KEY}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcomping_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsURL = game_id => `${base_url}games/${game_id}?key=${API_KEY}`;
//Game Screenshots
export const gameScreenshotURL = game_id =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
//Searched Game
export const searchGameURL = game_name =>
  `${base_url}games?search=${game_name}&page_size=9&key=${API_KEY}`;
