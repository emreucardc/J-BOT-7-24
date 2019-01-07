const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get (`http://i.capsspot.com/s/21/3/614404.gif`);

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  let birdembed = new Discord.RichEmbed()
  .setColor("ff9900")
  .setTitle("Kuşçuk :bird:")
  .setImage(body.image)

  message.channel.send(birdembed);
}

module.exports.help = {
  name: "kuşçuk"
}
