const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Lütfen bir rol etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`banrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Ban limit rolü; ${kanal} olarak ayarlandı!\nNot: Eğer ayarlardan herhangi bir limit sayısı ayarlanmadıysa işlemez!`);
    message.channel.send(embed);
    return;
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL())
        .setDescription(`Please tag a role!`);
      message.channel.send(embed);
      return;
    }
    db.set(`banrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL())
      .setDescription(`Ban limit role; Set to ${kanal}!\nNote: It will not work if no limit is set from the settings!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-limit-role"],
  permLevel: 3
};

exports.help = {
  name: "ban-limit-rol",
  description: "ban-limit-rol",
  usage: "ban-limit-rol"
};
