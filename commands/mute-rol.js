const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {

const rol = message.mentions.roles.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturma rolü etiketlemediniz. Ayarlamak için: **${prefix}susturma-rol @susturmarolü** şeklinde yazmalısın.`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${rol} adlı rol susturma rolü olarak ayarlandı`)
)
db.set(`muterol.${message.guild.id}`, `${rol.id}`)
    } else {
        const rol = message.mentions.roles.first()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`You haven't tagged the mute role. To set: **${prefix}mute-role @muterole**`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`The role of ${rol} is set to be a silencing role`)
)
db.set(`muterol.${message.guild.id}`, `${rol.id}`)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["susturma-rolü", "mute-rol", "susturma-rol"],
    permLevel: 0
}

exports.help = {
    name: "mute-role"
}