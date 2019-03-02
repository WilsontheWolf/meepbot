//SET UP EVERYTHING
const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const log = config.log
const Canvas = require('canvas')
const snekfetch = require('snekfetch');
const version = require('./package.json');
const moment = require("moment");
const stats = require('systeminformation');
const unirest = require('unirest');
const hex64 = require('hex64')
// ihack2712: edit, added a http server.
const Express = require('express');
const App  = Express()
const welcomeHook = new Discord.WebhookClient(process.env.WELCOMEID, process.env.WELCOMETO);
const logHook = new Discord.WebhookClient(process.env.LOGID, process.env.LOGTO);
let mlog = config.masterlog
let blog = config.botlog
let BTLog = '521748473247170625'
let meepLog =  '533073861516984351'
let prefix = config.prefix
let dmlog = config.dmlog
let trashlog = '548895962542637056'
const backgrounds = ['']
var apiai = require('apiai');
var diaflo = apiai(process.env.DFAPI);
//starts server and makes the website working
App.use(Express.static(__dirname + '/views'))
App.listen(3000, () => console.log('Server running on port 3000'))
//SET UP EVERYTHING
//sets up the dynamic command system
client.reload = async () => {
  console.log('reloading commands...')
client.commands = client.commands.deleteAll()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  console.log('reloading sucsessful(?)')
}}
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.Rnd = function Rnd(min, max) {
return Math.floor((Math.random()*(max-min))+min)
}
const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
    let fontSize = 70;
    do {
        ctx.font = `${fontSize -= 10}px sans-serif`;
    } while (ctx.measureText(text).width > canvas.width - 300);
    return ctx.font;
};


//EVENTS

client.on("error", error => {console.log(error)})

client.on("guildCreate", guild => {const embed = new Discord.RichEmbed().setTitle('New guild!').setDescription(`I have joined the guild ${guild.name}, owned by ${guild.owner.user.tag}`).setTimestamp().setColor('RANDOM').setFooter(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
client.channels.get(blog).send(embed)})
client.on("guildDelete", guild => {const embed = new Discord.RichEmbed().setTitle('Removed from a guild!').setDescription(`I have been removed from the guild ${guild.name} D:`).setTimestamp().setColor('RANDOM').setFooter(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
client.channels.get(blog).send(embed)})

//runs when message is deleted
client.on("messageDelete", messageDelete => {
  let ctime = client.readyTimestamp + client.uptime - messageDelete.createdTimestamp
  let channel
  if (messageDelete.channel.type == 'dm') {let channel = 'a dm'}
    if (messageDelete.channel.type == 'group') {let channel = 'a group dm'}
if (messageDelete.channel.type == 'text'){
channel = `#${messageDelete.channel.name} (${messageDelete.channel.id}) in ${messageDelete.guild.name}`}
if (ctime <= 1000) {
  console.log(`A message by ${messageDelete.author.tag}(${messageDelete.author.id}) in ${channel} got deleted but it was ignored because the message was deleted in ${ctime}ms!
Message: ${messageDelete.content}`)
}
  else{
    if(messageDelete.author.bot) { console.log(`A message by ${messageDelete.author.tag}(${messageDelete.author.id}) in ${channel} got deleted but it was ignored because the message was created by a bot. It was alive for ${Math.round(ctime/1000)}s!
Message: ${messageDelete.content}`)}
    else{
const embed = new Discord.RichEmbed().setTitle('Message Deleted!').setDescription(`Message:
${messageDelete.content}`).addField(`Message Details:`, `Message by ${messageDelete.author.tag}(${messageDelete.author.id}) in ${channel} got deleted`).setColor('RED').setTimestamp().setFooter(`The Message was alive for ${Math.round(ctime /1000)}sec`).setThumbnail('https://cdn.discordapp.com/attachments/519547869909483568/520415850784751619/latest.png');
 client.channels.get(mlog).send(embed)
      if(messageDelete.guild.id == '519323312195633152'){
client.channels.get(meepLog).send(embed)}
      if(messageDelete.guild.id == '548888975734079488'){
logHook.edit("Message Deleted!", "https://images-ext-2.discordapp.net/external/a72kGL96YF3_rf8dmXTKDyYRC-qspBhbOhhquZl-u5o/https/cdn.discordapp.com/attachments/519547869909483568/520415850784751619/latest.png")
                                                    .then(webhook => {webhook.send(embed).then(wh => {logHook.edit("Log Webhook by MeepBot", client.user.avatarURL)});})
                                                   }
      if(messageDelete.channel.type == 'text' && messageDelete.guild.id == 519997113648676879) {
      client.channels.get(BTLog).send(embed)}
}}});
/*client.on("messageDeleteBulk", BulkMessageDelete => {
  let message = BulkMessageDelete.first
  console.log(BulkMessageDelete)
  const embed = new Discord.RichEmbed().setTitle('Bulk Messages Deleted!').setDescription(`Messages Deleted: ${BulkMessageDelete.size}`).setColor('RED').setTimestamp().addField(`Message Details:`, `Messages in ${message.channel.name} (${message.channel.id}) got deleted in server ${message.guild.name} (${message.guild.id})`).setThumbnail('https://cdn.discordapp.com/attachments/519547869909483568/520415850784751619/latest.png')
  client.channels.get(mlog).send(embed)
  console.log(BulkMessageDelete)
  if(message.guild.id == '519323312195633152'){
client.channels.get(meepLog).send(embed)}
  
  if(BulkMessageDelete.channel.type == 'text' && BulkMessageDelete.guild.id == 519997113648676879) {
      client.channels.get(BTLog).send(embed)}
})*/
//runs when message is edited
client.on('messageUpdate', (oldMessage, newMessage) => {
  if(newMessage.author.id === client.user.id) return
  let ctime = client.readyTimestamp + client.uptime - oldMessage.createdTimestamp
  let channel
  let server
  if (newMessage.channel.type == 'dm' ){
    if (newMessage.channel.type == 'dm') {channel = 'a dm'}
   else {channel = 'a group dm'}
  }  else{
    channel = `#${newMessage.channel.name} (${newMessage.channel.id}) in ${newMessage.guild.name}`
   server = newMessage.guild.id}
if (ctime <= 1000) return;
  if(newMessage != ''){
  if(oldMessage.content === newMessage.content) return console.log(`A message was edited but was ignored because the Old Message = New Message. The message is:
${oldMessage.content}`)
   const embed = new Discord.RichEmbed().setTitle('Message Editied!').setDescription(`New Message:
${newMessage.content}`).addField('Old Message:', `${oldMessage.content}`).addField(`Message Details:`, `Message by ${newMessage.author.tag}(${newMessage.author.id}) in ${channel} was edited`).setColor('BLUE').setTimestamp().setFooter(`The Message was unchanged for ${Math.round(ctime / 1000)}sec`).setThumbnail('https://images-ext-1.discordapp.net/external/719r1Osmo7wivrqgwv5HQyU23uiOME3U4l7ApOzY7YQ/https/i.imgur.com/1cdcq2H.png');
 client.channels.get(mlog).send(embed)
if(server == '519323312195633152'){
client.channels.get(meepLog).send(embed)}
    if(oldMessage.channel.type == 'text' && oldMessage.guild.id == 519997113648676879) {
      client.channels.get(BTLog).send(embed)
    }
    
    if(server == '548888975734079488'){
logHook.edit("Message Edited!", "https://images-ext-1.discordapp.net/external/719r1Osmo7wivrqgwv5HQyU23uiOME3U4l7ApOzY7YQ/https/i.imgur.com/1cdcq2H.png")
                                                    .then(webhook => {webhook.send(embed).then(wh => {logHook.edit("Log Webhook by MeepBot", client.user.avatarURL)});})
                                                   }
}});
//Runs when a member leaves
client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-and-goodbye');
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://cdn.glitch.com/0f219cf6-8874-4596-b103-fe60b57e709f%2Fwallpaper.jpg?1544540642640');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Goodbye. We will miss you,', canvas.width / 2.5, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
  console.log(member.guild.id)
if(member.guild.id === '519323312195633152'){
    channel.send(`${member.user.tag} just left... Now there's only ${member.guild.members.size} MEEPs...`, attachment);}
  else{if (member.guild.id == '548888975734079488'){
    console.log('webhook start')
    welcomeHook.edit("Goodbye!", "https://cdn.glitch.com/423b9980-4198-4dd9-b628-e9d0d19a164c%2Fimage.png?1550946157852")
                                                    .then(webhook => {webhook.send(`${member.user.tag} just left... Now there's only ${member.guild.members.size} Users...`, attachment).then(wh => {welcomeHook.edit("Welcome Webhook by MeepBot", client.user.avatarURL)});})
    //https://cdn.glitch.com/423b9980-4198-4dd9-b628-e9d0d19a164c%2Fimage.png?1550946157852
                                                   }
       else{
    channel.send(`${member.user.tag} just left... Now there's only ${member.guild.members.size} Users...`, attachment);}}

});
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-and-goodbye');
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://cdn.glitch.com/0f219cf6-8874-4596-b103-fe60b57e709f%2Fwallpaper.jpg?1544540642640');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`Welcome to the server,`, canvas.width / 2.5, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
if(member.guild.id === '519323312195633152'){
    channel.send(`Hey <@${member.user.id}>, you are the ${member.guild.members.size}th User on this server.`, attachment);}
  else{if (member.guild.id == '548888975734079488'){
    console.log('webhook start')
    welcomeHook.edit("Welcome!", "https://cdn.glitch.com/423b9980-4198-4dd9-b628-e9d0d19a164c%2Fimage.png?1550946157852")
                                                    .then(webhook => {webhook.send(`Hey <@${member.user.id}>, you are the ${member.guild.members.size}th User on this server.`, attachment).then(wh => {welcomeHook.edit("Welcome Webhook by MeepBot", client.user.avatarURL)});})
    //https://cdn.glitch.com/423b9980-4198-4dd9-b628-e9d0d19a164c%2Fimage.png?1550946157852
                                                   }
       else{
    channel.send(`Hey <@${member.user.id}>, you are the ${member.guild.members.size}th MEEP on this server.`, attachment);}}
});

//starts the musicbot-addon client
Music.start(client, {
  botPrefix: prefix,
  prefix: prefix,
  maxQueueSize: "100",
  disableLoop: true,
  ownerOverMember: true,
  botOwner: '517371142508380170',
  youtubeKey: process.env.YOUTUBE,
  anyoneCanSkip: false,
  botAdmins: ["216371391358959626", "517371142508380170", "409844605614424074", "31297498587647181", "312974985876471810"],
  logging: false,
  anyonecanadjust: false,
  AnyoneCanLeave: false,
  requesterName: true,
  enableQueueStat: true,
  enableAliveMessage: true,
  defVolume: 200,
  checkQueues: true,
  musicPresence: false,
  insertMusic: true,
 help:{
    enabled: true,
    name: "mhelp"
},
  leave:{
    enabled: true,
    name: "leave",
    alt: ["lve", "leev", "begone", "begone_unholy_demon"]
}});
//EVENTS

//COMMANDS
//runs when received a message and runs the command
client.on('message', message => {
  if (message.content.startsWith('?refresh') && message.author.id =='517371142508380170'){
 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
     command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}}
  //eliminates useless messages, bot, dm, group dm, no prefix, only owner's id
  if (message.author.bot) return;
  
  //sends dm messages to the log
  if (message.channel.type === 'dm' && !message.content.startsWith(prefix)){ 
  const embed = new Discord.RichEmbed().setAuthor(`${message.author.username}:`, message.author.avatarURL)
  .setDescription(message.content)
  .setTimestamp()
  if (client.channels.get(dmlog).topic === message.author.id){
  embed.setFooter(message.author.id+ " (Current User)")}
    else{
  embed.setFooter(message.author.id)}
  client.channels.get(dmlog).send(embed)}
  
  //Sends messages sent in dmlog to a dm.
  if (message.channel.id === dmlog && !message.content.startsWith(prefix)){
try {var dmmessage = message.content
const embed = new Discord.RichEmbed().setAuthor(`${message.author.username}:`, message.author.avatarURL)
  .setDescription(message.content)
  .setTimestamp()
let user = client.users.get(client.channels.get(dmlog).topic)
user.send(embed);
     const embed2 = new Discord.RichEmbed().setAuthor(`${message.author.username}:`, message.author.avatarURL)
  .setDescription(message.content)
  .setTimestamp()
.setFooter(`Message sent to ${user.tag} (${user.id})`, user.avatarURL)
     message.channel.send(`Message Sent:`, embed2)
}
                          catch (error) { console.error(error)
message.channel.send('Their was an error sending a dm to the user' + `
error: 
\`\`\`xl
${error}
\`\`\``)}}
///////////////////////////////////
////////////Commands//////////////
/////////////////////////////////
  if (message.content.indexOf(config.prefix) !== 0) return;
  //splits up the message prefix(removed), command, extra stuff(1,2,3)
  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  //makes 'em small letters
  var commandName = args.shift().toLowerCase();
  //checks if command is valid
  if (!client.commands.has(commandName)) return;
  let isOwner 
  if(message.author.id == config.ownerId || message.author.id == config.chicken) {isOwner = true}
  else {isOwner = false}
  try {
    var command = client.commands.get(commandName)
    
    if(command.guildOnly && message.channel.type === 'dm') return message.channel.send('This command is server only, please run this command on server.');
    
    if(command.allow === 'botowner') {if(!isOwner) return message.channel.send('<:owner:537682898795626522>This command is bot owner only');}
    
    if(command.allow === 'serverowner' && message.author.id !== message.guild.owner.id) {if(message.author.id !== config.ownerId && message.author.id !== config.chicken) {return message.channel.send('This command is server owner only')}}
    
    if(command.allow === 'admin') {if(!message.member.hasPermission('MANAGE_GUILD', false, true, true) && !isOwner){return message.channel.send('This command is server admin only')}}
    ///////////////////////////////////////////////////////////////////////
    ///////////////////COMMAND HANDLER/////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    
    command.execute(message, args, client, Discord, config, log, Music, fs, moment, dmlog, command, blog, unirest, hex64);
}
catch (error) {
  //catches error sends it to log and to the command author
    console.error(error);
  var largs = args.join(" ")
  
  const embed = new Discord.RichEmbed().addField('<a:WeeWoo:525000522932027393>**__ERROR__**<a:WeeWoo:525000522932027393>', `Something went wrong while trying to execute that command. Follow the steps bellow to see if that fixes you issue:`)
  .addField('Step 1', 'Make sure that you provided arguments that are proper. You can check what arguments are needed in the ' + prefix + 'help command (When I get to making it).')
  .addField('Step 2', 'Make sure the bot has the proper access to do that command.')
  .addField('Step 3', `Finally if that doesn\'t work send me (<@${client.user.id}>) a message explaining the issue with the error message below and I will send it for you to get help. It also could be I have an issue with my code and hasen\'t been fixed it yet.`)
  .addField('Error message:', `\`\`\` ${error}\`\`\``)
  .setColor('RED')
  .setTimestamp()
  .setFooter(`${client.user.username} error message`)  
  const bembed = new Discord.RichEmbed().addField('<a:WeeWoo:525000522932027393>**__ERROR__**<a:WeeWoo:525000522932027393>', `OOF something went wrong.`)
  if (largs.length == 0) {bembed.addField('Args:', `none`)} else {bembed.addField('Args:', largs)}
  if (message.channel.type == 'text') {bembed.addField('Details:', `\`${message.author.tag}\` (\`${message.author.id}\`) got an error while trying to exexute the command \`${commandName}\` in server \`${message.guild.name}\` (\`${message.guild.id}\`) in the channel \`${message.channel.name}\`(\`${message.channel.id}\`)`)}
  else {bembed.addField('Details:', `\`${message.author.tag}\` (\`${message.author.id}\`) got an error while trying to exexute the command \`${commandName}\` in a dm`)}
  bembed.addField('Error message:', `\`\`\` ${error}\`\`\``)
  .setColor('RED')
  .setTimestamp()
  .setFooter(`Error message at`)
  client.channels.get(blog).send(`<@${config.ownerId}>`,bembed)  
  message.channel.send(embed);
  
}
});
client.on('error', error =>{
const bembed = new Discord.RichEmbed().addField('<a:WeeWoo:525000522932027393>**__ERROR__**<a:WeeWoo:525000522932027393>', `OOF something went wrong.`)
.addField(`An uncaugh error occured`)
   bembed.addField('Error message:', `\`\`\` ${error}\`\`\``)
  .setColor('RED')
  .setTimestamp()
  .setFooter(`Error message at`)
  client.channels.get(blog).send(`<@${config.ownerId}>`,bembed)  
})
//Commands





//STARTUP
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
client.user.setActivity(`With ${client.users.size} Friends`)
});


client.on('ready', () => {
/*
⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
*/
  const choices = ['With Cookies', 'With Cookie', `With ${client.users.size} Friends`, 'With Music', `In ${client.guilds.size} Servers`, `meepb.glitch.me`, `Almost Heaven, West Virginia`]
  client.user.setActivity(choices[Math.floor(Math.random() * choices.length)]+ ` | ${config.prefix}help`)
  client.user.setStatus('online')
  /*const embed = new Discord.RichEmbed().setTitle('Started up').setDescription('The Bot has just started').setTimestamp().setColor('RANDOM').setFooter(`${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
client.channels.get(blog).send(embed)*/
})
setInterval(function(){
  const choices = ['With Cookies', 'With Cookie', `With ${client.users.size} Friends`, 'With Music', `In ${client.guilds.size} Servers`, `meepb.glitch.me`]
      client.user.setActivity(choices[Math.floor(Math.random() * choices.length)]+ ` | ${config.prefix}help`);
}, 60000);




client.login(process.env.TOKEN);
//////////////////////////////////////////////
/////////////////country roads///////////////
/////////////////////////////////////////////
client.on('message', message => {
  
  //eliminates useless messages, bot, dm, group dm, no prefix, only owner's id
  if (message.author.bot) return;
  //splits up the message prefix(removed), command, extra stuff(1,2,3)
  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  //makes 'em small letters
  var words = args.shift().toLowerCase();
  //checks if command is valid
  if (message.content.toLowerCase() == 'almost heaven west virginia'.toLowerCase() || message.content.toLowerCase() == 'almost heaven, west virginia'.toLowerCase()) {
  message.channel.send('Blue Ridge Mountains, Shenandoah River')}
  if (message.content.toLowerCase() == 'life is old there, older than the trees'.toLowerCase().toLowerCase() || message.content.toLowerCase() == 'life is old there older than the trees'.toLowerCase()) {
  message.channel.send('Younger than the mountains, blowing like a breeze')}
  if (message.content.toLowerCase() == 'country roads, take me home'.toLowerCase() || message.content.toLowerCase() == 'country roads take me home'.toLowerCase()) {
  message.channel.send('To the place I belong')}
  if (message.content.toLowerCase() == 'west virginia, mountain mama'.toLowerCase() || message.content.toLowerCase() == 'west virginia mountain mama'.toLowerCase()) {
  message.channel.send('Take me home, country roads')}
  if (message.content.toLowerCase() == 'All my memories gather round her'.toLowerCase() || message.content.toLowerCase() == 'All my memories gather round her'.toLowerCase()) {
  message.channel.send('Miner\'s lady, stranger to blue water')}
  if (message.content.toLowerCase() == 'Dark and dusty, painted on the sky'.toLowerCase() || message.content.toLowerCase() == 'Dark and dusty painted on the sky'.toLowerCase()) {
  message.channel.send('Misty taste of moonshine, teardrop in my eye')}
  if (message.content.toLowerCase() == 'I hear her voice, in the morning hour she calls me'.toLowerCase() || message.content.toLowerCase() == 'I hear her voice in the morning hour she calls me'.toLowerCase()) {
  message.channel.send('The radio reminds me of my home far away')}
  if (message.content.toLowerCase() == 'And driving down the road I get a feeling'.toLowerCase() || message.content.toLowerCase() == 'And driving down the road I get a feeling'.toLowerCase()) {
  message.channel.send('That I should have been home yesterday, yesterday')}
  if (message.content.toLowerCase() == 'Take me home, down country roads'.toLowerCase() || message.content.toLowerCase() == 'Take me home down country roads'.toLowerCase()) {
  message.channel.send('Take me home, down country roads')}

  const mention = new RegExp(`^<@!?${client.user.id}> `);
 
  //////////////ChatBot//////////////

  if(message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<@!${client.user.id}>`)&& client.user.id != message.author.id){
    message.channel.startTyping()
        var mess = remove(client.user.username, message.cleanContent);
        const user = message.author.id;
        var promise = new Promise(function(resolve, reject) {
            var request = diaflo.textRequest(mess, {
                sessionId: user
            });
            request.on('response', function(response) {
                var rep = response.result.fulfillment.speech;
                resolve(rep);
            });

            request.on('error', function(error) {
                resolve(null);
            });

            request.end();
        });
function replace(text) {
  if (typeof(text) === "string")
    return text.replace(`{user}`, `<@${message.author.id}>`);
  else
      return text;
}
        (async function(){
            var result = await promise;
          result = replace(result)
            if(result){
              message.channel.stopTyping()
                message.reply(result);
            } else{
              message.channel.stopTyping()
                message.reply("nothing here");
            }
        }());

    }
})
function remove(username, text){
    return text.replace("@" + username + " ", "");
}
