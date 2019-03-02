module.exports = {
 name: 'math',
  allow: 'all',
guildOnly: false,
    description: 'Gets a multpilication question for you to solve',
    usage: ``,
    catagory: `fun`,//admin fun misc code
  hidden: false,
    execute(message, args, client, Discord){
      let q1 = client.Rnd(1, 12)
      let q2 = client.Rnd(1, 12)
      let answer = q1*q2
      let answerS = `${answer}`
      let correct = false
      var time = 10000
      const qembed = new Discord.RichEmbed().setTitle(`Math!`)
      .setDescription(`Respond with the answer to this question:\n**${q1} x ${q2}**`)
      .setColor('RANDOM')
      
      message.channel.send(qembed)
const collector = new Discord.MessageCollector(message.channel, m => m.content === answerS, { time: time });
        collector.on('collect', message => {
            if (message.content == answer && !correct) {
              const cembed = new Discord.RichEmbed().setTitle(`Correct!`)
              .setDescription(`<@${message.author.id}> Congratulations you got the correct answer. \nThe answer was: ${answerS}`)
              .setColor('GREEN')
                message.channel.send(cembed);
              correct = true
            } 
        }    )
          setTimeout(function(){
            if(!correct) {
              const fembed = new Discord.RichEmbed().setTitle(`Time Up!`)
              .setDescription(`The correct awnser was: ${answerS}`)
              .setColor('RED')
        message.channel.send(fembed)
        }}, time);
},
};