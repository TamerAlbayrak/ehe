const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  
if(!rol) return message.channel.send(`:name_badge: Ayarlamam İçin Bir Rol Etiketlemelisin. Ve Rolü Verebilmek İçin Botun Rolü Ayarladığın Rolün Üstende Olmak Zorundadır.
:name_badge: Örnek Kullanım : ${prefix}otorol @rol #kanal `)  
 if(!kanal) return message.channel.send(':orange_circle: Ayarlamam İçin Bir Kanal Etiketlemelisin.')

message.channel.send(` :green_circle: Otorol Açıldı.
:green_circle: ${rol} Olarak Ayarladım. 
:green_circle: Log Kanalını ${kanal} Olarak Ayarladım.`) //dcs ekibi

db.set(`otok_${message.guild.id}`, kanal.id)  
db.set(`otorol_${message.guild.id}`, rol.id)  
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  
if(!rol) return message.channel.send(`:name_badge: You have to tag a role for me to set. To grant a role, the bot's role must be above the role you set.
:name_badge: Example Usage : ${prefix}autorole @role #channel `)  
 if(!kanal) return message.channel.send(':orange_circle:You have to tag a channel for me to adjust.')

message.channel.send(` :green_circle: Auto Role was opened.
:green_circle: I set it to ${rol} .
:green_circle: I have set the Log Channel to  ${kanal}.`) //dcs ekibi

db.set(`otok_${message.guild.id}`, kanal.id)  
db.set(`otorol_${message.guild.id}`, rol.id)
};
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-ayarla',
  description: 'oto-rol-ayarla', 
  usage: 'otorol-ayarla'
};