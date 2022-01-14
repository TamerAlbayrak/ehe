const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

  let kickyetkilirol = message.mentions.roles.first()
  if (!kickyetkilirol) return message.channel.send('Lütfen yetkili rolünü etiketlermisin?')
   
  db.set(`kickyetkilisi_${message.guild.id}`, kickyetkilirol.id)
  message.channel.send(`Yetkili Rolü Başarıyla Ayarlandı; **${kickyetkilirol}**`)

} else {

  let kickyetkilirol = message.mentions.roles.first()
  if (!kickyetkilirol) return message.channel.send('Could you please tag your authoritative role?')
   
  db.set(`kickyetkilisi_${message.guild.id}`, kickyetkilirol.id)
  message.channel.send(`Authorized Role Set Successfully; **${kickyetkilirol}**`)
}
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kick-authoritative-set"],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'kick-yetkilisi-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'ban-yetkili-rol <@rol>'
};