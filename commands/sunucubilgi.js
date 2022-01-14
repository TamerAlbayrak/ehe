const Discord = require("discord.js");
const moment = require("moment");
const useful = require("useful-tools")
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');

exports.run = async (client, message, params) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {

  const tarih = useful.tarih(message.guild.createdTimestamp)
    const sunucubilgi = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addField(":crown:  Sunucu Sahibi", `${message.guild.owner}`, true)
    .addField(":bookmark:  Sunucu Adı", `${message.guild.name}`, true)
      .addField(":id:  Sunucu ID", `${message.guild.id}`, true)
      .addField(":performing_arts:  Rol Sayısı", `${message.guild.roles.cache.size}`, true)
      .addField( ":european_castle:  Kanal Sayısı", `${message.guild.channels.cache.size}`, true)
      .addField(":heart_eyes:  Emoji Sayısı", `${message.guild.emojis.cache.size}`, true)
      .addField(":earth_africa:  Sunucu Bölgesi", `${message.guild.region}`, true)
      .addField(":statue_of_liberty:  Üye Sayısı", `${message.guild.memberCount}`, true)
      .addField(":mute:  AFK Kanalı", `${message.guild.afkChannel}`, true)
    .addField(':alarm_clock:  Zaman Aşımı', `${message.guild.afkTimeout}`, true)
    .addField(':ballot_box_with_check:  Sistem Kanalı ', `${message.guild.systemChannel}`, true)
      
      .addField(":small_red_triangle_down:  Açılma Tarihi", `${tarih}`, true)
      .setThumbnail(message.guild.iconURL());
    return message.channel.send(sunucubilgi);
  } else {
    const tarih = useful.tarih(message.guild.createdTimestamp)
    const sunucubilgi = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .addField(":crown:  Server Owner", `${message.guild.owner}`, true)
    .addField(":bookmark:  Server Name", `${message.guild.name}`, true)
      .addField(":id:  Server ID", `${message.guild.id}`, true)
      .addField(":performing_arts:  Number of Roles", `${message.guild.roles.cache.size}`, true)
      .addField( ":european_castle:  Number of Channels", `${message.guild.channels.cache.size}`, true)
      .addField(":heart_eyes:  Emoji Count", `${message.guild.emojis.cache.size}`, true)
      .addField(":earth_africa:  Server Zone", `${message.guild.region}`, true)
      .addField(":statue_of_liberty:  Number of Members", `${message.guild.memberCount}`, true)
      .addField(":mute:  AFK Kanalı", `${message.guild.afkChannel}`, true)
    .addField(':alarm_clock:  AFK Timeout', `${message.guild.afkTimeout}`, true)
    .addField(':ballot_box_with_check:  System Message Channel', `${message.guild.systemChannel}`, true)
      
      .addField(":small_red_triangle_down:  Creation Date", `${tarih}`, true)
      .setThumbnail(message.guild.iconURL());
    return message.channel.send(sunucubilgi);
  };
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu", "sunucu-bilgi", "sbilgi","server","server-bilgi","sbilgi","serverinfo","server-info"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};
