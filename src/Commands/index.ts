import { ping } from "./ping";
import { Command } from "../types";
import { clear } from "./Delete/clear";
import { add } from "./add";
import { newchat } from "./Create/chat";
import { newvoice } from "./Create/voice";
import { compliment } from "./roast";

export const commands: Command[] = [
    ping,
    add,
    clear,
    newchat,
    newvoice,
    compliment,
]