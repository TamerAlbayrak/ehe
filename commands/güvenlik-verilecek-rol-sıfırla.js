const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    if (!c) return message.channel.send("Güvenlik verilecek rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik verilecek rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    let c = await db.fetch(`güvenlikverilecek_${message.guild.id}`);
    if (!c) return message.channel.send("The security given role has not been reset already!");
    message.channel.send("Security given role has been successfully reset!");
    db.delete(`güvenlikverilecek_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-add-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-verilecek-sıfırla",
  description: "güvenlik-rol-sıfırla",
  usage: "güvenlik-verilecek-sıfırla"
};
