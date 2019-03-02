module.exports = {
 name: 'dm',
  allow: 'botowner',
guildOnly: false,
    description: 'description',
      usage: `[userid]`,
  catagory: `code`,//admin fun misc code
  hidden: true,
    execute(message, args, client, Discord, config, ){
      let dmlog = config.dmlog
      let oldUser = client.users.get(client.channels.get(dmlog).topic)
      let newUser = client.users.get(`${args}`)
      console.log(message.channel.id + ', ' + dmlog + `, ${oldUser}, ${newUser}`)
if(message.channel.id == dmlog) {
  console.log(`Setting dm log channel with an id of ${dmlog}'s topic to ${args}`)
message.channel.setTopic(args.join())
try{
  if(newUser && oldUser){
    if(newUser.bot){message.channel.send(`Changed the dm recivie from **${oldUser.tag}** (${oldUser.id}) to **${newUser.tag}** (${newUser.id})`)}
    else{message.channel.send(`Changed the dm recivie from **${oldUser.tag}** (${oldUser.id}) to **${newUser.tag}** (${newUser.id})`)}}
  else{
  if (newUser) {message.channel.send(`Changed the dm recivie from **\`Undefined User\`** (${client.channels.get(dmlog).topic}) to **${newUser.tag}** (${newUser.id})`)}
    else{
  if (oldUser) {message.channel.send(`Error changing the dm recivie from **${oldUser.tag}** (${oldUser.id}) to **\`Undefined User\`** (${args}). 
*Note: It was changed anyway.*`)}
  else{message.channel.send(`Error changing the dm recivie from **\`Undefined User\`** (${client.channels.get(dmlog).topic}) to **\`Undefined User\`** (${args}). 
*Note: It was changed anyway.*`)}}}
if (newUser){if(newUser.bot){message.channel.send(`*Note: User is a bot and I can't dm bots <:hugme:520657220153638932>.*`)}}}
  catch (error){message.channel.send(`There was an error verifying the id's were user's. It was still changed Error: 
\`\`\`xl
${error}\`\`\``)}
}
},
};