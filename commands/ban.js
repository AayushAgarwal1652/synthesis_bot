module.exports = {
    name: 'ban',
    description: 'bans a member',
    async execute(message, args) {
        const member = message.mentions.members.first();
        var reason = args.slice(1) ?? 'No Reason Specified';

        if (!member) {
            message.reply('Please specify a member');
            return
        }

        if (!member.bannable) {
            message.reply('You can not ban that member');
            return
        }

        if (message.member.hasPermission('BAN_MEMBERS')) {
            member.ban({ reason });
            await message.reply(`${member} has been banned from "${mesage.guild.name}"`);
        } else {
            message.reply('You do not have permission to ban members');
        }
    }
}