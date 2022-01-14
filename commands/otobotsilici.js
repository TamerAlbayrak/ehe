const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
 if (db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış :slight_smile:`)
}
  db.set(`otobsilici_${message.channel.id+message.guild.id}`, message.channel.id)
  message.reply(`**Sadece bu kanala atılan** tüm botların mesajlarını bot mesaj attıktan **2 dakika** sonra silecektir.`)
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  if (db.fetch(`otobsilici_${message.channel.id+message.guild.id}`)) {
    return message.reply(`This feature is already turned on :slight_smile:`)
  }
    db.set(`otobsilici_${message.channel.id+message.guild.id}`, message.channel.id)
    message.reply(`The bot will delete all  bots messages sent on this channel ** 2 minutes ** after texting.`)
};
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otobotsiliciaç',
  description: 'sayaç', 
  usage: 'sayaç'
};