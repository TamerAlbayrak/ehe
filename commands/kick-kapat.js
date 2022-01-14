const Discord = require('discord.js');
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız.**"))

  if(!db.fetch(`kicklog_${message.guild.id}`)) return message.channel.send('Görünüşe Göre Kick Sistemi Kapalı Görünüyor.')
   

   message.reply('Kicklog Ayarları Sıfırlanıp Başarı İle Kapatılmıştır.')
db.delete(`kicklog_${message.guild.id}`)
db.delete(`kickyetkilisi_${message.guild.id}`) 

} else {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

  if(!db.fetch(`kicklog_${message.guild.id}`)) return message.channel.send('Kick system appears to be off.')
   

   message.reply('Kicklog Settings Have Been Reset and Closed Successfully.')
db.delete(`kicklog_${message.guild.id}`)
db.delete(`kickyetkilisi_${message.guild.id}`) 

}


}; 


exports.conf = { 
enabled: true,
guildOnly: false,
 aliases: ["kick-system-off"], 
permLevel: 0
}

exports.help = {
 name: 'kick-sistem-kapat', 
description: 'kayıt sistemini kapatır',
 usage: 'kayıt-kapat' 
};