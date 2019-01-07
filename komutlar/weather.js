const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {

weather.find({search: args.join(" "), degreeType: "F"}, function(err, result) {
  if (err) message.channel.send(err);

  var current = result[1].current;
  var location = result[0].location;

  const embed = new Discord.RichEmbed()
     .setDescription(`**${current.skytext}**`)
     .setAuthor(` ${current.observationpoint} İçin Hava Durumu`)
     .setThumbnail(current.imageUrl)
     .setColor(0x00AE86)
     .addField("Saat Tipi", `UTC${location.timezone}`, true)
     .addField("Derece Tipi",location.degreetype, true)
     .addField("Derece", `${current.temperature}°`, true)
     .addField("Hissedilen", `${current.feelslike} Derece`, true)
     .addField("Rüzgar", current.winddisplay, true)
     .addField("Nem Oranı", `${current.humidity}%`, true);

     message.channel.send({embed});
});
}

module.exports.help = {
  name: "havadurumu"
}
