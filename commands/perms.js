module.exports = {
 name: 'perms',
  allow: 'hidden',
guildOnly: true,
    description: 'Testing Phase',
    usage: `<userID>`,
  catagory: `misc`,//admin fun misc code
  hidden: false,
    execute(message, args, client, Discord){
      let userid
      if(args[0]) {if(message.guild.members.get(args[0]) === undefined) {userid = null 
                                                                         message.channel.send('Error user not found in server. Make sure you have the user\'s id not their tag')}
                  else {userid = args[0]}}
      else{userid = message.author.id}
      if (userid !== null){
      let perms = ``
      let x = '<:x:544994239587811350>'
      let check = '<:c:544992676676894731>'
if (message.guild.members.get(userid).hasPermission('ADMINISTRATOR', false, false, false)) { perms = perms + `${check}Admin
`}
      else {perms = perms + `${x}Admin
`}
    if (message.guild.members.get(userid).hasPermission('CREATE_INSTANT_INVITE', false, false, false)) { perms = perms + `${check}Create Invite
`}
      else {perms = perms + `${x}create Invite
`}  
      if (message.guild.members.get(userid).hasPermission('KICK_MEMBERS', false, false, false)) { perms = perms + `${check}Kick
`}
      else {perms = perms + `${x}Kick
`}  
      if (message.guild.members.get(userid).hasPermission('BAN_MEMBERS', false, false, false)) { perms = perms + `${check}Ban
`}
      else {perms = perms + `${x}Ban
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_CHANNELS', false, false, false)) { perms = perms + `${check}Manage Channels
`}
      else {perms = perms + `${x}Manage Channels
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_GUILD', false, false, false)) { perms = perms + `${check}Manage Server
`}
      else {perms = perms + `${x}Manage Server
`}  
      if (message.guild.members.get(userid).hasPermission('ADD_REACTIONS', false, false, false)) { perms = perms + `${check}Add Reactions
`}
      else {perms = perms + `${x}Add Reactions
`}  
      if (message.guild.members.get(userid).hasPermission('VIEW_AUDIT_LOG', false, false, false)) { perms = perms + `${check}View audit Log
`}
      else {perms = perms + `${x}View Audit Log
`}  
      if (message.guild.members.get(userid).hasPermission('PRIORITY_SPEAKER', false, false, false)) { perms = perms + `${check}Priority Speaker
`}
      else {perms = perms + `${x}Priority Speaker
`}  
      if (message.guild.members.get(userid).hasPermission('VIEW_CHANNEL', false, false, false)) { perms = perms + `${check}View Channel
`}
      else {perms = perms + `${x}View Channel
`}  
      if (message.guild.members.get(userid).hasPermission('SEND_MESSAGES', false, false, false)) { perms = perms + `${check}Send Messages
`}
      else {perms = perms + `${x}Send Messages
`}  
      if (message.guild.members.get(userid).hasPermission('SEND_TTS_MESSAGES', false, false, false)) { perms = perms + `${check}Send Text To Speach Messages
`}
      else {perms = perms + `${x}Send Text To Speach Messages
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_MESSAGES', false, false, false)) { perms = perms + `${check}Manage Messages (Delete Messages and Reactions)
`}
      else {perms = perms + `${x}Manage Messages (Delete Messages and Reactions)
`}  
      if (message.guild.members.get(userid).hasPermission('EMBED_LINKS', false, false, false)) { perms = perms + `${check}Send Embeds
`}
      else {perms = perms + `${x}Send Embeds
`}  
      if (message.guild.members.get(userid).hasPermission('ATTACH_FILES', false, false, false)) { perms = perms + `${check}Send Files + Images
`}
      else {perms = perms + `${x}Send Files + Images
`}  
      if (message.guild.members.get(userid).hasPermission('READ_MESSAGE_HISTORY', false, false, false)) { perms = perms + `${check}Read Message History
`}
      else {perms = perms + `${x}Read Message History
`}  
      if (message.guild.members.get(userid).hasPermission('MENTION_EVERYONE', false, false, false)) { perms = perms + `${check}Use @everyone and @here
`}
      else {perms = perms + `${x}Use @everyone and @here
`}  
      if (message.guild.members.get(userid).hasPermission('USE_EXTERNAL_EMOJIS', false, false, false)) { perms = perms + `${check}Use External Emojis
`}
      else {perms = perms + `${x}Use Externial Emojis
`}  
      if (message.guild.members.get(userid).hasPermission('CONNECT', false, false, false)) { perms = perms + `${check}Connect to Voice Channels
`}
      else {perms = perms + `${x}Connect to Voice Channels
`}  
      if (message.guild.members.get(userid).hasPermission('SPEAK', false, false, false)) { perms = perms + `${check}Speak in Voice Channels
`}
      else {perms = perms + `${x}Speak in Voice Channels
`}  
      if (message.guild.members.get(userid).hasPermission('MUTE_MEMBERS', false, false, false)) { perms = perms + `${check}Mute Members
`}
      else {perms = perms + `${x}Mute Members
`}  
      if (message.guild.members.get(userid).hasPermission('DEAFEN_MEMBERS', false, false, false)) { perms = perms + `${check}Deafen Members
`}
      else {perms = perms + `${x}Deafen Members
`}  
      if (message.guild.members.get(userid).hasPermission('MOVE_MEMBERS', false, false, false)) { perms = perms + `${check}Move Members Between Voice Channels
`}
      else {perms = perms + `${x}Move Members Between Voice Channels
`}  
      if (message.guild.members.get(userid).hasPermission('USE_VAD', false, false, false)) { perms = perms + `${check}Use Voice Activity Detection
`}
      else {perms = perms + `${x}Use Voice Activity Detection
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_NICKNAMES', false, false, false)) { perms = perms + `${check}Manage Nicknames
`}
      else {perms = perms + `${x}Manage Nicknames
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_ROLES', false, false, false)) { perms = perms + `${check}Manage Roles
`}
      else {perms = perms + `${x}Manage Roles
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_WEBHOOKS', false, false, false)) { perms = perms + `${check}Manage Webhooks
`}
      else {perms = perms + `${x}Manage Webhooks
`}  
      if (message.guild.members.get(userid).hasPermission('MANAGE_EMOJIS', false, false, false)) { perms = perms + `${check}Manage Emojis`}
      else {perms = perms + `${x}Manage Emojis`}  
      
      const embed = new Discord.RichEmbed().setAuthor(client.users.get(userid).username, client.users.get(userid).avatarURL)
      .setDescription(perms).setFooter(`Stats are for ${client.users.get(userid).username} in ${message.guild.name} as of`).setTimestamp()
      message.channel.send(embed)}
},
};