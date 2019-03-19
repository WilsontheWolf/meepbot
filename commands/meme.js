module.exports = {
 name: 'meme',
  allow: 'all',
guildOnly: false,
    description: 'Get\'s a random meme',
    usage: ``,
    catagory: `fun`,//admin fun misc code
    hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){
client.channels.get('521795096614535179').fetchMessages().then(msg=>{
message.channel.send(msg.random().content)})
},
};