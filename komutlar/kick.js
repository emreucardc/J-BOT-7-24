const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Kullanıcı Bulunamadı");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return mesasge.chanel.send("Bu Kullanıcıyı Kicklemek Ve Sen Hahaha.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kicklenen Kişi", `${kUser} with ID: ${kUser.id}`)
  .addField("Kickleyen Kişi", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Kicklendiği Kanal", message.channel)
  .addField("Kicklendiği Zaman", message.createdAt)
  .addField("Kicklenme Sebebi", kReason);

  let kickChannel = message.guild.channels.find(`name` , "şikayetler");
  if(!kickChannel) return message.channel.send("Şikayetler Kanalı Bulunamadı.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
