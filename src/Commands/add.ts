import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../types";

export const add: Command  = {
    name: 'add',
    description: 'Adds two numbers together',
    options: [
        {
            name: "num1",
            description: "The first number",
            required: true,
            type: ApplicationCommandOptionType.Number
        },
        {
            name: "num2",
            description: "The second number",
            required: true,
            type: ApplicationCommandOptionType.Number
        }
    ],
    run: async (client, interaction) => {
        const { options } = interaction;

        if (interaction.isChatInputCommand()) {
            const options = interaction.options;
            const num1 = options.getNumber('num1')!;
            const num2 = options.getNumber('num2')!;

            await interaction.reply({
                content: `The sum is ${num1 + num2}`,
            });
        }
    }
}