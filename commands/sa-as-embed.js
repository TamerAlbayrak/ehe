const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("<:carlos_hayir:836892989568712724>  **Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Omalısınız!**"))
const yrnex = args.join(` `);
  if(!yrnex) message.channel.send(new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **!sa-as aç & kapat**`)
  .setColor("RED")
)
if(yrnex === "aç") {
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Açıldı.  `)
  .setColor("GREEN")
)
}
else if(yrnex === "kapat") {
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Kapatıldı. `)
  .setColor("RED")
  .setFooter("Taxperia"))
}
} else {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To Use This Command You Must Have 'Manage Messages' Authority!**"))
const yrnex = args.join(` `);
  if(!yrnex) message.channel.send(new Discord.MessageEmbed()
  .addField("Misuse",`Example Usage: **!sa-as open & close**`)
  .setColor("RED")
)
if(yrnex === "open") {
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(new Discord.MessageEmbed()
  .addField("Transaction Successful  ",`Sa-As System Has Been Opened Successfully.  `)
  .setColor("GREEN")
)
}
else if(yrnex === "close") {
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(new Discord.MessageEmbed()
  .addField("Transaction Successful",`Sa-As System Has Been Successfully Closed.  `)
  .setColor("RED")
  .setFooter("Taxperia"))
}
};
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['sa-as'],
 permLevel: 1,
};

exports.help = {
 name: 'sa-as',
 description: 'sa-as',
 usage: 'sa-as'
};