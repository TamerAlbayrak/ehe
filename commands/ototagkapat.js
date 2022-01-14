const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

  let kontrol = db.fetch(`ototag_${message.guild.id}`)
  
  
  
  if(!kontrol) return message.channel.send('Bu Sunucuda Tag Sistemi Ayarlı Değildir. Ayarlı Olmayan Bir Komutu Kapatamazsın.')
  
   message.channel.send('Tag Sistemi Kapatılmıştır.')
  
  db.delete(`ototag_${message.guild.id}`)  
} else { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

  let kontrol = db.fetch(`ototag_${message.guild.id}`)
  
  if(!kontrol) return message.channel.send('Tag system is not set on this server. You cannot close a command that is not set.')
  
   message.channel.send('Tag system is closed.')
  
  db.delete(`ototag_${message.guild.id}`)  
};
  };
exports.conf = { //dcs ekbi
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ototagkapat',
  description: 'taslak', 
  usage: 'ototagkapat'
};