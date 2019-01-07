const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  let {body} = await superagent
  .get (`https://vignette.wikia.nocookie.net/battlefordreamisland/images/5/56/Saw_scared.png/revision/latest?cb=20180705151809`);

  let dogembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Ogicik :poop:")
  .setImage(body.url)

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "ogicik"
}
