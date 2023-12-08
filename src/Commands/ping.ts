import { Command } from "../types";

export const ping: Command  = {
    name: 'ping',
    description: 'Replies with pong',
    run: (client, interaction) => {
        
        interaction.reply({
            content: 'pong',
            // ephemeral: true,  // Only the user who ran the command can see the response
        });
    }
}