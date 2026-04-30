import { CLICommand, State } from "./state.js";

export function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!")
    for (const key in state.commands) {
        const cmd = state.commands[key];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}