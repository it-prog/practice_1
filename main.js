"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Назвіть один із останніх переглянутих фільмів?', ''),
          b = prompt('Яку оцінку ви йому поставите?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Ви подивились доволі невелику кількість фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви реальний кіноман');
} else {
    console.log('Вибачте, сталася помилка');
}

console.log(personalMovieDB);

