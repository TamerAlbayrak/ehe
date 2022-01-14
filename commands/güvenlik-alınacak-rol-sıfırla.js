const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

    let c = await db.fetch(`güvenlikalınacak_${message.guild.id}`);
    if (!c) return message.channel.send("Güvenlik rolü zaten sıfırlanmamış!");
    message.channel.send("Güvenlik rolü başarıyla sıfırlandı!");
    db.delete(`güvenlikalınacak_${message.guild.id}`);
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    let c = await db.fetch(`güvenlikalınacak_${message.guild.id}`);
    if (!c) return message.channel.send("The security role has not been reset already!");
    message.channel.send("Security role has been successfully reset!");
    db.delete(`güvenlikalınacak_${message.guild.id}`);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-remove-role-reset"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-alınacak-sıfırla",
  description: "güvenlik-alınacak-sıfırla",
  usage: "güvenlik-alınacak-sıfırla"
};
