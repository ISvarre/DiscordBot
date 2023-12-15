import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../types";

export const diceRoll: Command = {
  name: "diceroll",
  description: "Rolls a dice",
  options: [
    {
      name: "dice",
      description: "The number of sides the dice has",
      required: false,
      type: ApplicationCommandOptionType.Integer,
    },
  ],
  run: async (client, interaction) => {
    const { options } = interaction;

    if (interaction.isChatInputCommand()) {
      const options = interaction.options;
      const dice = options.getInteger("dice")! || 6;

      await interaction.reply({
        content: `You rolled a ${Math.floor(Math.random() * dice + 1)}`,
      });
    }
  },
};
