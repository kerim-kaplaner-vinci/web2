import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Scarface",
    director : "Brian De Palma",
    duration : 165,
  },
  {
    id: 2,
    title: "Fast and furious",
    director : "Rob Cohen",
    duration : 106,
  },
  {
    id: 3,
    title: "Interstellar",
    director : "Christopher Nolan",
    duration : 169,
  },
  
];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
