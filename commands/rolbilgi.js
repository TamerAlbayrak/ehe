const emran = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, msg, args) => {

let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {


  let role =
    msg.mentions.roles.first() ||
    msg.guild.roles.cache.get(args[0]) ||
    msg.guild.roles.cache.find(role => role.name === args.join(" "));
  var moment = require("moment");

  var hata = new emran.MessageEmbed()
    .setColor("#00ff00")
    .setDescription(
      `🌐  **Yanlış Kullanım** \n Lütfen Bir Rol Etiketleyin Örnek: \`${prefix}rolbilgi @Üye\``
    );
  if (!role) return msg.channel.send(hata);

  let hex = role.hexColor.toString().slice(1);
  let embed = new emran.MessageEmbed()
    .setThumbnail(`http://colorhexa.com/${hex}.png`)
    .addField("Rol İsmi", role.name, false)
    .addField(`Rol ID`, role.id, false)
    .addField(`Rol Tag`, role, false)
    .addField(
      `Etiketlenebilir mi?`,
      role.mentionable ? "\n Evet" : "Hayır",
      false
    )
    .setColor(role.hexColor)
    .addField("Renk", role.hexColor, false)
    .addField(
      "Rol Oluşturma Tarihi :",
      moment(role.createdAt).format("LL"),
      true
    )
    .setFooter(
      "Bu komutu kullanan kullanıcı " + msg.author.tag,
      msg.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
    )
    .setTimestamp(role.createdAt);
  msg.channel.send(embed);
    } else {

      let role =
      msg.mentions.roles.first() ||
      msg.guild.roles.cache.get(args[0]) ||
      msg.guild.roles.cache.find(role => role.name === args.join(" "));
    var moment = require("moment");
  
    var hata = new emran.MessageEmbed()
      .setColor("#00ff00")
      .setDescription(
        `🌐 **Misuse** \n Please Tag a Role Example: \`${prefix}rolebilgi @Member\``
      );
    if (!role) return msg.channel.send(hata);
  
    let hex = role.hexColor.toString().slice(1);
    let embed = new emran.MessageEmbed()
      .setThumbnail(`http://colorhexa.com/${hex}.png`)
      .addField("Role Name", role.name, false)
      .addField(`Role ID`, role.id, false)
      .addField(`Role Tag`, role, false)
      .addField(
        `Can it be tagged?`,
        role.mentionable ? "\n Yes" : "No",
        false
      )
      .setColor(role.hexColor)
      .addField("Color", role.hexColor, false)
      .addField(
        "Role Creation Date :",
        moment(role.createdAt).format("LL"),
        true
      )
      .setFooter(
        "User using this command " + msg.author.tag,
        msg.author.avatarURL({ format: "png", dynamic: true, size: 1024 })
      )
      .setTimestamp(role.createdAt);
    msg.channel.send(embed);

    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol-info", "rolinfo", "rolbilgi"],
  permLevel: 0
};

exports.help = {
  name: "rol-bilgi",
  description: "Bir Rol Hakkında Bilgi Verir.",
  usage: "rol-bilgi"
};
