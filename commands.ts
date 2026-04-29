import { CLICommand } from "./command.js";
import { commandExit } from "./command_exit.js";

export function getCommands(): Record<string, CLICommand> {
return {
    exit: {
        name: "exit", 
        description: "Exits the pokedex",
        callback: commandExit
    },
}
}