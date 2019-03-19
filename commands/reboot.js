module.exports = {
 name: 'reboot',
  allow: 'botowner',
guildOnly: false,
    description: '<:power:535146566739296256>Reboots the Bot',
      usage: ``,
  catagory: `code`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){
const embed = new Discord.RichEmbed().setTitle('Done.').setDescription(`Restarted in **${Math.floor(client.ping)}**ms
<a:loading:524998745725861904>`).setColor([255, 0, 255]);
      client.user.setActivity('Rebooting...')

    message.channel.send(embed).then(() => {
      console.log(`${client.user.username} is Rebooting. Reboot triggered by ${message.author.username}`)
      process.exit(1);
    })
},
};