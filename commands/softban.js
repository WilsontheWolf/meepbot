module.exports = {
 name: 'softban',
  allow: 'admin',
guildOnly: true,
    description: 'Ban\'s a user and deletes their messages for the past 7 days then unbans them',
    usage: `[@user] <reason>`,
  catagory: `admin`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord, config){
      console.log('softban Started')
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
      
      console.log('start dm')
const dmembed = new Discord.RichEmbed()
.setTitle('SoftBanned')
.setDescription(`${culpritname} you have been softbanned from **${culprit.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)
                
culprit.ban({days:7,reason:`softbanned by ${message.author.tag} because ${reason}`})
message.guild.unban(culpritid)
      
const embed = new Discord.RichEmbed()
.setTitle('SoftBanned')
.setDescription(`**${culpritname}** has been succcesfully softbanned from **${message.guild}** by: **${message.member.displayName}** Reason:
\`\`\`
${reason}
\`\`\``)


culprit.user.send(dmembed).then(a => {embed.setFooter(`${culpritname} was succesfully notified!`); message.channel.send(embed)}).catch(a => {embed.setFooter(`${culpritname} was unable to be notified!`); message.channel.send(embed)})


console.log('fin')        
  }
};
