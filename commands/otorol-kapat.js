
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

let kanal = await db.fetch(`otok_${message.guild.id}`)  
let rol = await db.fetch(`otorol_${message.guild.id}`)   
let mesaj =  db.fetch(`otomesaj_${message.guild.id}`)  
 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
 
  
  if(!kanal) return message.channel.send('Otorol Zaten Kapalı')

  db.delete(`otok_${message.guild.id}`)   //dcs ekibi
  db.delete(`otorol_${message.guild.id}`)   
  db.delete(`otomesaj_${message.guild.id}`)
 message.channel.send('Otorol **'+message.guild.name+'** Sunucusunda Devre Dışı Bırakılmıştır.')
} else {
  let kanal = await db.fetch(`otok_${message.guild.id}`)  
let rol = await db.fetch(`otorol_${message.guild.id}`)   
let mesaj =  db.fetch(`otomesaj_${message.guild.id}`)  
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  if(!kanal) return message.channel.send('Autorol Already Closed')

  db.delete(`otok_${message.guild.id}`)   //dcs ekibi
  db.delete(`otorol_${message.guild.id}`)   
  db.delete(`otomesaj_${message.guild.id}`)
 message.channel.send('Autorol is disabled in **'+message.guild.name+'** server.')
};
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-kapat',
  description: 'taslak', 
  usage: 'otorolkapat'
};