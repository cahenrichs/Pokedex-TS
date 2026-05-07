import { State } from "./state.js";

export async function commandPokedex(State: State, ...args: string[]) {
    console.log("Your Pokedex:");
    for (const pokemonName in State.caughtPokemon) {
        console.log(` - ${pokemonName}`);
    }

}