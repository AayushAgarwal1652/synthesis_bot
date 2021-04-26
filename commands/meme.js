const {MessageEmbed} = require('discord.js');
const api = require('imageapi.js');

module.exports = {
    name: 'meme',
    description: 'this is a fun command',
    cooldown: '5000',
async execute(client, message, args){
    const subreddits = ['meme', 'dankmemes', 'memes'];
    const subreddit = subreddits[Math.floor(Math.random() * (subreddits.length))];
    const meme = await api.advanced(subreddit);
    return message.channel.send(new MessageEmbed()
    .setTitle(`s/${subreddit}`)
    .setURL(`https://reddit.com/r/${subreddit}`)
    .setDescription(`${meme.upvoteRatio}% of people liked this post, posted by u/**${meme.author}**`)
    .setImage(meme.img)
    )
  }    
}