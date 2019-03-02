module.exports = {
 name: 'pewdiepie',
  allow: 'all',
guildOnly: false,
    description: 'Fetches, Pewdiepie and T-series sub counts',
    usage: ``,
  catagory: `fun`,//admin fun misc code
  hidden: true,
    execute: async function (message, args, client, Discord) {

///////////////////////////////////////////////////
      const embed = new Discord.RichEmbed().setTitle('Subscribers')
      let subt
      let subp
      var request = require('request');

var idp = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";

var urlp = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + idp + "&key=" + process.env.YOUTUBE;

await request({
    method: 'GET',
    url: urlp
}, function (err, response, text) {
    if (err) {

        return err;
    }

    var jsonp = JSON.parse(text);

    const subp = jsonp.items[0].statistics.subscriberCount;
  embed.addField('PewDiePie', ` ${subp}`);
});
      var idt = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";


var urlt = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + idt + "&key=" + process.env.YOUTUBE;

await request({
    method: 'GET',
    url: urlt
}, function (err, response, text) {
    if (err) {

        return err;
    }

    var jsont = JSON.parse(text);

    const subt = jsont.items[0].statistics.subscriberCount;
  embed.addField('T-Series', ` ${subt}`);
});

      if (subp > subt) var win = `PewDiePie is in the lead by ${subp-subt} subs!`
      if (subt > subp) var win = `T-Series is in the lead by ${subt-subp} subs!`
      if (subp == subt) var win = `It's a tie`
      message.channel.send(embed);
      message.channel.send(win)
      
     const unirest = require('unirest')
     var idp = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";

var urlp = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + idp + "&key=" + process.env.YOUTUBE;
      unirest.get(urlp)
.end(function (result) {
const embed = new Discord.RichEmbed()
.setTitle('DOG')
.setDescription(JSON.parse(result).statistics.subscriberCount)
.setFooter('Powered By random.dog')
message.channel.send(embed)
}); 
},
};