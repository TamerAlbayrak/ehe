const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  let u = message.mentions.users.first() || message.author;
  var user = message.mentions.users.first() || message.author;
  var id = user.id
  var gid = message.guild.id;
  var para = await db.fetch(`para_${id}_${gid}`)
var para1 = [];  
if(para == null) para1 = `\`0\``
if(para != null) para1 = `\`${para}\``
  if(u.bot === true) {
  
                message.channel.send(new Discord.MessageEmbed()
                        .setDescription("Botların parası bulunmamaktadır!")
                        .setColor("ff0000"))
}  
  
  else 
  message.channel.send(new Discord.MessageEmbed()
  .setColor("ff0000")
  .setAuthor(`${user.username}`, user.avatarURL())
  .setThumbnail(user.avatarURL())                     
  .setTitle(`Para Bilgisi:`)                 
  .addField(`Kullanıcı:`, `<@${user.id}>`, true)
  .addField(`Kullanıcının Parası:`, `**${para1}**`, true)   
  .setFooter(`${client.user.username} Gold Üye Sistemi!`, client.user.avatarURL())   
  .setTimestamp()

)
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para'
};