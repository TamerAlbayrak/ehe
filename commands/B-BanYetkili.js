const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

  let CERol = message.mentions.roles.first();
  let CEYetkili =
    db.fetch("ce-banyetkili." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(
      `> <@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlamassın.`
    ));
  if (!CERol) return message.channel.send( new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `> <‼️ Daha Ban Yetkili Rölünü Ayarlamadın \n ‼️ Doğru Ayarlamak İçin \`${prefix}ban-yetkili @Rol\``
        ));
  await db.set("ce-banyetkili." + message.guild.id, CERol.id);
  return message.channel.send(
    "Daha önceden " +
      CEYetkili +
      " olarak belirlenen rolü <@&" +
      CERol.id +
      "> rolü ile değiştirdim!"
  );
} else {
  let CERol = message.mentions.roles.first();
  let CEYetkili =
    db.fetch("ce-banyetkili." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(
      `> <@${message.author.id}> You Can't Set Anything in the Ban System Without Ban Permission.`
    ));
  if (!CERol) return message.channel.send( new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `> <‼️You have not set up ban officer yet. \n ‼️ Top set\`${prefix}ban-officials @role\``
        ));
  await db.set("ce-banyetkili." + message.guild.id, CERol.id);
  return message.channel.send(
    "Earlier " +
      CEYetkili +
      " designated role as <@&" +
      CERol.id +
      "> ı replaced it with a role!"
  );
  
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban-yetkili",
  description: "",
  usage: ""
};
