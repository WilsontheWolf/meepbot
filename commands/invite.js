module.exports = {
 name: 'invite',
allow: 'all',
guildOnly: false,
    description: '<:invite:535154079492472832>Sends the invite code!',
      usage: ``,
  catagory: `misc`,//admin fun misc code
  hidden: false,
    execute(message, args, client, Discord){
const embed = new Discord.RichEmbed()
.setTitle('Invite')
.setDescription(`[Link](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=311304)`)
      message.channel.send(embed)
},
};