module.exports = {
 name: 'suggest',
  allow: 'all',
guildOnly: false,
    description: 'Suggest something for the bot.',
    usage: `<chatbot | command | other > [Mesage]`,
    catagory: `misc`,//admin fun misc code
    hidden: false,
    execute(message, args, client, Discord){
      let blog = "532255180935135233"
      const blacklist = ['']
      let cat
      let msg
if (args[0].toLowerCase() == 'chatbot' || args[0].toLowerCase() == 'chat') {
cat = 'ai'
  msg = args.splice(0).join(" ")}
      else if (args[0].toLowerCase() == 'command' || args[0].toLowerCase() == 'commands'){
      cat = 'command'
        msg = args.join(" ").slice(args[0])}
      else if (args[0].toLowerCase() == 'other' || args[0].toLowerCase() == 'other'){
      cat = 'other'
        msg = args.join(" ").slice(args[0])}
      else {cat = 'unspesified'
           msg = args.join(" ")}
      const embed = new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL)
      .setTitle(`Suggestion for ${cat} catagory`)
      .setDescription(msg)
      .setFooter(message.author.id)
      if(blacklist.includes(message.author.id)) {
      message.channel.send('You have been blacklisted from sending suggestions D:!')}      
      client.channels.get(blog).send(embed).then(a=>{message.channel.send('Suggestion sent succesfully')}).catch(a=>{message.channel.send('There was an error sending suggestion!')})
},
};