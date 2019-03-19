module.exports = {
 name: 'beautify',
  allow: 'all',
guildOnly: false,
    description: 'Beautifies javascript code.',
    usage: `[code]`,
    catagory: `code`,//admin fun misc code
    hidden: false,
    aliases: ['bef'],
    execute(message, args, client, Discord ){
var beautify = require('js-beautify').js
let code
if (!args[0]) {
  message.channel.send('I need code to beautify')
} else {
  code = beautify(args.join(' '), {
    indent_size: 2,
    space_in_empty_paren: true
  })
  var length = `\`\`\`js
${(code)}
\`\`\``.length
  var embed = new Discord.RichEmbed()
    .setColor('DARK_VIVID_PINK')
    .setTitle('**Beautified Code**')
    .setFooter(`Code beautified for ${message.author.username}. Powered by js-beautify.`, message.author.avatarURL)
    .setTimestamp()
  if (length >= 2049) {
    embed.setDescription(`The code was too long with a length of \`${length}/2048\` characters.`)
  } else {
    embed.setDescription(`\`\`\`js
${(code)}
\`\`\``);
  }
  message.channel.send(embed);
}
},
};
