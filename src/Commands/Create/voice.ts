import { Command } from "../../types";
import { ApplicationCommandOptionType, ChannelType, createChannel } from "discord.js";

export const newvoice: Command = {
 name: 'new_vc', // ensure the command name is unique and properly registered
 description: 'Creates a new chat channel',
 options: [
     {
         name: "name",
         description: "The name of the chat voiceChannel",
         required: true,
         type: ApplicationCommandOptionType.String
     },
     {
         name: "description",
         description: "The description of the chat voiceChannel",
         required: true,
         type: ApplicationCommandOptionType.String
     }
 ],
 run: async (client, interaction) => {
     if (interaction.isChatInputCommand()) {
         const options = interaction.options;
         const channelName = options.getString('name')!;
         const description = options.getString('description')!;

         // Check if the interaction is in a guild
         if (interaction.guild) {
             try {
                const channel = await interaction.guild.channels.create({
                  name: channelName,
                  type: ChannelType.GuildVoice,
                  topic: description,
                });
                await interaction.reply(`Created a new voice channel: ${channel.name}`);
             } catch (error) {
                console.error(error);
                await interaction.reply('Failed to create a new voice channel');
             }
         } else {
             await interaction.reply('This command can only be used in a server.');
         }
     }
 }
}
