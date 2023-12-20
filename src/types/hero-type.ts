export interface Hero {
  biography: {
    alignment: string;
  };
  id: number;
  image: { url: string };
  name: string;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
}
