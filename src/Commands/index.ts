import { ping } from "./ping";
import { Command } from "../types";
import { clear } from "./clear";
import { add } from "./add";

export const commands: Command[] = [
    ping,
    add,
    clear
]