module.exports = {
 name: 'sprite',
allow: 'all',
guildOnly: false,
    description: '<:SpriteCranberry:519997585516396544>Shows a sprite emoji!',
      usage: ``,
  catagory: `fun`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){
const sprite = client.emojis.get('519997585516396544');
     message.delete().catch(O_o=>{}); 
     message.channel.send(`${sprite}`)
},
};