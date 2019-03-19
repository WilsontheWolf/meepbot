module.exports = {
 name: 'stats',
allow: 'all',
guildOnly: false,
    description: '<:stats:535583051929878528>Provide stats for the bot!',
      usage: ``,
  catagory: `misc`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord, Music, stats){
      message.channel.startTyping()
      const startUsage = process.cpuUsage();
      const moment = require('moment')
var momentDurationFormatSetup = require("moment-duration-format");
      momentDurationFormatSetup(moment);
      // { user: 38579, system: 6986 }
require("moment-duration-format");
// spin the CPU for 500 milliseconds
const now = Date.now();
{setTimeout(function(){
 let ping = client.ping
 message.channel.stopTyping()
  if (ping <= 50){
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed =  new Discord.RichEmbed().setTitle('Stats')
.addField(`<:js:525156067743891486>node.js verson`, `${process.version}`, true)
.addField('<:bot:520718822152470530>discord.js version', `${Discord.version}`, true)
.addField('💽Ram', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField('<:computer:525198684565012501>Cpu', `${(process.cpuUsage(startUsage).user).toFixed(2)}`, true)
.addField('<a:pingshake:524998745721536514>Ping', `${Math.floor(ping)}ms`, true)
.addField(`👥Users`, `${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`, true)
.addField('<a:Clock:528295558205538305>Uptime', `${duration}`, true).setFooter(`Requested by ${message.author.tag}. Stats are from`)
.setTimestamp()
message.channel.send(embed)
}
else{
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
const embed =  new Discord.RichEmbed().setTitle('<a:e:525472555130159104>Stats')
.addField(`<:js:525156067743891486>node.js verson`, `${process.version}`, true)
.addField('<:bot:520718822152470530>discord.js version', `${Discord.version}`, true)
.addField('💽Ram', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField('<:computer:525198684565012501>Cpu', `${(process.cpuUsage(startUsage).user).toFixed(2)}`, true)
.addField('<a:PingSockRed:525001588935360522>Ping', `${Math.floor(ping)}ms!`, true)
.addField(`👥Users`, `${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`, true)
.addField('<a:Clock:528295558205538305>Uptime', `${duration}`, true).setFooter(`Requested by ${message.author.tag}. Stats are from`)
.setTimestamp()
message.channel.send(embed)
}}, 2000);}
}};