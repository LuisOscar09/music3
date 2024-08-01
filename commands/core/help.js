const { EmbedBuilder } = require("discord.js");
const { Translate } = require("../../process_tools");

module.exports = {
    name: "help",
    description: "All the commands this bot has!",
    showHelp: false,

    async execute({ client, inter }) {
        const commands = client.commands.filter((x) => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor("#ff0000")
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.displayAvatarURL({
                    size: 1024,
                    dynamic: true,
                }),
            })
            .setDescription(
                await Translate(
                    "This code comes from a youtube channel [ghostface](https://www.youtube.com/channel/UCUKQnuh-45aJ6l1tw868ftQ) .<\n>The use of this one is possible while keeping the credits for free.<\n>If you want to remove the credits join the Discord support server. <[here](https://discord.gg/4f3bUTzbJ4)>)",
                ),
            )
            .addFields([
                {
                    name: `Enabled - ${commands.size}`,
                    value: commands.map((x) => `\`${x.name}\``).join(" | "),
                },
            ])
            .setTimestamp()
            .setFooter({
                text: await Translate(
                    "Music comes first - Made with heart by the Community <❤️>",
                ),
                iconURL: inter.member.avatarURL({ dynamic: true }),
            });

        inter.editReply({ embeds: [embed] });
    },
};
