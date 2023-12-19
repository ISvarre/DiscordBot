import DiscordJS, { ChannelType, IntentsBitField } from "discord.js";
import dotenv from "dotenv";
import { commands as all_commands } from "./Commands";
import { GeneralCommandsType } from "./types";
import interactionCreate from "./interactionCreate";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.DirectMessageReactions,
  ],
});

const guilIds = [process.env.GUILD_ID, process.env.GUILD_ID_2];

client.on("guildCreate", async (guild) => {
  console.log(`Joined a new guild: ${guild.name} (id: ${guild.id})`);
});

client.on("ready", async () => {
  const guild = client.guilds.cache.get(process.env.GUILD_ID!);
  let commands: GeneralCommandsType;

  console.log(`${client.user?.displayName} is ready!`);

  // const channel = await client.channels.cache.get(process.env.CHANNEL_ID!);
  // if (channel && channel.isTextBased()) {
  //   channel.send(`${client.user?.displayName} is ready!`);
  // }

  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }

  all_commands.forEach((command) => {
    commands?.create(command);
  });

  interactionCreate(client);
});

client.login(process.env.DISCORD_TOKEN);
