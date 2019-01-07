const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const weather = require("weather-js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./komutlar/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Komut Bulunamadı.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./komutlar/${f}`);
    console.log(`${f} Aktif!`);
    bot.commands.set(props.help.name, props)
  });;
});




bot.on("ready", async () => {
  console.log(`${bot.user.username} Şuanda Aktif Durumda!`);
  bot.user.setActivity("Jaxres Sunucusunu", {type: "WATCHING"});
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} Sunucumuzdan Ayrıldı.`);

  let welcomechannel = member.guild.channels.find(`name`, "kapı");
  welcomechannel.send(`Malesef ${member} Bizim Gibi İnsanları Kaybetti.`);
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} Sunucumuza Katıldı`);

  let welcomechannel = member.guild.channels.find(`name`, "kapı");
  welcomechannel.send(`Buraya Bakın Millet ${member} Aramıza Katıldı!`);
});

bot.on("channelCreate", async channel => {

  console.log(`${channel.name} Odası Kuruldu.`);

  let sChannel = channel.guild.channels.find(`name`, "log");
  sChannel.send(`${channel} Odası Kuruldu.`);

});

bot.on("channelDelete", async channel => {

  console.log(`${channel.name} Odası Silindi.`);

  let sChannel = channel.guild.channels.find(`name`, "log");
  sChannel.send(`${channel.name} Odası Silindi.`);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }



let prefix = prefixes[message.guild.id].prefixes;
if(!message.content.startsWith(prefix)) return;
if(cooldown.has(message.author.id)){
  message.delete();
  return message.reply("Birdaha Yazman İçin 5 Saniye Beklemen Gerek.")
}
//if(!message.member.hasPermission("ADMINISTRATOR")){
  cooldown.add(message.author.id);
//}

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)


});



bot.login(process.env.BOT_TOKEN);
