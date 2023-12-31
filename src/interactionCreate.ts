import { CommandInteraction, Client, Interaction } from "discord.js";
import { commands } from "./Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = commands.find(c => (c as any).name === interaction.commandName);
    if (!slashCommand) {
        interaction.reply({ content: "An error has occurred", ephemeral: true });
        return;
    }

    try {
        slashCommand.run(client, interaction);
    } catch (e) {
        console.log(e);
        interaction.reply({ content: "An error has occurred", ephemeral: true });
    }
}; 