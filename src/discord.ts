import DiscordJS, { ApplicationCommandOptionType, IntentsBitField, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        });
    }
});

client.on('ready', () => {
    const guild = client.guilds.cache.get(process.env.GUILD_ID!);
    let commands
    console.log(`${client.user?.displayName} is ready!`);

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong',
    });

    commands?.create({
        name: 'add',
        description: 'Adds two numbers',
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
        ]
    })



    client.on(`interactionCreate`, async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }

        const { commandName, options } = interaction;

        if (interaction.isChatInputCommand()) {
            const options = interaction.options;
            if (commandName === 'ping') {
                await interaction.reply({
                    content: 'pong',
                    // ephemeral: true,  // Only the user who ran the command can see the response
                });
            } else if (commandName === 'add') {
                const num1 = options.getNumber('num1')!;
                const num2 = options.getNumber('num2')!;
    
                await interaction.reply({
                    content: `The sum is ${num1 + num2}`,
                });
            }
        }

    })


    commands?.create({
        name: 'clear',
        description: 'Clears a specified number of messages from the channel',
        options: [
            {
                name: "number",
                description: "Number of messages to clear",
                required: true,
                type: ApplicationCommandOptionType.Integer
            }
        ]
    });
    
    
    client.on(`interactionCreate`, async (interaction) => {
        if (!interaction.isCommand()) {
            return;
        }
    
        const { commandName } = interaction;
    
        if (interaction.isChatInputCommand()) {
            const options = interaction.options;
    
            if (commandName === 'clear') {
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
    });
});

client.login(process.env.DISCORD_TOKEN);

    