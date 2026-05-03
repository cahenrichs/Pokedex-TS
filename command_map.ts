import { CLICommand, State } from "./state.js";
import { PokeAPI } from "./pokeapi.js";

export async function commandMap(state: State) {
const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL || undefined);
state.nextLocationsURL = locations.next;
state.previousLocationsURL = locations.previous;
locations.results.forEach((location) => {
    console.log(`${location.name}`);
});
}