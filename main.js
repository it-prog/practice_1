"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Назвіть один із останніх переглянутих фільмів?', ''),
      b = prompt('Яку оцінку ви йому поставите?', ''),
      c = prompt('Назвіть один із останніх переглянутих фільмів?', ''),
      d = prompt('Яку оцінку ви йому поставите?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

