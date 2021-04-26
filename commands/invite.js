const Discord = require('discord.js')

 module.exports = {
     name: 'invite',
     description: "this will give a link to invite me",
     execute(message, args, discord) {
        const newEmbed = new Discord.MessageEmbed()
         .setColor('#ff0000')
         .setTitle('CLICK HERE TO INVITE ME')
         .setURL('https://discord.com/api/oauth2/authorize?client_id=833597971273875526&permissions=8&scope=bot')
         .setDescription('THIS HELPS YOU TO INVITE ME')
         .addFields(
             {name: 'Whoop', value: 'Hey Hi Do You Wanna Inv Me? Great Click Above'}
         )
         .setFooter('Have A Good Day');

         message.channel.send(newEmbed);
     }
 }