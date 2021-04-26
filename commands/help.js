const Discord = require('discord.js')

 module.exports = {
     name: 'help',
     description: "this will show you my all cmds",
     execute(message, args, discord) {
        const newEmbed = new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setTitle('CLICK HERE TO JOIN SUPPORT SERVER')
         .setURL('https://discord.gg/2s4U4GPy7z')
         .setDescription('THIS IS THE HELP COMMANDS')
         .addFields(
             {name: 'MOD COMMANDS', 
             value: '``KICK, BAN``'},
             {name: 'UTILITY',
              value: '``RULES, PURGE, ANNOUNCE, SUGGEST, DM``'},
             {name: 'FUN',
             value: '``PING, MEME``'},
             {name: 'More info', value: 'join my support server for more info'}
         )
         .setFooter('Have A Good Day');

         message.channel.send(newEmbed);
     }
 }