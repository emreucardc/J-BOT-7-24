const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.chanel.send("Bunu Yapabilmen İçin Daha Yetenekli Olman Gerek Adamım.");
  let serverembed = new Discord.RichEmbed()
  .setDescription("Lol Canlı Maç Derecelilere Nasıl Bakılır")
  .setColor("#15f153")
  .addField("1.Etap", "İlk Olarak Lols.gg Sitesine Giriş Yapıyoruz." )
  .addField("2.Etap", "Arama Yerine Oyundaki Adınızı Ve Tr Sunucusunu Seçerek {Enter} Tuşuna Basıyoruz   https://hizliresim.com/V9YGMR ")
  .addField("3.Etap", "Sonra Seçenekler Kısmından Canlı Maç Kısmına Basıyoruz   https://hizliresim.com/lq18Wl")
  .addField("4.Etap (Final)", "Ve Artık Sizin Oyununuzdaki Kişilerin Liglerini,KDA'larını,En Çok Oynadığı Heroları Görebilirsiniz.")


  message.channel.send(serverembed);
}


module.exports.help = {
  name: "lolcanlımaç"
}
