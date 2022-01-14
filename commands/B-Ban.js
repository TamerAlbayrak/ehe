const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  
let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

  let CEKişi = message.mentions.users.first();
  let CESebep = args.slice(1).join(" ") || "Belirtilmemiş";
  let CELog = db.fetch("ce-banlog." + message.guild.id);
  let CEYetkili = db.fetch("ce-banyetkili." + message.guild.id);

  if (!CEYetkili) return message.channel.send("Sistem ayarlanmamış!");
  if (!CELog) return message.channel.send("Sistem ayarlanmamış!");

  if (!message.member.roles.cache.has(CEYetkili))
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`> <@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlayamazsın.`));
  if (!CEKişi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(`🔮 Banlanacak Kişiyi Etiketle \n > 🔮 Doğru Kullanım \`${prefix}ban @Kişi <Sebep>\``)
    );
  if (
    !message.guild.members.cache
      .get(client.user.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(" Ban yetkim yok. ^^");
  await message.guild.members.ban(CEKişi.id, { reason: CESebep });
  await message.guild.channels.cache
    .get(CELog)
    .send(
      "<@" +
        CEKişi.id +
        "> kişisi <@" +
        message.author.id +
        "> kişisi tarafından ``" +
        CESebep +
        "`` sebebi ile banlandı!"
    );
  return message.channel.send(
    "<@" +
      CEKişi.id +
      "> kişisi <@" +
      message.author.id +
      "> kişisi tarafından ``" +
      CESebep +
      "`` sebebi ile banlandı!"
  );
} else {

  let CEKişi = message.mentions.users.first();
  let CESebep = args.slice(1).join(" ") || "Unspecified";
  let CELog = db.fetch("ce-banlog." + message.guild.id);
  let CEYetkili = db.fetch("ce-banyetkili." + message.guild.id);

  if (!CEYetkili) return message.channel.send("System not set!");
  if (!CELog) return message.channel.send("System not set!");

  if (!message.member.roles.cache.has(CEYetkili))
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`> <@${message.author.id}> You Can't Set Anything in the Ban System Without Ban Permission..`));
  if (!CEKişi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(`🔮 Tag Person to Ban \n > 🔮 Correct usage\`${prefix}ban @user <Reason>\``)
    );
  if (
    !message.guild.members.cache
      .get(client.user.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(" I have no permission to ban. ^^");
  await message.guild.members.ban(CEKişi.id, { reason: CESebep });
  await message.guild.channels.cache
    .get(CELog)
    .send(
      "<@" +
        CEKişi.id +
        "> person <@" +
        message.author.id +
        "> by person ``" +
        CESebep +
        "`` banned for!"
    );
  return message.channel.send(
    "<@" +
      CEKişi.id +
      "> person <@" +
      message.author.id +
      "> by person ``" +
      CESebep +
      "`` banned for!"
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
  name: "ban",
  description: "",
  usage: ""
};
