module.exports = {
 name: 'rps',
  allow: 'all',
guildOnly: false,
    description: 'Plays rock paper scissors with the user!',
    usage: `[rock|paper|scissors]`,
    catagory: `fun`,//admin fun misc code
    hidden: false,
    execute(message, args, client, Discord){
// r 1 p 2 s 3
      if(args[0] !== 'rock' && args[0] !== 'paper' && args[0] !== 'scissors' && args[0] !== 'r' && args[0] !== 'p' && args[0] !== 's') message.channel.send('Please choose `rock`, `paper` or `scissors`')
      else{
      if(args[0] == 'rock'){
      var player = 1}
      if(args[0] == 'r'){
      var player = 1}
      if(args[0] == 'paper'){
      var player = 2}
      if(args[0] == 'scissors'){
      var player = 3}
      if(args[0] == 'p'){
      var player = 2}
      if(args[0] == 's'){
      var player = 3}
      var bot = client.Rnd(1, 3)
      if(bot == 1){ var botw = 'rock'}
      if(bot == 2){ var botw = 'paper'}
      if(bot == 3){ var botw = 'scissors'}
      if(player == 1){ var playerw = 'rock'}
      if(player == 2){ var playerw = 'paper'}
      if(player == 3){ var playerw = 'scissors'}
      console.log(`rps time. Player ${player}${playerw} bot ${bot}${botw} 
args: ${args}`)
        var done = 0
      if (player ==  bot) {message.channel.send(`I choose **${botw}**, you choose **${playerw}**. We **tied**!`)}//tie
       if (player == 1 && bot == 2) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **lost**!`)}//player rock bot paper
       if (player == 1 && bot == 3) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **won**!`)}//player rock bot scissors
       if (player == 2 && bot == 3) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **lost**!`)}//player paper bot scissors
       if (player == 2 && bot == 1) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **won**!`)}//player paper bot rock
       if (player == 3 && bot == 1) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **lost**!`)}//player scissors bot rock
       if (player == 3 && bot == 2) {done++;message.channel.send(`I choose **${botw}**, you choose **${playerw}**. You **won**!`)}//player scissors bot paper
       }
    },
};