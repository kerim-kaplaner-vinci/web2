import { Router } from "express";
import { Film, NewFilm } from "../types";

const films: Film[] = [
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

const router = Router();

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) {
    // Cannot call req.query.minimum-duration as "-" is an operator
    return res.json(films);
  }
  const minDuration = Number(req.query["minimum-duration"]);
  const filteredFilms = films.filter((film) => {
    return film.duration >= minDuration;
  });
  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
  ) {
    return res.sendStatus(400);
  }



  const { title, director, duration } = body as NewFilm;

  const existingFilm = films.find(f => f.title === title && f.director === director);
  if (existingFilm) {
    return res.status(409).send('Le film existe déjà');
  }

  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
  };

  films.push(newFilm);
  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = films.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, director, duration }: Partial<NewFilm> = body;

  if (title) {
    film.title = title;
  }
  if (director) {
    film.director = director;
  }
  if (duration) {
    film.duration = duration;
  }

  return res.json(film);
});


router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const body: unknown = req.body;

  if (typeof body !== "object" || body === null) {
    return res.sendStatus(400);
  }

  const { title, director, duration }: Partial<NewFilm> = body as Partial<NewFilm>;

  if (!title || !director || !duration || typeof duration !== 'number' || duration <= 0) {
    return res.sendStatus(400); // Paramètres invalides
  }

  const existingFilm = films.find(f => f.id === id);

  if (existingFilm) {
    // Remplacer la ressource existante
    existingFilm.title = title;
    existingFilm.director = director;
    existingFilm.duration = duration;

    return res.json(existingFilm);
  } else {
    // Créer une nouvelle ressource si l'id n'existe pas déjà
    if (films.some(f => f.id === id)) {
      return res.sendStatus(409); // Id déjà existant
    }
    const newFilm = {
      id,
      title,
      director,
      duration
    };

    films.push(newFilm);
    return res.json(newFilm);
  }
});






export default router;
