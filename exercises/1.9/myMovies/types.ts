interface Text {
  id: number;
  content: string;
  level: string;
}

type NewText = Omit<Text, "id">;

export type { Text, NewText };
