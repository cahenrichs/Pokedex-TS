import { CLICommand, State } from "./state.js";

export async function commandMapb(state: State) {
    if (!state.previousLocationsURL) {
        console.log("No previous locations to display.");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.previousLocationsURL);
    state.nextLocationsURL = locations.next;
    state.previousLocationsURL = locations.previous;
    locations.results.forEach((location) => {
        console.log(`${location.name}`);
    });
}