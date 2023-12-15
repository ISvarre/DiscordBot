import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "./../types";

export const randomNumber: Command = {
  name: "randomnumber",
  description: "Replies with a random number between num1 and num2",
  options: [
    {
      name: "num1",
      description: "First number",
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
    {
      name: "num2",
      description: "Second number",
      required: true,
      type: ApplicationCommandOptionType.Integer,
    },
  ],
  run: async (client, interaction) => {
    const { options } = interaction;

    if (interaction.isChatInputCommand()) {
      const options = interaction.options;
      const num1 = options.getInteger("num1")!;
      const num2 = options.getInteger("num2")!;

      const min = Math.min(num1, num2);
      const max = Math.max(num1, num2);
      const diff = max - min;

      await interaction.reply({
        content: `Your random number is ${Math.floor(
          Math.random() * diff + min
        )}`,
      });
    }
  },
};
