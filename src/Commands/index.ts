import { ping } from "./ping";
import { Command } from "../types";
import { clear } from "./Delete/clear";
import { add } from "./add";
import { new_chat } from "./Create/chat";
import { new_voice } from "./Create/voice";
import { compliment } from "./roast";
import { randomNumber } from "./randomNum";
import { diceRoll } from "./dice";

export const commands: Command[] = [
  ping,
  add,
  clear,
  new_chat,
  new_voice,
  compliment,
  randomNumber,
  diceRoll,
];
