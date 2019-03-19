module.exports = {
 name: 'get',
allow: 'all',
guildOnly: true,
 description: '<:message:535149168612868118>Fetches a message with message\'s link ',
      usage: `[message link]`,
  catagory: `code`,//admin fun misc code
  hidden: false,
  aliases: [''],
 execute(message, args, client, Discord) {
   var arg = args[0].slice(32).split('/');
   var smessage = message
    var qchannel = client.channels.get(`${arg[1]}`)
    qchannel.fetchMessage(`${arg[2]}`)
      .then(message => {
        var qmsg = message
       //creates embed
       var embed = new Discord.RichEmbed()
       .setAuthor(`${qmsg.author.tag}`, `${qmsg.author.avatarURL}:`)
       .setColor('FFFFFF')
       .setDescription(`${qmsg.content}`)
       .setFooter(`In ${qmsg.guild.name}, #${qmsg.channel.name}`).setTimestamp(qmsg.createdTimestamp)
       //sends embed
       smessage.channel.send({embed});
     });
  }
}  