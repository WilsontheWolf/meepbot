module.exports = {
 name: 'test',
allow: 'botowner',
guildOnly: false,
    description: 'OwnerOnly',
      usage: ``,
  catagory: `code`,//admin fun misc code
  hidden: true,
  aliases: [''],
    execute(message, args, client, Discord){
message.channel.send('**Succ**scess')
//message.channel.send('Fail')
console.log(`hi there boi`)
},
};