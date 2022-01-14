const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
   
    let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Lütfen bir kanal etiketleyiniz!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    );
  } else {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    

        let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Please tag a channel!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Security channel is set to ${c}!`
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik",
  description: "güvenlik",
  usage: "güvenlik"
};
