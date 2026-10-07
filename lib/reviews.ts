export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  body: string;
  source: "Google";
};

export const REVIEWS: Review[] = [
  {
    id: "r-jeanne",
    author: "Jeanne",
    rating: 5,
    date: "2026-03-01",
    body:
      "Ich kann Eric und seine Werkstatt uneingeschränkt empfehlen. Unser Auto hatte letztes Jahr leider in Frankreich eine Panne und die dortige Werkstatt konnte es nicht reparieren. Eric hat uns freundlicherweise erlaubt, das Auto in seine Werkstatt abschleppen zu lassen, und hat die Reparatur selbst durchgeführt. Die Kommunikation mit ihm war unglaublich unkompliziert, obwohl wir in der Schweiz leben und nicht persönlich vor Ort sein konnten. Wir durften unser Auto sogar an einem Samstag abholen, obwohl die Werkstatt normalerweise geschlossen ist. Vielen herzlichen Dank für die Hilfe!",
    source: "Google"
  },
  {
    id: "r-tyler",
    author: "Tyler D.",
    rating: 5,
    date: "2026-03-01",
    body:
      "Ich kann diese Werkstatt uneingeschränkt empfehlen. Kurz zusammengefasst: freundlich, kompetent, schnell und fair. Danke für den tollen Service!",
    source: "Google"
  },
  {
    id: "r-anja",
    author: "Anja Amedjkane",
    rating: 5,
    date: "2025-12-01",
    body:
      "Transparente Beratung vor und während der Reparatur. Die Betreuung war einwandfrei, kompetent und kundenorientiert. Ich fühlte mich sehr gut aufgehoben und komme definitiv wieder. Absolut empfehlenswert!",
    source: "Google"
  },
  {
    id: "r-ele",
    author: "Ele",
    rating: 5,
    date: "2025-11-01",
    body:
      "Hervorragende Beratung, schnelle Arbeit. Ich bin so froh, so eine tolle Werkstatt gefunden zu haben. Ein sehr, sehr nettes und hilfsbereites Team! 200 %.",
    source: "Google"
  },
  {
    id: "r-karsten",
    author: "Karsten Becker",
    rating: 5,
    date: "2022-10-01",
    body:
      "Mein Fahrzeug war dort zur Inspektion. Vom Abgeben bis zum Abholen war ich zu 100 % zufrieden mit dem Service. Ich habe sogar einen Anruf erhalten, weil zusätzliche Arbeiten nötig waren. Die Preise sind mehr als fair und transparent. Man fühlt sich gut aufgehoben und als Kunde wertgeschätzt. Ich kann Staudt uneingeschränkt empfehlen und werde zukünftig definitiv auch meine anderen Fahrzeuge dort hinbringen.",
    source: "Google"
  },
  {
    id: "r-oliver",
    author: "Oliver Baumann",
    rating: 5,
    date: "2023-10-01",
    body:
      "Schnelle Termine, kompetente und faire Beratung. Alle Arbeiten wurden zur vollsten Zufriedenheit erledigt. Als Bonus wurde noch mein Innenraum gereinigt. Toller Service mit guten Preisen. Jederzeit wieder.",
    source: "Google"
  }
];
