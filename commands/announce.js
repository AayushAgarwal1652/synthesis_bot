const {MessageEmbed} = require('discord.js');
module.exports = {
    name: 'announce',
    description: "this is an announcement command",
    usage: "<channel id> <msg>",
    execute(message, args, Discord, prefix) {
    let rChannel = message.guild.channels.cache.get(args[0])
    if(!rChannel)return message.channel.send(`You did not specify a channel id`)
    console.log(rChannel)
    let MSG = message.content.split(`${prefix}announce ${rChannel.id}`).join("")
    if(!MSG)return message.channel.send(`you did not specify a message to send!`)
    const _ = new MessageEmbed()
    .setTitle(`📣 New Announcement`)
    .setDescription(`${MSG}`)
    .setColor('RANDOM')
    rChannel.send(_)
    message.delete()
  }
}