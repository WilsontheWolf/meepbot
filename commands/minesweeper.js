function random(min, max) {
return Math.floor((Math.random()*(max-min))+min)
}
module.exports = {
 name: 'minesweeper',
  allow: 'all',
guildOnly: false,
    description: '*TEST*\ncreates a minesweeper board',
    usage: ``,
  catagory: `fun`,//admin fun misc code
  hidden: true,
  aliases: [''],
    execute(message, args, client, Discord){
      
//0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 💣
      let zero = "||0️⃣||"
      let one = "||1️⃣||"
      let two = "||2️⃣||"
      let three = "||3️⃣||"
      let four = "||4️⃣||"
      let five = "||5️⃣||"
      let six = "||6️⃣||"
      let seven = "||7️⃣||"
      let eight = "||8️⃣||"
      let bomb = "||��||"
      let n = 1
      let x = 1
      let line1 = ''
      let line2 = ''
      let line3 = ''
      let line4 = ''
      let line5 = ''
      
      while (x < 6){
        if(n<6){
        if(x=1){
          let line1
          if(random(0,1)){
        
        line1 += bomb}
             else{
             line1 += zero
      }
        }
        if(x=2){
          let line2
          if(random(0,1)){
        
        line2 += bomb}
             else{
             line2 += zero
      }
        }
        if(x=3){
          let line3
          if(random(0,1)){
        
        line3 += bomb}
             else{
             line3 += zero
      }
        }
        if(x=4){
          let line4
          if(random(0,1)){
        
        line4 += bomb}
             else{
             line4 += zero
      }
        }
        if(x=5){
          let line5
          if(random(0,1)){
        
        line5 += bomb}
             else{
             line5 += zero
      }
        }
        n+=1}
        else x += 1
        
      }
      message.channel.send(`💥**__MINESWEEPER__**💥
${line1}
${line2}
${line3}
${line4}
${line5}`)
},
};