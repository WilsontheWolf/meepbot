module.exports = {
 name: 'clean',
  allow: 'all',
guildOnly: true,
    description: 'Cleans up the messages sent from the bot.',
    usage: ``,
    catagory: `code`,//admin fun misc code
    hidden: false,
    execute(message, args, client, Discord, config){
let messagesDeleted
    message.channel.fetchMessages({ limit: 100 }).then(messages => {
        const botMessages = messages.filter(msg => msg.author.id == client.user.id);
      botMessages.forEach(msg=>{ msg.channel.fetchMessages({ limit: 1, before: msg.id}).then(msg2=>{
        const commandMessages = msg2.filter(msg => msg.delete());
        if(msg2.startsWith(config.prefix)){msg2.delete(); messagesDeleted = messagesDeleted + 1
           } 
      })})
      message.channel.fetchMessages({limit:100}).then(collection => {
const filtered = collection.filter(m=>m.content(config.prefix))
filtered.tap(a => {
a.delete()
})
})
        message.channel.bulkDelete(botMessages);
        messagesDeleted = botMessages.array().length; // number of messages deleted

        // Logging the number of messages deleted on both the channel and console.
        message.channel.send("Deletion of messages successful. Total messages deleted: " + messagesDeleted);
        console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
    }).catch(err => {
        console.error('Error while doing Bulk Delete');
        console.error(err);
    });
},
};