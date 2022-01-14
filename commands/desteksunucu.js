const Discord = require("discord.js");
const db = require("quick.db");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {

        const yardım = new Discord.MessageEmbed()
            .setColor(0x36393e)
            .setAuthor(`Taxperia Destek Sunucusu`, client.user.avatarURL())
            .setThumbnail(client.user.avatarURL())
            .addField("Linkler", `Destek Sunucusu [TIKLA](https://discord.gg/JK9wUDHPYJ)`)
            .setFooter(
                `${message.author.username} tarafından istendi. |`,
                message.author.avatarURL()
            );
        return message.channel.send(yardım);

    } else {

        const yardım = new Discord.MessageEmbed()
            .setColor(0x36393e)
            .setAuthor(`Taxperia Support Server`, client.user.avatarURL())
            .setThumbnail(client.user.avatarURL())
            .addField("Link", `Support Server [Click](https://discord.gg/wRbgTkVVB2)`)
            .setFooter(
                `Requested by ${message.author.username} |`,
                message.author.avatarURL()
            );
        return message.channel.send(yardım);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu"],
  permLevel: 0
};

exports.help = {
  name: "desteksunucu",
  description: "yardım",
  usage: "yardım"
};
