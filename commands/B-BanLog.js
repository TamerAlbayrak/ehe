const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("ce-banlog." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(
      `> <@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlamassın.`
    ));
  if (!CEChannel)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `❗️ ❕ Daha BanLog Ayarlamadın \n > ✅ Doğru Ayarlamak İçin \`${prefix}ban-log #kanal\``
        )
    );
  await db.set("ce-banlog." + message.guild.id, CEChannel.id);
  return message.channel.send(
    "Daha önceden " +
      CELog +
      " olarak belirlenen log kanalını <#" +
      CEChannel.id +
      "> kanalı ile değiştirdim!"
  );
} else {
  let CEChannel = message.mentions.channels.first();
  let CELog = db.fetch("ce-banlog." + message.guild.id) || "Var olmayan";
  if (
    !message.guild.members.cache
      .get(message.author.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(
      `> <@${message.author.id}> You Can't Set Anything in the Ban System Without Ban Permission..`
    ));
  if (!CEChannel)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `❗️ ❕ You haven't set up a ban log yet \n > ✅ To set \`${prefix}ban-log #channel\``
        )
    );
  await db.set("ce-banlog." + message.guild.id, CEChannel.id);
  return message.channel.send(
    "earlier " +
      CELog +
      " set log channel as <#" +
      CEChannel.id +
      ">ı replaced it with the channel!"
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
  name: "ban-log",
  description: "",
  usage: ""
};
