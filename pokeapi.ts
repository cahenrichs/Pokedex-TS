import { Cache } from "./pokecache.js";

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
    };
    version_details: any[];
  }[];
};

export type Pokemon = {
  name: string;
  base_experience: number;
}

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;


constructor(cacheInterval: number) {
  this.cache = new Cache(cacheInterval);
}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
     let url: string;
    if (pageURL) {
        url = pageURL
    } else {
        url = `${PokeAPI.baseURL}/location-area`;
    }

    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
        return cached;
    }

    const resp = await fetch(url)
    if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
    }
    const data = await resp.json()
    this.cache.add(url, data);
    return data as ShallowLocations
  }


  async fetchLocation(locationName: string): Promise<Location> {
    if (!locationName) {  
        throw new Error("Location name is required");
    }
    let url: string = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cache = this.cache.get<Location>(url);
    if (cache) {
        return cache;
    }

    const resp = await fetch(url)
    if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
    }

    const data = await resp.json()
    this.cache.add(url, data);
    return data as Location
}

async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    if (!pokemonName) {  
        throw new Error("Pokemon name is required");
    }
    let url: string = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    const cache = this.cache.get<Pokemon>(url);
    if (cache) {
        return cache;
    }

    const resp = await fetch(url)
    if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
    }

    const data = await resp.json()
    this.cache.add(url, data);
    return data as Pokemon
}
}

