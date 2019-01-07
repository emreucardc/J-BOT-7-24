const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Hakkında")
  .setColor("#15f153")
  .addField("Sunucu Adı", message.guild.name)
  .addField("Sunucudaki Toplam Kişi Sayısı", message.guild.memberCount)
  .addField("Yapımcı", "DCKIRIĞI#2220");

  message.channel.send(serverembed);
}

module.exports.help = {
  name: "sunucu"
}
