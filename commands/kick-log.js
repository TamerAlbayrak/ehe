const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {



 let kicklogkanal = message.mentions.channels.first()
if (!kicklogkanal) return message.channel.send('Lütfen Günlük Kanalını Etiketlermisin?')
   
  db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)

 
  message.channel.send(`Günlük Kanalı Başarıyla Ayarlandı; **${kicklogkanal}**`)

} else {

  let kicklogkanal = message.mentions.channels.first()
  if (!kicklogkanal) return message.channel.send('Could you please tag the log channel?')
     
    db.set(`kicklog_${message.guild.id}`, kicklogkanal.id)
  
   
    message.channel.send(`Log Channel Set Up Successfully; **${kicklogkanal}**`)
}
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["kick-log-set"],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'kick-log-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kick-log-kanal <#kanal>'
};