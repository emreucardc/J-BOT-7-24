const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Hakkında")
    .setColor("#fff400")
    .addField("Kullanım Alanı", "Eğlence,Moderator")
    .addField("Komutlar", "-kedicik,-köpekçik,-ogicik,-kuşçuk,-report,-havadurumu,-sunucu")
    .addField("Moderator Komutları", "-ban,-kick,-söyle,-temizle,-zamanlımute")
    .addField("Yakın Zamanda Daha Bir Çok Komut Gelecektir Beklemede Kalın.", " :heart: ")
    .addField("Yapımcı", "DCKIRIĞI#2220");

    message.channel.send(serverembed);
}

module.exports.help = {
  name: "yardım"
}
