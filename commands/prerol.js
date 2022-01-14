const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {


const rol = message.mentions.roles.first()

if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Premium rolü etiketlemediniz. Ayarlamak için: **${prefix}pre-rol @premium** şeklinde yazmalısın.`)
)
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${rol} adlı rol premium rolü olarak ayarlandı`)
)
db.set(`prerol_${message.guild.id}`, `${rol.id}`)
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pre-rol"],
    permLevel: 0
}

exports.help = {
    name: "premium-role"
}