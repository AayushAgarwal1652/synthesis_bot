module.exports = {
    name: 'purge',
    description: 'this deletes messages in a valid number given',
    async execute(message, args, Discord) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('You do not have require permissions to run this cmd')
        if(!args[0]) return message.reply("please enter a valid amount");
        if(isNaN(args[0])) return message.reply("pls enter a real no.");

        if(args[0] > 100) return message.reply("you cant delete more than 100 message");
        if(args[0] < 1) return message.reply("you must delete atleas 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}