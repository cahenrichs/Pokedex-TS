import { State } from "./state.js";

export async function commandInspect(state:State, ...args: string[]) {
    if (args.length !== 1) {
        console.log("Please provide the name of a Pokemon to inspect.");
        return;
    }
    const name = args[0];
    if (name in state.caughtPokemon) {
        const pokemon = state.caughtPokemon[name];
        console.log(`Name: ${pokemon.name}`);
        console.log(`Height: ${pokemon.height}`);
        console.log(`Weight: ${pokemon.weight}`);
        console.log("Stats:");
        for (const stat of pokemon.stats) {
            console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log("Types:");
        for (const type of pokemon.types) {
            console.log(`  - ${type.type.name}`);
        }
    }
        else {  
        console.log(`you have not caught that pokemon`);
    }
}