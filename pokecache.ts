import { validateHeaderName } from "node:http";

type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number;


add<T>(key: string, val: T):void {
    const entry: CacheEntry<T> = {
        createdAt: Date.now(),
        val,
    };
    this.#cache.set(key, entry);
}

get<T>(key: string): T | undefined {
    const entry = this.#cache.get(key);
    if (!entry) {
        return undefined;
    }
    return entry.val as T;  
}

#reap(){
    for (const [key, entry] of this.#cache.entries()) {
        if (Date.now() - entry.createdAt > this.#interval) {
            this.#cache.delete(key);
        }
    }
}

#startReapLoop() {
    if (this.#reapIntervalID) {
        return;
    }
    this.#reapIntervalID = setInterval(() => this.#reap(), this.#interval);    
}

constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
}

stopReapLoop() {
    if (this.#reapIntervalID) {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }
}
}

