module.exports = {
 name: 'kick',
  allow: 'admin',
guildOnly: true,
    description: 'Kick\'s a user.',
    usage: `[@user] <reason>`,
  catagory: `admin`,//admin fun misc code
  hidden: false,
    execute(message, args, client, Discord, config){
      
var kickable

var culprit = message.mentions.members.first()


args.shift()
var reason = args.join(" ");
      
if (!reason) {reason = 'Unspecified Reason'}
      
if(culprit){
  
var culpritid = culprit.id

var culpritname = culprit.user.tag

} else {
return message.channel.send(`I am unable to find the user you want me to kick. Be sure you @ them and they are in the server. Useage: \`${config.prefix}${module.exports.name} ${module.exports.usage}\``)
}

      

 if(!culprit.kickable) {return message.channel.send(`I'm sorry ${message.author.tag}. I am unable to kick ${culpritname}. I need to have higher perms than the user I'm trying to kick.`)}
      
      
const dmembed = new Discord.RichEmbed()
.setTitle('Kicked')
.setDescription(`${culpritname} you have been kicked from **${culprit.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)
                
culprit.kick(`kicked by ${message.author.tag} because ${reason}`)
      
const embed = new Discord.RichEmbed()
.setTitle('kicked')
.setDescription(`**${culpritname}** has been succcesfully Kicked from **${message.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)


culprit.user.send(dmembed).then(a => {embed.setFooter(`${culpritname} was succesfully notified!`); message.channel.send(embed)}).catch(a => {embed.setFooter(`${culpritname} was unable to be notified!`); message.channel.send(embed)})


        
  }
};