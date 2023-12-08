import { Command } from "../types";

export const clear: Command  = {
    name: 'clear',
    description: 'Clears a specified number of messages from the channel',
    run: async (client, interaction) => {
        if (interaction.isChatInputCommand()) {
            const options = interaction.options;
    
                const number = options.getInteger('number') || 1;
    
                if (number < 1 || number > 99) {
                    await interaction.reply({ content: 'You can only delete between 1 and 99 messages at a time.', ephemeral: true });
                    return;
                }
    
                if (!interaction.channel) {
                    await interaction.reply({ content: 'Cannot delete messages in this channel.', ephemeral: true });
                    return;
                }
    
                if ('bulkDelete' in interaction.channel) {
                    const messages = await interaction.channel.messages.fetch({ limit: number + 1 });
                    await interaction.channel.bulkDelete(messages);
    
                    await interaction.reply({ content: `Deleted ${number} messages.`, ephemeral: true });
                } else {
                    await interaction.reply({ content: 'Cannot delete messages in this channel.', ephemeral: true });
                }
            }
        }
}