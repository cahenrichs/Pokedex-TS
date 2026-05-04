import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
}

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL: string | null;
    previousLocationsURL: string | null;
}

export function initState(): State {
    const CACHE_INTERVAL = 1000 * 60 * 5; // 5 minutes
    const api = new PokeAPI(CACHE_INTERVAL);
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    });
    const cmds = getCommands()
return {
    readline: rl,
    commands: cmds,
    pokeAPI: api,
    nextLocationsURL: null,
    previousLocationsURL: null,
}
}
