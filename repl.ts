import { createInterface } from "readline";

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
console.log(`Your command was: ${words[0]}`)
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