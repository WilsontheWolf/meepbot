module.exports = {
 name: 'ban',
  allow: 'admin',
guildOnly: true,
    description: 'Ban\'s a user and deletes their messages for the past 7 days',
    usage: `[@user] <reason>`,
  catagory: `admin`,//admin fun misc code
  hidden: false,
    execute(message, args, client, Discord, config){
      
var bannable

var culprit = message.mentions.members.first()


args.shift()
var reason = args.join(" ");
      
if (!reason) {reason = 'Unspecified Reason'}
      
if(culprit){
  
var culpritid = culprit.id

var culpritname = culprit.user.tag

} else {
return message.channel.send(`I am unable to find the user you want me to ban. Be sure you @ them and they are in the server. Useage: \`${config.prefix}${module.exports.name} ${module.exports.usage}\``)
}

      

 if(!culprit.bannable) {return message.channel.send(`I'm sorry ${message.author.tag}. I am unable to ban ${culpritname}. I need to have higher perms than the user I'm trying to ban.`)}
      
      
const dmembed = new Discord.RichEmbed()
.setTitle('Banned')
.setDescription(`${culpritname} you have been banned from **${culprit.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)
                
culprit.ban({days:7,reason:`banned by ${message.author.tag} because ${reason}`})
      
const embed = new Discord.RichEmbed()
.setTitle('Banned')
.setDescription(`**${culpritname}** has been succcesfully Banned from **${message.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)


culprit.user.send(dmembed).then(a => {embed.setFooter(`${culpritname} was succesfully notified!`); message.channel.send(embed)}).catch(a => {embed.setFooter(`${culpritname} was unable to be notified!`); message.channel.send(embed)})


        
  }
};