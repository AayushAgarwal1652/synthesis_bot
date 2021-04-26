module.exports = {
    name: 'suggest',
    alisases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion',
    execute(message, args, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply('You do not have require permissions to run this cmd')
        if(!channel) return message.channel.send('suggestions channel does not exist please make a channel named #suggestions');
        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('❎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}