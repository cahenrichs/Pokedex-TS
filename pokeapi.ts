import { Cache } from "./pokecache.js";

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
      throw new Error("not implemented");
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Location[];
};

export type Location = {
  name: string;
  url: string;
};


