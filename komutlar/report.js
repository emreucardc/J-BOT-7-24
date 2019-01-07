const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Kullanıcı Bulunamadı.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Şikayetler")
    .setColor("#15f153")
    .addField("Reportlanan Kişi", `${rUser} with ID: ${rUser.id}`)
    .addField("Reportlayan Kişi", `${message.author} with ID: ${message.author.id}`)
    .addField("Kanal", message.channel)
    .addField("Reportlanan Zaman", message.createdAt)
    .addField("Report Sebebi", reason);

  let reportschannel = message.guild.channels.find(`name`, "şikayetler");
  if(!reportschannel) return message.channel.send("Şikayetler Kanalı Bulunamadı.");

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
