import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { State } from "./state.js";

export function startREPL(state: State) {

state.readline.prompt();
state.readline.on('line', (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
        state.readline.prompt()
    }
    const cmd = getCommands();
    const t = cmd[words[0]];

    if (!t) {
        console.log("Unknown command");
    } else {
        try{
        t.callback(state)
        } catch (e) {
            console.log(e)
        }
    }
//console.log(`Your command was: ${words[0]}`)
state.readline.prompt()
})
}

export function cleanInput(input: string): string[] {
    const trim = input.trim();
    const lower = trim.toLowerCase();

    if (lower === "") {
        return [];
    }
    return lower.split(/\s+/)
}