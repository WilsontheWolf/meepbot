module.exports = {
 name: 'help',
 allow: 'all',
 guildOnly: false,
 description: '<:help:535149868734480387>Provides help with commands',
 usage: `<command name>`,
  catagory: `misc`,//admin fun misc code
  hidden: false,
 execute(message, args, client, Discord, config) {
  if(args[0]) {if (args.join(" ").startsWith(config.prefix)) {
    var commandName = args.shift().toLowerCase().slice(config.prefix.length);}
    else{
  //splits up the message prefix(removed), command, extra stuff(1,2,3)
    var commandName = args.shift().toLowerCase();}
  //checks if command is valid
  if (!client.commands.has(commandName)) {message.channel.send(`There was no command with the name ${commandName} use \`${config.prefix}help\` for a list of commands`) }
              else{let cmd = client.commands.get(commandName)
              console.log(cmd)
                   let allow = cmd.allow
                   if (cmd.allow === 'botowner') {allow = 'Bot Owner Only'}
                   if (cmd.allow === 'serverowner') {allow = 'Server Owner Only'}
                   if (cmd.allow === 'admin') {allow = 'Server Admin Only'}
                   if (cmd.allow === 'all') {allow = 'Everyone'}
                   if (cmd.allow === 'hidden') {allow = 'Everyone'}
                   let type = cmd.catagory
                   const embed = new Discord.RichEmbed().setTitle(cmd.name).setDescription(cmd.description)
                   .addField(`Usage:
*<> is optional and [] is required and <choice1| choice2> or [coice1 | choice2] means pick between the choices*`, `${config.prefix}${cmd.name} ${cmd.usage}`)
                   .addField(`Server only:`, cmd.guildOnly)
                   .addField(`Allow:`, allow)
                   .addField(`Catagory`, type)
                   .setColor('F000FF')
                   .setFooter(`Note this feature is incomplete`)
                   message.channel.send(embed)
                   }
              
              }     
   else {
     //embed 1
     const embed1 = new Discord.RichEmbed()
       .setAuthor(`Commands`, `${client.user.displayAvatarURL}`)
       .setColor('F000FF')
       .setTitle(`Commands for ${client.user.username}, prefix: ${config.prefix}`, `https://meepmusic.glitch.me`)
       .setDescription(`For more information about a command do: \`${config.prefix}help commandname\`
For chatbot send \`@${client.user.tag} [message]\` powered by <:dialogflow:550147766697852949>DialogFlow (wip)`)   
     args.join(" ")
         embed1.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL)
         //EMBED 2
         const embed2 = new Discord.RichEmbed()
       .setAuthor(`Admin Commands`, `https://cdn.discordapp.com/attachments/522069270692233217/547835358604165120/4819c675f7e80e64c322e03d100c7f19.png`)
       .setColor('F000FF'); let embed2a = 0
       client.commands.forEach(cmd =>{
         
         if(cmd.allow !== 'botowner' && cmd.allow !== 'hidden' && cmd.catagory == 'admin' && !cmd.hidden){
           embed2a = embed2a + 1
        embed2.addField(`${cmd.name}`, `${cmd.description}
\`${config.prefix}${cmd.name} ${cmd.usage}\``)}
       });
   //EMBED 3
         const embed3 = new Discord.RichEmbed()
       .setAuthor(`Fun Commands`, `https://cdn.discordapp.com/attachments/522069270692233217/547835358604165120/4819c675f7e80e64c322e03d100c7f19.png`)
       .setColor('F000FF'); let embed3a = 0
       client.commands.forEach(cmd =>{
         
         if(cmd.allow !== 'botowner' && cmd.allow !== 'hidden' && cmd.catagory == 'fun' && !cmd.hidden){
           embed3a = embed3a + 1
        embed3.addField(`${cmd.name}`, `${cmd.description}
\`${config.prefix}${cmd.name} ${cmd.usage}\``)}
       });
   //EMBED 4
         const embed4 = new Discord.RichEmbed()
       .setAuthor(`Misc Commands`, `https://cdn.discordapp.com/attachments/522069270692233217/547835358604165120/4819c675f7e80e64c322e03d100c7f19.png`)
       .setColor('F000FF'); let embed4a = 0
       client.commands.forEach(cmd =>{
         
         if(cmd.allow !== 'botowner' && cmd.allow !== 'hidden' && cmd.catagory == 'misc' && !cmd.hidden){
           embed4a = embed4a + 1
        embed4.addField(`${cmd.name}`, `${cmd.description}
\`${config.prefix}${cmd.name} ${cmd.usage}\``)}
       });
   //EMBED 5
         const embed5 = new Discord.RichEmbed()
       .setAuthor(`Coding Tools`, `https://cdn.discordapp.com/attachments/522069270692233217/547835358604165120/4819c675f7e80e64c322e03d100c7f19.png`)
       .setColor('F000FF'); let embed5a = 0
       client.commands.forEach(cmd =>{
         
         if(cmd.allow !== 'botowner' && cmd.allow !== 'hidden' && cmd.catagory == 'code' && !cmd.hidden){
           embed5a = embed5a + 1
        embed5.addField(`${cmd.name}`, `${cmd.description}
\`${config.prefix}${cmd.name} ${cmd.usage}\``)}
       });
//EMBED 6
         const embed6 = new Discord.RichEmbed()
       .setAuthor(`Unsorted Commands`)
       .setColor('F000FF'); let embed6a = 0
       client.commands.forEach(cmd =>{
         if(cmd.allow !== 'botowner' && cmd.allow !== 'hidden' && cmd.catagory !== 'fun' && cmd.catagory !== 'misc' && cmd.catagory !== 'admin'&& cmd.catagory !== 'code' && !cmd.hidden){
           embed6a = embed6a + 1
        embed6.addField(`${cmd.name}`, `${cmd.description}
\`${config.prefix}${cmd.name} ${cmd.usage}\``)}
       });
     if(message.channel.type !== 'dm' && message.channel.type !== 'group'){
     try{
       message.author.send('Note this is wip', embed1)
         if (embed2a !== 0) {
       message.author.send(embed2)}
         if (embed3a !== 0) {
       message.author.send(embed3)}
         if (embed4a !== 0) {
       message.author.send(embed4)}
         if (embed5a !== 0) {
       message.author.send(embed5)}
         if (embed6a !== 0) {
       message.author.send(embed6)}
         message.channel.send(`<@${message.author.id}>, I sent you a DM with the commands`)
       }
     catch(error){
     message.channel.send(`<@${message.author.id}>, There was an error sending you a DM. Please make sure I can send it to you.`)}}
     else{
     try{
       message.author.send('Note this is wip', embed1)
         if (embed2a !== 0) {
       message.author.send(embed2)}
         if (embed3a !== 0) {
       message.author.send(embed3)}
         if (embed4a !== 0) {
       message.author.send(embed4)}
         if (embed5a !== 0) {
       message.author.send(embed5)}
         if (embed6a !== 0) {
       message.author.send(embed6)}
       }
     catch(error){
     }}
 }}
}
