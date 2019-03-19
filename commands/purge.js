module.exports = {
 name: 'purge',
allow: 'admin',
guildOnly: false,
    description: '<:delete:535154779597570097>Purges set amount of messages!',
    usage: `<amount>`,
  catagory: `admin`,//admin fun misc code
  hidden: false,
  aliases: [''],
    execute(message, args, client, Discord){
if(args[0]) {
        var amount = Math.round(args[0])
        } else {
        var amount = 100
        }
      let dmessages
if (amount > 100) return message.channel.send('Enter a number between 1 - 100')
  message.delete().catch(O_o=>{});
message.channel.bulkDelete(amount)
      if(amount == 1){
  message.channel.send(` \`${amount}\` message deleted`).then(sentMessage =>  setTimeout(function(){ sentMessage.delete(); }, 3000)
)
  .catch(console.error);}
      else{
  message.channel.send(` \`${amount}\` messages deleted`).then(sentMessage =>  setTimeout(function(){ sentMessage.delete(); }, 3000)
)
  .catch(console.error);}
},
};
//you copyig my code casue I got errors
