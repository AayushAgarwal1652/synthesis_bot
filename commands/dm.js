module.exports = {
    name: 'dm',
    ownerOnly: true,
    category: "owner",
async execute(message, args){
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have require permissions to run this cmd')
        if(!args[0]) return message.channel.send("Please provide a user!");
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send("no user found");
        const reason = args.slice(1).join(" ");
        if(!reason) return message.channel.send("please provide a message");
        try {
            await user.send(reason);
            return message.channel.send("Done!");
        } catch {

        }
    }
}