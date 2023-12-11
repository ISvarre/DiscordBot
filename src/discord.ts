import DiscordJS, { IntentsBitField } from 'discord.js';
import dotenv from 'dotenv';
import { commands as all_commands } from './Commands';
import { GeneralCommandsType } from './types';
import interactionCreate from './interactionCreate';
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', async () => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID!);
    let commands: GeneralCommandsType;

    // write message in guild channel "bot is eady"
    const channel = await client.channels.cache.get(process.env.CHANNEL_ID!);
    if (channel && channel.isTextBased()) {
        channel.send(`${client.user?.displayName} is online!`);
    }

    console.log(`${client.user?.displayName} is ready!`);

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    all_commands.forEach(command => {
        commands?.create(command)
    });
    
    interactionCreate(client);
});

client.login(process.env.DISCORD_TOKEN);