const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

//*zamanlımute @user 1s/m/h

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("İstediğiniz Kullanıcı Bulunamadı.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Kullanıcıyı Ve Sen Hahaha.");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muteli",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Sen Bu Kadar Zaman Hahaha.")

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Mutelendi ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<${tomute.id}> Mute Kaldırıldı`);
  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}
