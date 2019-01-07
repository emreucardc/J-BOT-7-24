const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Kullanıcı Bulunamadı");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBER")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  if(bUser.hasPermission("MANAGE_MEMBER")) return mesasge.chanel.send("Bu Kullanıcıyı Kicklemek Ve Sen Hahaha.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Banlanan Kişi", `${bUser} with ID: ${bUser.id}`)
  .addField("Banlayan Kişi", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banlandığı Kanal", message.channel)
  .addField("Banlandığı Zaman", message.createdAt)
  .addField("Banlanma Sebebi", bReason);

  let ŞikayetlerChannel = message.guild.channels.find(`name` , "Şikayetler");
  if(!ŞikayetlerChannel) return message.channel.send("Şikayetler Kanalı Bulunamadı.");

  message.guild.member(bUser).ban(bReason);
  ŞikayetlerChannel.send(kickEmbed);
}

module.exports.help = {
  name: "ban"
}
