import { Command } from "../types";
import randomRoast from "../roastsList";

export const compliment: Command = {
  name: "compliment",
  description: "Gives a compliment to the user",
  run: async (client, interaction) => {
    const roast = randomRoast();
    await interaction.reply(roast);
  },
};
