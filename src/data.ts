export type Game = {
  name: string;
  image: string;
  description: string;
  rating: number;
};

export const games: Game[] = [
  {
    name: "Brawl Stars",
    image: "images/brawlstars.jpg",
    description: "個性豊かなキャラクターで戦う対戦アクションゲーム。",
    rating: 5,
  },
  {
    name: "Resident Evil",
    image: "images/residentevil.jpg",
    description: "恐怖と緊張感を楽しめるサバイバルホラーゲーム。",
    rating: 5,
  },
  {
    name: "Call of Duty",
    image: "images/callofduty.jpg",
    description: "リアルな戦場で迫力ある銃撃戦を楽しめるFPSゲーム。",
    rating: 5,
  },
];