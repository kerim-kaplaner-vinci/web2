import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
    {
        id: 1,
        title: "Scarface",
        director: "Brian De Palma",
        duration: 165,
    },
    {
        id: 2,
        title: "Fast and furious",
        director: "Rob Cohen",
        duration: 106,
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,
    },

];

function readAllFilms(minDuration: number): Film[] {
    const films = parse(jsonDbPath, defaultFilms);
    if (!minDuration) {
        return films;
    }

    const minDurationNumber = Number(minDuration);

    const filteredFilms = films.filter((film) => {
        return film.duration >= minDurationNumber;
    });
    return filteredFilms;
}

function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
        return undefined;
    }
    return film;
}

function createOneFilm(newFilm: NewFilm): Film {
    const films = parse(jsonDbPath, defaultFilms);

    const nextId =
        films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
        1;

    const createdFilm = {
        id: nextId,
        ...newFilm,
    };

    films.push(createdFilm);
    serialize(jsonDbPath, films);

    return createdFilm;
}

function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
        return undefined;
    }

    const deletedElements = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedElements[0];
}

function updateOneFilm(
    filmId: number,
    newFilm: Partial<NewFilm>
): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === filmId);
    if (!film) {
        return undefined;
    }

    if (newFilm.title !== undefined) {
        film.title = newFilm.title!; // the router already checks for the presence of title
    }
    if (newFilm.director !== undefined) {
        film.director = newFilm.director!;
    }
    if (newFilm.duration !== undefined) {
        film.duration = newFilm.duration!;
    }
    
    serialize(jsonDbPath, films);
    return film;
}

export {
    readAllFilms,
    readOneFilm,
    createOneFilm,
    deleteOneFilm,
    updateOneFilm,
};
