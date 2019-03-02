module.exports = {
 name: 'error',
  allow: "botowner",
 guildOnly: false,
      usage: `<args>`,
  catagory: `code`,//admin fun misc code
  description: '<a:WeeWoo:525000522932027393>Causes an error to occur!',
  hidden: false,
    execute(message, args, client, Discord){
      throw new Error(["This is testing error! Theres no real error!"])
},
};