import { commands } from "./index";
import { Command } from "../types";

export const help: Command = {
  name: "help",
  description: "Lists all commands",
  run: async (client, interaction) => {
    const commandList = commands.map((command) => ({
      name: command.name,
      description: command.description,
    }));

    await interaction.reply({
      embeds: [
        {
          title: "Commands",
          fields: commandList.map((command) => ({
            name: `/${command.name}`,
            value: command.description,
          })),
        },
      ],
      ephemeral: true,
    });
  },
};
