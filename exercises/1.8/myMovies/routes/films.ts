import { Router } from "express";
import { NewFilm } from "../types";
import {
  createOneFilm,
  deleteOneFilm,
  readAllFilms,
  readOneFilm,
  updateOneFilm,
} from "../services/films";

const router = Router();

router.get("/", (req, res) => {
  const minDuration = Number(req.query["minimum-duration"]);
  const films = readAllFilms(minDuration);
  return res.json(films);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = readOneFilm(id);
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

  const newFilm = createOneFilm({title, director, duration});

  return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deleteFilm = deleteOneFilm(id);
  if (!deleteFilm) {
    return res.sendStatus(404);
  }
  return res.json(deleteFilm);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

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

  const updateFilm = updateOneFilm(id, { title, director, duration });

  if (!updateFilm) {
    return res.sendStatus(404);
  }

  return res.json(updateFilm);
});


export default router;
