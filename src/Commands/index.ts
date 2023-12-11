import { ping } from "./ping";
import { Command } from "../types";
import { clear } from "./clear";
import { add } from "./add";
import { newchat } from "./Create/chat";
import { newvoice } from "./Create/voice";

export const commands: Command[] = [
    ping,
    add,
    clear,
    newchat,
    newvoice,
]