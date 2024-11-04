import path from "node:path";
import { Text, NewText } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
    {
        id: 1,
        content : "sshnvikshbdfiuvhd",
        level : "easy"
    },
    {
        id: 2,
        content : "sdfsdfsfsdgjghjhhhhhhhhhhhhhhf",
        level : "medium"
    },
    {
        id: 3,
        content : "ssgfbfbbf",
        level : "hard"
    },

];

function readAllTexts(level: String): Text[] {
    const texts = parse(jsonDbPath, defaultTexts);
    if (!level) {
        return texts;
    }

    const levelString = String(level);
    const filteredText = texts.filter((text) => {
        return text.level === levelString;
    });
    return filteredText;
}

function readOneText(id: number): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const text = texts.find((text) => text.id === id);
    if (!text) {
        return undefined;
    }
    return text;
}

function createOneText(newText: NewText): Text {
    const texts = parse(jsonDbPath, defaultTexts);

    const nextId =
        texts.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
        1;

    const createdText = {
        id: nextId,
        ...newText,
    };

    texts.push(createdText);
    serialize(jsonDbPath, texts);

    return createdText;
}

function deleteOneText(textId: number): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const index = texts.findIndex((text) => text.id === textId);
    if (index === -1) {
        return undefined;
    }

    const deletedElements = texts.splice(index, 1);
    serialize(jsonDbPath, texts);
    return deletedElements[0];
}

function updateOneText(
    textId: number,
    newText: Partial<NewText>
): Text | undefined {
    const texts = parse(jsonDbPath, defaultTexts);
    const text = texts.find((text) => text.id === textId);
    if (!text) {
        return undefined;
    }

    if (newText.content !== undefined) {
        text.content = newText.content!; // the router already checks for the presence of title
    }
    if (newText.level !== undefined) {
        text.level = newText.level!;
    }
    
    serialize(jsonDbPath, texts);
    return text;
}

export {
    readAllTexts,
    readOneText,
    createOneText,
    deleteOneText,
    updateOneText,
};
