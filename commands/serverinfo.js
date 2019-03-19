module.exports = {
 name: 'serverinfo',
 allow: 'all',
guildOnly: true,
  description: '<:server:535155814655197252>Provides info on the current server.',
    usage: ``,
  catagory: `misc`,//admin fun misc code
  hidden: false,
  aliases: [''],
 execute(message, args, client, Discord, config) {
let output = '';
message.guild.emojis.forEach(emoji => {
        output += `<${emoji.animated?'a':''}:e:${emoji.id}>`;
});
  let members = 0
  let users = 0
  let bots = 0
message.guild.members.forEach(member => {
        members = members + 1
        if(member.user.bot) {
        bots = bots + 1}
     else {
       users = users + 1}
});

   if (output == '') {output = 'none'}
   if (output.length >= 1025) {output = `Your emoji are too POWERFUL. Try using \`${config.prefix}emoji\` to see them`}
        var server = message.guild
        var servericon
        if (server.iconURL == null) {servericon = 'https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png'}
   else {servericon = server.iconURL}
        var embed = new Discord.RichEmbed()
       .setAuthor(`${server.name}`, `${servericon}`)
       .setThumbnail(`${servericon}`)
       .setColor('FF00FF')
       .setDescription(`Info of this server. Requested by ${message.author.tag}`)
       .addField(`Name`, `${server.name}`, true)
       .addField(`Id`, `${server.id}`, true)
       .addField(`Region`, `${server.region}`, true)
       .addField(`Created`, `${server.createdAt}`, true)
       .addField(`Owner`, `${server.owner.user.tag}<:owner:537682898795626522>`, true)
       .addField(`Large`, `${server.large}`, true)
       .addField(`Members`, `${server.members.size} (${bots} bots, ${users} users)`, true)
       .addField(`Roles`, `${message.guild.roles.size - 1}`, true)
       .addField(`Server Custom Emoji`, output)
       .setTimestamp()
        message.channel.send(embed)
  }
}