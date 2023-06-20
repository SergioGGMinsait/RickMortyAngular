export interface CharactersInterface {
  info: {
    count: number;
  };
  results: CharacterItemInterface[];
}
export interface CharacterItemInterface {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    location: {
      name: string;
    }
}
