module.exports = {
 name: 'cat',
  allow: 'all',
guildOnly: false,
    description: '<:wowcat:539873435090812930>Gets a random cat image for you.',
    usage: ``,
  catagory: `fun`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){

      const unirest = require('unirest')
      unirest.get(`http://aws.random.cat//meow`)
.end(function (result) {
const embed = new Discord.RichEmbed()
.setTitle('Cat')
.setImage(result.body.file)
.setFooter('Powered By random.cat')
message.channel.send(embed)
});
},
};