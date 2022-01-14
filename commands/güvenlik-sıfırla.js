const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let k = await db.fetch(`güvenlik_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

    if (!k) return message.channel.send("Güvenlik sistemi zaten ayarlanmamış!");
    db.delete(`güvenlik_${message.guild.id}`);
    message.channel.send(`Güvenlik kanalı sıfırlandı!`);
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    if (!k) return message.channel.send("The security system is not already set!");
    db.delete(`güvenlik_${message.guild.id}`);
    message.channel.send(`Security channel has been reset!`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sıfırla",
  description: "güvenlik-sıfırla",
  usage: "güvenlik-sıfırla"
};
