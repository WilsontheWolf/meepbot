module.exports = {
 name: 'eval',
 allow: 'botowner',
 guildOnly: false,
 description: '<:code:535147614992203776>Runs text as javascript',
      usage: `[code]`,
  catagory: `code`,//admin fun misc code
  hidden: false,
  aliases: [''],
 execute: async (message, args, client, Discord, config, log, Music, fs, ytdl, moment, dmlog, command, unirest, hex64) => {
   function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace(process.env.TOKEN, 'undefined');
  else
      return text;
}
   try {
      const code = args.join(" ");
      var evaled = eval(code);
      if (typeof evaled !== "string") {
        var evaled = require("util").inspect(evaled);
      }
    } catch(err) {
       var length = `\`\`\`${clean(err)}\`\`\``.length
      var embedErr = new Discord.RichEmbed()
      .setColor('RED')
      .setTitle('**Error**')
      .setFooter(`eval command exexuted by ${message.author.username}`)
      .setTimestamp()
      if(length >= 2049){ console.error(`An eval command executed by ${message.author.username}'s error was too long (${length}/2048\) the responce was:
${clean(evaled)}`)
        embedErr.setDescription(`The error was too long with a length of \`${length}/2048\` characters. it was logged to the console`)}
   else{embedErr.setDescription(`\`\`\`${clean(err)}\`\`\``);}
      message.channel.send(embedErr);
      return;
    }
      var length = `\`\`\`${clean(evaled)}\`\`\``.length
      var embed = new Discord.RichEmbed()
      .setColor('GREEN')
      .setTitle('**Success**')
      .setFooter(`eval command exexuted by ${message.author.username}`)
      .setTimestamp()
      if(evaled !== 'undefined' && evaled !== 'Promise { <pending> }') if(length >= 2049){ console.log(`An eval command executed by ${message.author.username}'s responce was too long (${length}/2048\) the responce was:
${clean(evaled)}`)
        embed.setDescription(`The responce was too long with a length of \`${length}/2048\` characters. it was logged to the console`)}
   else{embed.setDescription(`\`\`\`${clean(evaled)}\`\`\``);}
      message.channel.send(embed);
  }
}