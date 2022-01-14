const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = (client, message, args) => { 
let user = message.mentions.users.first();
var id = user.id
var gid = message.guild.id;
    if(args[1] == "hepsi") {
    db.delete(`para_${id}_${gid}`)
    return message.channel.send(`${user} Adlı Kullanıcının Bütün Parası Sıfırlandı!`);
  }
let epara = args[1] 
if (!user) return message.channel.send("Bir Kullanıcıyı Etiketlemelisin!")
if(!epara) return message.channel.send("Hey, Lütfen Silinecek Miktarı Belirtiniz!");
if(isNaN(epara)) return message.channel.send("Lütfen Sayı Giriniz, Örnek: `.parasil 100`");

let para = db.fetch(`para_${id}_${gid}`)
db.subtract(`para_${id}_${gid}`, epara)
let spara = para - epara
message.channel.send(`${user} adlı Kullanıcının Hesabına \`${epara}\` tutarında Para Silinmiştir! Parası: \`${spara}\``)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["parasil"],
  permLevel: 4
};

exports.help = {
  name: 'ps'
};