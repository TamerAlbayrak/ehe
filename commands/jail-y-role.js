const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('Bir sorunumuz var!').setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`jail.yetkilirole.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('Başarılı!').setDescription(`Jail sistemin de kullanılacak: ${mentionRole} olarak seçtiniz.`));
} else {
  
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('We have a problem!!').setDescription('You forgot to tag a role.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`jail.yetkilirole.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('Successful!').setDescription(`You have chosen the role to be used in the jail system as ${mentionRole}.`));

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["jail-yetkili-rol"],
  permLevel: 0
}

exports.help = {
  name: 'jail-yetkili-role'
};