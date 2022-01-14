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
    .setDescription(`Yetkili rolünü etiketlemediniz. Ayarlamak için: **${prefix}mute-yetkilisi @yetkilirol** şeklinde yazmalısın.`)
)  
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${rol} adlı rol susturma yetkilisi olarak ayarlandı`)
)
db.set(`muteyetkili.${message.guild.id}`, `${rol.id}`)
} else {

    const rol = message.mentions.roles.first()
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))


if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`You have not tagged the authoritative role. To set: **${prefix}mute-authority @authority**`)
)  
message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Role named ${rol} is set to mute authority.`)
)
db.set(`muteyetkili.${message.guild.id}`, `${rol.id}`)

}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["susturma-yetkilisi", "mute-authority"],
    permLevel: 0
}

exports.help = {
    name: "mute-yetkilisi"
}