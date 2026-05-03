import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

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
    const api = new PokeAPI();
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
