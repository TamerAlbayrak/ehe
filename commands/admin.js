const Discord = require('discord.js')
const db = require("croxydb")
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const üye = message.mentions.members.first()

let ownerid = `352036341153923072`
//--------------------------------------------------------------------------------------
if (!üye)
return message.channel.send(
  new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setDescription(`Bu kullanım yanlış bir kullanımdır. Doğru kullanım: ${prefix}admin ekle/kaldır/sorgula @kullanıcı`)
);
  
if(args[0] == 'ekle') {
let owner = [ownerid];
if (owner.includes(message.author.id)) {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
if (!user) return message.reply(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
 .setDescription("Yetkili olacak kişiyi etiketlemedin!")
)
üye.roles.add("638781145844285442")
db.set(`admin${user.id}`, 'admin')
message.channel.send(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user} adlı kişi yetkili olarak kaydedildi.`)

)
}}
  
  
  
  
  
if(args[0] == 'kaldır') {
let owner = [ownerid];
if (owner.includes(message.author.id)) {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
if (!user) return message.reply(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
 .setDescription("Yetkisi alınacak kişiyi etiketlemedin!")
)
üye.roles.remove("638781145844285442")
db.delete(`admin${user.id}`)
message.channel.send(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user} adlı kişi artık yetkili değil.`)

)
}}
  
  
  
if(args[0] == 'sorgula') {
var user = message.mentions.users.first() || message.author;
let kurucu = db.fetch(`admin${user.id}`)
let u = message.mentions.users.first() || message.author;
if(u.bot === true) {message.channel.send(new Discord.MessageEmbed()
.setDescription("Botlar yetkili olamaz!")
.setColor("ff0000"))}  
else {
var ks = [];  
if(kurucu == null) ks = ` \`Hayır. Bu kullanıcı botun yetkilisi değildir!\``
if(kurucu != null) ks = ` \`Evet. Bu kullanıcı botun yetkilisidir.\``
message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${user.username}`, user.avatarURL())
.setThumbnail(user.avatarURL())                     
.setTitle(`Yetki sorgulama bilgisi:`)                 
.addField(`**Kullanıcı:**`, `<@${user.id}>`, true)
.addField("**Kullanıcı Yetkili mi?**", ks, true)
.setFooter(`${client.user.username} yetkili sistemi`)   
.setTimestamp())}    }

}
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ["admin"],
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'Bot üzerinden yetki verir.'
};
