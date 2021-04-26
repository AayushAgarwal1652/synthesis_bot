module.exports = {
    name: 'ping',
    description: "This is a ping command!",
    execute(message, args){
        message.channel.send('Searching for the Ping!...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp
            msg.edit(`**${ping}ms**`);
        })
    }
}