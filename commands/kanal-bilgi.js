const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment');

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  const ok = message.client.emojis.cache.get("");
           var embed = new Discord.MessageEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL())
                .addField("KANAL ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz icerik", "Evet", true)
                }
                else {
                    embed.addField(" Uygunsuz icerik", "Yok", true)
                }
                embed.addField('Olusturuldugu Tarih:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL())
                .setFooter('Taxperia |  2021 ', client.user.avatarURL())
            message.channel.send(embed)

              } else {
                const ok = message.client.emojis.cache.get("");
                var embed = new Discord.MessageEmbed()
                     .setAuthor('#' + message.channel.name, message.guild.iconURL())
                     .addField("Channel ID", message.channel.id)
                     if (message.channel.nsfw) {
                         embed.addField(" Inappropriate content", "Yes", true)
                     }
                     else {
                         embed.addField(" Inappropriate content", "No", true)
                     }
                     embed.addField('Date of Creation:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                     .setColor(3447003)
                     .setThumbnail(message.guild.iconURL())
                     .setFooter('Taxperia |  2021 ', client.user.avatarURL())
                 message.channel.send(embed)
                    };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanal-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Kanal ile ilgili bilgi verir.',
  usage: 'kanalbilgi'
}