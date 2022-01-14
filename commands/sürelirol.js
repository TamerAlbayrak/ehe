const Discord = require('discord.js') 
const db = require('quick.db') 
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {


  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))


  const ms = require('ms')
  const moment = require('moment')
  require('moment-duration-format')
  let rol = message.mentions.roles.first()
  let channel = message.mentions.channels.first()
if(args[0] == 'log') {
  db.set(`rollog${message.guild.id}`, channel.id)
  return message.channel.send(`Günlük kanalı ${channel} olarak ayarlandı!`);
}

   const taxperia = await db.fetch(`rollog${message.guild.id}`)
   if(taxperia == null) return message.channel.send('Lütfen günlük kanalı ayarla!');
   
  let duration = args[1]
  let sure = args[2]
  let typ;
  if (sure == 'saniye') typ = 'seconds'
  if (sure == 'dakika') typ = 'minutes'
  if (sure == 'saat') typ = 'hours'
  if (sure == 'gün') typ = 'days' 
    let user = message.mentions.users.first()
    if(!user) return message.reply('Kime Süreli Rol Vericeksin?')
    if(isNaN(duration)) return message.reply('Süreyi Belirt!')
    if(!typ) return message.reply('Süreyi Belirt!')
if(!rol) return message.reply("Rolü Belirt!")

    message.channel.send(`${user} adlı kullanıcıya \`${moment.duration(ms(`${duration} ${typ}`)).format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)}\` boyunca belirttiğiniz rol verildi!`)
    db.set(`rolint${message.guild.id}_${user.id}`, Date.now())
    db.set(`rolsure${message.guild.id}_${user.id}`, ms(`${duration} ${typ}`))
    db.set(`kullanıcı${message.guild.id}_${user.id}`, user.id)
    db.set(`roliste_${message.guild.id}_${user.id}`, rol.id)
    message.guild.member(user).roles.add(rol.id)
  
} else {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))


  const ms = require('ms')
  const moment = require('moment')
  require('moment-duration-format')
  let rol = message.mentions.roles.first()
  let channel = message.mentions.channels.first()
if(args[0] == 'log') {
  db.set(`rollog${message.guild.id}`, channel.id)
  return message.channel.send(`Log channel set to ${channel}`);
}
  let duration = args[1]
  let sure = args[2]
  let typ;
  if (sure == 'seconds') typ = 'seconds'
  if (sure == 'minutes') typ = 'minutes'
  if (sure == 'hours') typ = 'hours'
  if (sure == 'days') typ = 'days' 
    let user = message.mentions.users.first()
    if(!user) return message.reply('Who will you give a temporary role?')
    if(isNaN(duration)) return message.reply('Specify Time!')
    if(!typ) return message.reply('Specify Time!')
if(!rol) return message.reply("Specify Role!")

    message.channel.send(`${user} has been given the role you specified for \`${moment.duration(ms(`${duration} ${typ}`)).format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)}\``)
    db.set(`rolint${message.guild.id}_${user.id}`, Date.now())
    db.set(`rolsure${message.guild.id}_${user.id}`, ms(`${duration} ${typ}`))
    db.set(`kullanıcı${message.guild.id}_${user.id}`, user.id)
    db.set(`roliste_${message.guild.id}_${user.id}`, rol.id)
    message.guild.member(user).roles.add(rol.id)

}
  }

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sr','time-role'], 
  permLevel: 0
};

exports.help = {
  name: 'süreli-rol',
};  