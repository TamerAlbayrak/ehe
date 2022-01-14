const discord = require('discord.js')
const db = require("quick.db");

exports.run = async (client, message, args) => {


  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Kullanıcı Adlarını Yönet` Yetkisine Sahip Olmalısınız**"))
 
let kinsta = message.mentions.members.first()
if (!kinsta) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!kinsta) return message.channel.send(`Değiştirilicek ismi girin.`)

kinsta.setNickname(isim)
message.channel.send(`${kinsta} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)

} else {

  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Manage Nicknames` permission.**"))
 
  let kinsta = message.mentions.members.first()
  if (!kinsta) return message.channel.send(`You must tag a user.`)
  
  let isim = args.slice(1).join(' ')
  if (!kinsta) return message.channel.send(`Enter the name to be changed.`)
  
  kinsta.setNickname(isim)
  message.channel.send(`User ${kinsta} New Name Set to **${isim}\**`)


}
}
//lrowsxrd
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim', 'change-name'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'v12 isim değiştir',
  description: 'isim-değiştir'
}
