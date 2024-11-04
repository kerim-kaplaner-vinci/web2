import { Router } from "express";
import { NewText } from "../types";
import {
  createOneText,
  deleteOneText,
  readAllTexts,
  readOneText,
  updateOneText,
} from "../services/texts";

const router = Router();

router.get("/", (req, res) => {
  const level = req.query.level as string;
  const texts = readAllTexts(level);
  return res.json(texts);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const text = readOneText(id);
  if (!text) {
    return res.sendStatus(404);
  }
  return res.json(text);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string"
  ) {
    return res.sendStatus(400);
  }



  const { content, level } = body as NewText;

  const newText = createOneText({content,level});

  return res.json(newText);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deleteText = deleteOneText(id);
  if (!deleteText) {
    return res.sendStatus(404);
  }
  return res.json(deleteText);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim())) ||
    ("level" in body &&
      (typeof body.level !== "string" || !body.level.trim()))
  ) {
    return res.sendStatus(400);
  }

  const { content,level }: Partial<NewText> = body;

  const updateText = updateOneText(id, { content,level });

  if (!updateText) {
    return res.sendStatus(404);
  }

  return res.json(updateText);
});


export default router;
