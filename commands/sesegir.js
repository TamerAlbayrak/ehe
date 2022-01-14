const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
	
if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Premium Üye olmalısınız!"))

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Omalısınız**"))


 let kanal = args[0]
 if (!kanal) return message.channel.send("Bir Kanal ID'si Belirt")  

 db.set(client.channels.cache.get(kanal).join());


message.channel.send("Ses Kanalına Başarılı Bir Şekilde Bağlandım")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sesgir","ses-gir"],
  permLevel: 3
}
exports.help = {
  name: 'sesegir',
  description: "",
  usage: ''
}