import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!")
    for (const key in commands) {
        const cmd = commands[key];
        console.log(`${cmd.name}: ${cmd.description}`);
    }
}