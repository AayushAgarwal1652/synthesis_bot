module.exports = {
    name: 'kick',
    description: 'this kicks a member from the guild',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('You do not have require permissions to run this cmd')
            const memberTarger = message.guild.members.cache.get(member.id);
            message.channel.send("the user has been kicked sucessfully");
        }else{
            message.channel.send("pls specify a member");
        }
    }
}