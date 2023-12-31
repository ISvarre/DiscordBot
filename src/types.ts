import {
  ApplicationCommand,
  ApplicationCommandDataResolvable,
  ApplicationCommandManager,
  CacheType,
  Client,
  CommandInteraction,
  GuildApplicationCommandManager,
  GuildResolvable,
} from "discord.js";

export type GeneralCommandsType =
  | GuildApplicationCommandManager
  | ApplicationCommandManager<
      ApplicationCommand<{
        guild: GuildResolvable;
      }>,
      {
        guild: GuildResolvable;
      },
      null
    >
  | undefined;

export type Command = ApplicationCommandDataResolvable & {
  name: string;
  description: string;
  run: (
    client: Client<boolean>,
    interaction: CommandInteraction<CacheType>
  ) => void;
};
