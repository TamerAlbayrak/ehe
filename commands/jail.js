const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  if (kontrol == "TR_tr") {

  
const logChannel = await data.fetch(`jail.log.${message.guild.id}`);
const jailYetkili = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const karantinaRole = await data.fetch(`jail.karantinarole.${message.guild.id}`);
if(!logChannel) return;
if(!jailYetkili) return;
if(!karantinaRole) return;

const errorEmbed = new Discord.MessageEmbed()
.setColor('#00001');
const errorEmbed2 = new Discord.MessageEmbed()
.setTitle('Bir sorunumuz var!');

if(!message.member.permissions.has(jailYetkili)) return message.channel.send(errorEmbed.setDescription(`${message.guild.roles.cache.get(muteYetkili)} Rolüne sahip olman gerekiyor.`));
if(!args[0]) return message.channel.send(errorEmbed.setTitle('Bir sorunumuz var!').setDescription(`Bir kullanıcıyı etiketlemelisin!`));

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first();
} else if(args[0]) {
member = message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(errorEmbed.setTitle('Bir sorunumuz var!').setDescription(`Bir kullanıcıyı etiketlemelisin!`));
}

if(message.author.id === member.id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription(`O kadar yürekli olamazsın.. 🙄`))
if(member.permissions.has('ADMINISTRATOR')) return message.channel.send(errorEmbed2.setDescription('Yönetici kişiyi hapise atamazsın!'));

message.channel.send(new Discord.MessageEmbed().setTitle('Kişi karantinaya alındı.').setDescription(`${member} adlı kullanıcı karantinaya atıldı.`));
member.roles.cache.forEach(s => member.roles.remove(s.id));
member.roles.add(karantinaRole);
message.guild.channels.cache.get(logChannel).send(new Discord.MessageEmbed().setColor('#00001').setTitle('Karantinaya Biri Geldi')
.setDescription(`${member} kullanıcısının tüm rollerine el koyuldu.

${message.guild.roles.cache.get(karantinaRole)} kapsamına alınarak kontrolü kısıtlandı.`).setImage('https://cdn.glitch.com/322deae8-c50e-4ad8-a7d2-ff13f650466d%2Ftenor.gif')
.setFooter(`${message.author.username} tarafından karantinaya alındı`, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))
  } else {



    const logChannel = await data.fetch(`jail.log.${message.guild.id}`);
const jailYetkili = await data.fetch(`jail.yetkilirole.${message.guild.id}`);
const karantinaRole = await data.fetch(`jail.karantinarole.${message.guild.id}`);
if(!logChannel) return;
if(!jailYetkili) return;
if(!karantinaRole) return;

const errorEmbed = new Discord.MessageEmbed()
.setColor('#00001');
const errorEmbed2 = new Discord.MessageEmbed()
.setTitle('We have a problem!');

if(!message.member.permissions.has(jailYetkili)) return message.channel.send(errorEmbed.setDescription(`You need to have the  ${message.guild.roles.cache.get(muteYetkili)} role`));
if(!args[0]) return message.channel.send(errorEmbed.setTitle('We have a problem!').setDescription(`You have to tag a user!`));

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first();
} else if(args[0]) {
member = message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send(errorEmbed.setTitle('We have a problem!').setDescription(`You have to tag a user!`));
}

if(message.author.id === member.id) return message.channel.send(new Discord.MessageEmbed().setColor('#9c5cb2').setTitle('Agaa beeeeeeeee!').setDescription(`O kadar yürekli olamazsın..`))
if(member.permissions.has('ADMINISTRATOR')) return message.channel.send(errorEmbed2.setDescription(`You can't jail the executive person!`));

message.channel.send(new Discord.MessageEmbed().setTitle('The person has been quarantined.').setDescription(`${member} user has been quarantined.`));
member.roles.cache.forEach(s => member.roles.remove(s.id));
member.roles.add(karantinaRole);
message.guild.channels.cache.get(logChannel).send(new Discord.MessageEmbed().setColor('#00001').setTitle('Someone arrived in quarantine')
.setDescription(`${member} all roles of user have been confiscated.

${message.guild.roles.cache.get(karantinaRole)} control was restricted by being included in the scope.`).setImage('https://cdn.glitch.com/322deae8-c50e-4ad8-a7d2-ff13f650466d%2Ftenor.gif')
.setFooter(`Quarantined by ${message.author.username} `, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setThumbnail(member.user.avatarURL() ? member.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'))
 

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cezalı', 'Cezalı'],
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "jail işte",
  usage: ''
};