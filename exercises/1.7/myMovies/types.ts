interface Film {
  id: number;
  title: string;
  director: string;
  duration : number;
}

type NewFilm = Omit<Film, "id">;

export type { Film, NewFilm };
