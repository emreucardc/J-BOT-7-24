const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} Mesaj Silindi.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "temizle"
}
