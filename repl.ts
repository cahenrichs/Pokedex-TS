import { createInterface } from "readline";
import { getCommands } from "./commands.js";

export function startREPL() {
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > ",
});

rl.prompt();
rl.on('line', (input) => {
    const words = cleanInput(input)
    if (words.length === 0) {
        rl.prompt()
    }
    const cmd = getCommands();
    const t = cmd[words[0]];

    if (!t) {
        console.log("Unknown command");
    } else {
        try{
        t.callback(cmd)
        } catch (e) {
            console.log(e)
        }
    }
//console.log(`Your command was: ${words[0]}`)
rl.prompt()
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