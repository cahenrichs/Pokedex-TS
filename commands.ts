import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";

export function getCommands(): Record<string, CLICommand> {
return {
    exit: {
        name: "exit", 
        description: "Exits the pokedex",
        callback: commandExit
    },
    help: {
        name: "help",
        description: "Displays commands that you can use",
        callback: commandHelp
    },
    map: {
        name: "map",
        description: "Display the next 20 locations",
        callback:commandMap
    },
    mapb: {
        name: "mapb",
        description: "Display the previous 20 locations",
        callback: commandMapb
    },
    explore: {
        name: "explore",
        description: "Explore a location in detail",
        callback: commandExplore
    },
    catch: {
        name: "catch",
        description: "Catch a pokemon in a location",
        callback: commandCatch
    },
    inspect: {
        name: "inspect",
        description: "Inspect a pokemon in your collection",
        callback: commandInspect
}
}
}