const Discord = require('discord.js')

 module.exports = {
     name: 'rules',
     description: "rules to follow",
     execute(message, args, discord) {
        const newEmbed = new Discord.MessageEmbed()
         .setColor('RANDOM')
         .setTitle('Rules')
         .setDescription('this is a embed for server rules')
         .addFields(
             {name: 'CHAT RULES', value: 'FOLLOW THE RULES'},
             {name: 'RULE 1', value: 'Be kindfull'},
             {name: 'RULE 2', value: 'Be Truthfull'},
             {name: 'RULE 3', value: 'No Abuse'},
             {name: 'RULE 4', value: 'No NSFW'},
             {name: 'RULE 5', value: 'No Racism'},
             {name: 'RULE 6', value: 'No Spam'},

             {name: '________', value: '______________'},

             {name: 'VOICE RULES', value: 'FOLLOW THE RULES'},
             {name: 'RULE 1', value: 'Enable Push To Talk In Vc So That We Maintain Decorum'},
             {name: 'RULE 2', value: 'No Hopping In Vc'},
             {name: 'RULE 3', value: 'Dont Stream Any NSFW Contents'},
             {name: 'RULE 4', value: 'No Voice Changer In Vc'},
             {name: 'RULE 5', value: 'No Loud Voice In Vc'},
             {name: 'RULE 6', value: 'No Tease In Vc'}
         )
         .setFooter('Make sure to follow the rules');

         message.channel.send(newEmbed);
     }
 }