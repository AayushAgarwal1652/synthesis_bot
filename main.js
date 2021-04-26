const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('this is bot is now ready');
    client.user.setPresence({
        activity: {
          name: '.help',
          type: "WATCHING"
        }
      })
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

      if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
   } else if(command === 'kick'){
      client.commands.get('kick').execute(message, args);
   } else if(command === 'ban'){
      client.commands.get('ban').execute(message, args);
   } else if(command === 'help'){
       client.commands.get('help').execute(message, args, Discord);
   } else if(command === 'invite'){
       client.commands.get('invite').execute(message, args, Discord);
   } else if(command === 'purge'){
    client.commands.get('purge').execute(message, args, Discord);
  } else if (command === 'announce'){
    client.commands.get('announce').execute(message, args, Discord, prefix);
  } else if(command === 'suggest'){
    client.commands.get('suggest').execute(message, args, client, Discord);
  } else if(command === 'dm'){
    client.commands.get('dm').execute(message, args);
  } else if(command === 'ping'){
    client.commands.get('ping').execute(message, args);
  } else if(command === 'meme'){
    client.commands.get('meme').execute(client, message, args);
  } 
});

client.login('YOUR_TOKEN');