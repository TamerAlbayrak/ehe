const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {


  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    doktorbot => doktorbot.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      "**Emoji ismi yazmalısın**"
    );
  const doktorbot = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(doktorbot);
  console.log(doktorbot);
    } else {

      let emojiname = args[0];
      const emoji = message.guild.emojis.cache.find(
        doktorbot => doktorbot.name === `${emojiname}`
      );
      if (!emojiname)
        return message.channel.send(
          "**You have to write emoji name**"
        );
      const doktorbot = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(`${emoji.url}`)
        .addField("Name of emoji", `${emojiname}`)
        .addField("Emoji ID", `${emoji.id}`)
        .addField("Link", `${emoji.url}`)
        .setTimestamp();
      message.channel.send(doktorbot);
      console.log(doktorbot);

    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-info"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "",
  usage: ""
};