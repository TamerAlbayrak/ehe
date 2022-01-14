const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{

if (db.fetch(`admin${message.author.id}`) !== "admin") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Botun Yetkilisi olmalısınız!"))
   let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!user) 
      return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("WHITE")
        .setDescription('Beyaz Listeye almam için bir kullanıcı etiketleyin !!'))

    db.delete(`kliste.${user.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
      .setColor("WHITE")
      .setDescription(`**${user.tag}** adlı kişi beyaz listeye alınmıştır.`))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['beyaz-liste', 'beyazliste'],
  permLevel: 4
}

exports.help ={
    name:'beyazliste',
    aliases:['bl'],
    description:'Kullanıcıyı beyazlisteye alır.',
}