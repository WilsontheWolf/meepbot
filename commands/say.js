module.exports = {
 name: 'say',
 allow: 'botowner',
 guildOnly: true,
 description: '<:message:535149168612868118>Says stuff as bot.',
    usage: `[message]`,
  catagory: `misc`,//admin fun misc code
  hidden: false,
  aliases: [''],
 execute(message, args, client, Discord) {
   
   function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace(process.env.TOKEN, 'not-a-real-token');
  else
      return text;
}
   
    var botmessage = args.join(" ")
    message.delete().catch(O_o=>{});
    message.channel.send(clean(botmessage))
  }
}