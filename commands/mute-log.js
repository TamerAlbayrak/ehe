const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {

const kanal = message.mentions.channels.first()

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

if(!kanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Günlük kanalını etiketlemediniz. Ayarlamak için: **${prefix}susturma-log #logkanalı** şeklinde yazmalısın.`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${kanal} adlı kanal susturma günlük kanalı olarak ayarlandı.`)
)
db.set(`mutelog.${message.guild.id}`, `${kanal.id}`)

    } else {

        const kanal = message.mentions.channels.first()

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

if(!kanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`You haven't tagged the diary channel. To set: **${prefix}mute-log #logchannel**`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Channel named ${kanal} set as mute log channel.`)
)
db.set(`mutelog.${message.guild.id}`, `${kanal.id}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["susturma-log", "susturma-günlük"],
    permLevel: 0
}

exports.help = {
    name: "mute-log"
}