module.exports = {
 name: 'dog',
  allow: 'all',
guildOnly: false,
    description: '🐕Gets a random dog image for you. `Broken IDK why`',
    usage: ``,
  catagory: `code`,//admin fun misc code
  hidden: true,
  aliases: [''],
    execute(message, args, client, Discord){
const unirest = require('unirest')
      unirest.get(`https://random.dog/woof.json`)
.end(function (result) {
const embed = new Discord.RichEmbed()
.setTitle('DOG')
.setImage(result.body.url)
.setFooter('Powered By random.dog')
message.channel.send(embed)
});


},
};