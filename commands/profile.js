module.exports = {
 name: 'profile',
  allow: 'all',
guildOnly: false,
    description: 'Get\'s a user\'s profile ',
    usage: `<user> `,
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
client.setScore.run(user);
}
message.channel.send(user.description)
},
};