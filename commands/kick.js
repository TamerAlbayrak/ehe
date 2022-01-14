const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {


  if(!message.member.roles.cache.has(db.fetch(`kickyetkilisi_${message.guild.id}`))) {
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!"));
   }
  
   const codework = await db.fetch(`kicklog_${message.guild.id}`)
   if(codework == null) return message.channel.send('Lütfen günlük kanalı ayarla!');
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let kicklogkanalı = await db.fetch(`kicklog_${member.guild.id}`);
  let kicklog = member.guild.channels.cache.find(name => kicklogkanalı);
  if (message.mentions.users.size < 1) return message.reply('Kimi kickleyeceğimi yazmalısın.');
  if (reason.length < 1) return message.reply('Kick sebebini yazmalısın.');

  if (!message.guild.member(user).kickable) return message.reply('Yetkili Kişileri Kickleyemem.');
  message.guild.member(user).kick();
  message.channel.send(`${message.author} Kick İşlemi Başarılı!`)

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Yapılan İşlem:','Kick')
    .addField('Kicklenen:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kickleyen:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Kick Sebebi', reason);
  message.guild.channels.cache.get(db.fetch(`kicklog_${message.guild.id}`)).send(embed);

} else {

  if(!message.member.roles.cache.has(db.fetch(`kickyetkilisi_${message.guild.id}`))) {
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("You Do Not Have The Necessary Authority To Use This Command!"));
   }
  
   const codework = await db.fetch(`kicklog_${message.guild.id}`)
   if(codework == null) return message.channel.send('Please Set Kick Log Channel!');
  
  let member = message.member
  let guild = message.guild
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  let kicklogkanalı = await db.fetch(`kicklog_${member.guild.id}`);
  let kicklog = member.guild.channels.cache.find(name => kicklogkanalı);
  if (message.mentions.users.size < 1) return message.reply('You gotta write who I kicked');
  if (reason.length < 1) return message.reply('You should write the reason for the kick.');

  if (!message.guild.member(user).kickable) return message.reply(`I Can't Kick Authorized Persons.`);
  message.guild.member(user).kick();
  message.channel.send(`${message.author} Kick Operation Successful!`)

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action Taken:','Kick')
    .addField('Kicked out:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kicker:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Kick Cause', reason);
  message.guild.channels.cache.get(db.fetch(`kicklog_${message.guild.id}`)).send(embed);

}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["at"],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'kullanıcı [kullanıcı] [sebep]'
};