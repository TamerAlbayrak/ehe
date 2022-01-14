const Discord = require('discord.js')
const db = require('quick.db')
let ms = require("parse-ms");
exports.run = (client, message, args) => {
    let cooldown = 86400000, 
amount = Math.floor(Math.random() * 10) + 200;      
let günlük = db.fetch(`günlük(${message.author.id})`);
    if (günlük !== null && cooldown - (Date.now() - günlük) > 0) {
        let timeObj = ms(cooldown - (Date.now() - günlük));

        const embed = new Discord.MessageEmbed()
        .setTitle('Hata!')
        .setColor('ff0000')
        .setDescription(`Komutu Kullanmak İçin; \`${timeObj.hours}\` Saat \`${timeObj.minutes}\` Dakika \`${timeObj.seconds}\` Saniye Beklemelisin!`)
        message.channel.send(embed).then(n => n.delete(4000));
        return
    } else {

db.set(`günlük(${message.author.id})`, Date.now());
  var id = message.author.id
  var gid = message.guild.id;
  let para = db.fetch(`para_${id}_${gid}`)
  var random = Math.floor(Math.random() * 3000); 
  let newpara = para - -random
 db.add(`para_${id}_${gid}`, random)
  if(random <= 0) return(message.channel.send(new Discord.MessageEmbed()
  .setColor("ff0000")
  .setDescription(`Maalesef! Günlük Paradan Para Kazanamadın!`)))
 else {
    message.channel.send(new Discord.MessageEmbed()
.setColor("ff000")
.setDescription(`**Günlük Paradan \`${random}\` Miktarında Para Kazandın ve Hesabına Başarıyla eklendi! Şimdiki Paran: \`${newpara}\`**`))
  }}
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlük'
};