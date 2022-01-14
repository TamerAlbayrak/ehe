const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Olmalısınız!**"))

    const members = message.guild.members.cache.filter(member => member.user.presence.activites && /(discord|http|.com|.net|.org|invite|.ru|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activites.name));
    const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|.ru|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.MessageEmbed()
        .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.activites.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.")
        .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor.")
        .setColor("RANDOM")
    message.channel.send({embed})
} else {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To Use This Command, You Must Have 'Manage Messages' Authority!**"))
  
  const members = message.guild.members.cache.filter(member => member.user.presence.activites && /(discord|http|.com|.net|.org|invite|.ru|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activites.name));
  const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|.ru|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
  const embed = new Discord.MessageEmbed()
      .addField('Users whose Playing Message Contains Ads', members.map(member => `${member} = ${member.user.presence.activites.name}`).join("\n") || "No one's playing status message contains ads.")
      .addField('Username Advertised Users', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Nobody's username contains ads")
      .setColor("RANDOM")
  message.channel.send({embed})
};
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-ara', 'reklamara', 'reklamtaraması'],
    permLevel: 1
}

exports.help = {
    name: 'reklam-taraması',
  category: 'moderasyon',
    description: 'Kullanıcıların Oynuyor mesajındaki ve Kullanıcı adlarındaki reklamları tarar.',
    usage: 'reklam-taraması'
}