module.exports = {
 name: 'emoji',
allow: 'all',
guildOnly: false,
    description: '😀Get\'s a servers custom emoji!',
      usage: ``,
  catagory: `misc`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){
let output = '';
let emoji = ''
let emojia = ''
let amount = 0
message.guild.emojis.forEach(emoji => {
  amount = amount + 1 
        output += `<${emoji.animated?'a':''}:e:${emoji.id}>`;
  if (emoji.animated) {emojia += `<a:e:${emoji.id}>`}
  else {emoji += `<e:${emoji.id}>`}
});
   if (output == '') {output = 'none'}
   if (output.length >= 2049) {output = `Your emoji are too POWERFUL. I can't send them all. Send \`WilsontheWolf#0074\` a message conplaining it`}
   const embed = new Discord.RichEmbed().setTitle(`${message.guild.name}'s custom emoji:`)
   if (amount >= 26) {embed.setDescription(output)}
   if (amount <= 25) {message.guild.emojis.forEach(emoji => {
     embed.addField(`${emoji.name}`, `<${emoji.animated?'a':''}:e:${emoji.id}>`, true)
   })}
   message.channel.send(embed)

},
};
//1025