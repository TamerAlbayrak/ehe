const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

  if (!db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
}
  db.delete(`otobsilici_${message.channel.id+message.guild.id}`)
  message.reply(`**Sadece bu sohbet kanalında** tüm botların mesajını 2 dakika sonra silme şu anda bu özellik devre dışı.
Sunucunuzun sohbet temizliği için bunu kullanmanız önerilir.`)

} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  if (!db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
    return message.reply(`This feature is already turned off :slight_smile:`)
  }
    db.delete(`otobsilici_${message.channel.id+message.guild.id}`)
    message.reply(`Delete all bots messages after 2 minutes only on this chat channel currently this feature is disabled.
    It is recommended to use this for chat cleaning of your server.`)
};
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otobotsilicikapat',
  description: 'sayaç', 
  usage: 'sayaç'
};