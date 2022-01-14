const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Olmalısınız!**"))
 const tag = args.slice(0).join(' ');
if(!tag) return message.reply(`:warning: Bir Tag Girmelisiniz Örnek Kullanım; \n \`${ayarlar.prefix}tag-taraması ƈα\``)
  const memberss = message.guild.members.cache.filter(member => member.user.username.includes(tag));
    const embed = new Discord.MessageEmbed()
        .addField(`Kullanıcı Adında ${tag} Tagı Olan Kullanıcılar`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Tagı Bulunmuyor.`)
        .setColor("RANDOM")
    message.channel.send({embed})
} else {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To Use This Command, You Must Have 'Manage Messages' Authority!**"))
  const tag = args.slice(0).join(' ');
  if(!tag) return message.reply(`:warning: You Must Enter a Tag Example Usage; \n \`${ayarlar.prefix}tag-scan ƈα\``)
    const memberss = message.guild.members.cache.filter(member => member.user.username.includes(tag));
      const embed = new Discord.MessageEmbed()
          .addField(`Users whose Username has $ {tag} Tag`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Nobody has \`${tag} \` Tag in their username.`)
          .setColor("RANDOM")
      message.channel.send({embed})
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['tag-tara', 'tagtara', 'tagtaraması', 'tag-scan', 'tagtarama'],
    permLevel: 0
}
exports.help = {
    name: 'tag-taraması',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}
