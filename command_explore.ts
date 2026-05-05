import { State } from "./state.js";
import { Location } from "./pokeapi.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
        console.log("Please provide a location name to explore.");
        return;
    }
    const locationName = args.join(" ");
    try {
        const location: Location = await state.pokeAPI.fetchLocation(locationName);
        console.log(`Exploring ${location.name}...`);
        console.log("Found Pokemon:");
        for (const enc of location.pokemon_encounters) {
            console.log(` - ${enc.pokemon.name}`);
        }
    } catch (error) {
        console.error(`Error exploring location: ${error}`);
    }
}