 const Discord = require('discord.js');
const db = require('quick.db')
const talkedRecently = new Set();
exports.run = (client, message, args) => { 
  
const umut = db.fetch(`admin_${message.author.id}`)
if(!message.author.id == umut)
if(db.fetch(`admin_${message.author.id}`) === true) return;
let user = message.mentions.users.first();
var id = user.id;
var gid = message.guild.id;
let epara = args[1] 
if (!user) return message.channel.send("Bir Kullanıcıyı Etiketlemelisin!")
if(!epara) return message.channel.send("Hey, Lütfen Eklenecek Miktarı Belirtiniz!");
if(isNaN(epara)) return message.channel.send("Lütfen Sayı Giriniz, Örnek: `.paraekle 100`");

let para = db.fetch(`para_${id}_${gid}`)
db.add(`para_${id}_${gid}`, epara)
let spara = para - -epara
message.channel.send(`${user} adlı Kullanıcının Hesabına \`${epara}\` Eklenmiştir! Parası: \`${spara}\``)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["paraekle"],
  permLevel: 4
};

exports.help = {
  name: 'pe'
};