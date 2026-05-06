import { State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        console.log("Please provide a Pokemon name to catch.");
        return;
    }
    const pokemonName = args.join(" ");
    try {
        const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
        console.log(`Throwing a Pokeball at ${pokemon.name}...`);
        const roll = Math.floor(Math.random() * pokemon.base_experience); // Simulate a catch roll based on base experience
        if (roll < 75) {
            console.log(`${pokemon.name} was caught!`);
            state.caughtPokemon[pokemon.name] = pokemon;
        } else {
            console.log(`${pokemon.name} escaped! Better luck next time.`);
        }
    } catch (error) {
        console.error(`Error catching Pokemon: ${error}`);
    }  
}