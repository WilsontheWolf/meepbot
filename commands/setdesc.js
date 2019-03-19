module.exports = {
 name: 'setdesc',
  allow: 'all',
guildOnly: false,
    description: 'Set\'s a user\'s description ',
    usage: `[description] `,
    catagory: `misc`,//admin fun misc code
    hidden: true,
  aliases: [''],
    execute(message, args, client, Discord){
let user = client.getProfile.get(message.author.id);
      if (!user) {
  user = {
    id: `${message.author.id}`,
    description: 'I\'m a mysterious person!'
  }
              client.setProfile.run(user);
}

      if (!args[0]){
      message.channel.send('I need something to set your description to.')}
      else{
        user = {
    id: `${message.author.id}`,
    description: args.join(' ')
  }
        client.setProfile.run(user);
      message.channel.send('description set to:')
      message.channe.send(user.description)}
},
};