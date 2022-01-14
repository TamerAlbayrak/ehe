const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `!otorol-mesaj -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send('Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`otomesaj_${message.guild.id}`, mesaj)  
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('You can specify at least 5 characters for Otorol Message System. Example: `!autorole-message -uye- Welcome! together with you, we are the number of members!`')
  
 message.channel.send('I set the auto role message to `'+message+'`.') 
 db.set(`otomesaj_${message.guild.id}`, message)  
};
};
exports.conf = {
  enabled: true,  //dcs ekibi
  guildOnly: false, 
  aliases: ['oto-rol-msg'], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-mesaj',
  description: 'taslak', 
  usage: 'otorol-mesaj'
};