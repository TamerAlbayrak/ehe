const Discord = require('discord.js');
const data = require('quick.db')
exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {



let prefix = '!'// botun prefixi
const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`${client.user.username}`)
.setTimestamp()
.setColor('BLUE')

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
if(!args[0]) return message.channel.send(emb.setDescription(`Bir argüman girmelisin: ${prefix}sağ-tık-kick aç/kapat/ayarla/sıfırla`))

if(args[0] === 'aç') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(da) return message.channel.send(emb.setDescription(`Sistem zaten açık.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))

data.set(`sağ.tık.kick.${message.guild.id}`, 'codare')
message.channel.send(emb.setDescription(`Sistem aktif edildi: Sağ tık kick atmaya çalışanların yetkisini alacağım.`)) }


if(args[0] === 'kapat') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`Sistem zaten kapalı.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))
  
data.delete(`sağ.tık.kick.${message.guild.id}`)
message.channel.send(emb.setDescription(`Sistem de-aktif edildi: Sağ tık kick atmaya çalışanların yetkisini artık almayacağım.`)) }


if(args[0] === 'ayarla') {
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmış <#${daa}>: ${prefix}sağ-tık-kick sıfırla`))

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(emb.setDescription(`Bir kanal etiketlemelisin.`))

await data.set(`sağ.tık.kick.kanal.${message.guild.id}`, kanal.id)
message.channel.send(emb.setDescription(`Sistemin kanalı ${kanal} olarak ayarlandı: Sağ tık kick atmaya çalışanların yetkisini aldığım da kanala mesaj göndereceğim.`)) }


if(args[0] === 'sıfırla') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`Sistem kapalı, o yüzden sıfırlayamıyorum.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`Sistemin kanalı ayarlanmamış: ${prefix}sağ-tık-kick ayarla #kanal`))
  
message.channel.send(emb.setDescription(`Sistemin <#${daa}> olan kanalı sıfırlandı: Sağ tık kick atmaya çalışanların yetkisini aldığım da kanala mesaj göndermeyeceğim.`)) 
data.delete(`sağ.tık.kick.kanal.${message.guild.id}`)}

} else {

  let prefix = '!'// botun prefixi
const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(`${client.user.username}`)
.setTimestamp()
.setColor('BLUE')

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
if(!args[0]) return message.channel.send(emb.setDescription(`You must enter an argument: ${prefix}right-click-kick on/off/set/reset`))

if(args[0] === 'on') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(da) return message.channel.send(emb.setDescription(`The system is already turned on.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`The channel of the system is not set: ${prefix}right-click-kick set #channel`))

data.set(`sağ.tık.kick.${message.guild.id}`, 'codare')
message.channel.send(emb.setDescription(`The system is activated: I will take the authority of those who try to right click kicks.`)) }


if(args[0] === 'off') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`The system is already turned off`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`The channel of the system is not set: ${prefix}right-click-kick set #channel`))
  
data.delete(`sağ.tık.kick.${message.guild.id}`)
message.channel.send(emb.setDescription(`The system is deactivated: I will now let those who try to right click.`)) }


if(args[0] === 'set') {
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(daa) return message.channel.send(emb.setDescription(`The channel of the system is already set. <#${daa}>: ${prefix}right-click-kick reset`))

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(emb.setDescription(`You have to tag a channel.`))

await data.set(`sağ.tık.kick.kanal.${message.guild.id}`, kanal.id)
message.channel.send(emb.setDescription(`The channel of the system is set to ${kanal}: I will send a message to the channel when I get the permission of those who try to right click.`)) }


if(args[0] === 'reset') {
const da = await data.fetch(`sağ.tık.kick.${message.guild.id}`)
if(!da) return message.channel.send(emb.setDescription(`The system is off so I can't reset it.`))
const daa = await data.fetch(`sağ.tık.kick.kanal.${message.guild.id}`)
if(!daa) return message.channel.send(emb.setDescription(`The channel of the system is not set: ${prefix}right-click-kick set #channel`))
  
message.channel.send(emb.setDescription(`The channel of the system has been reset: I will not send a message to the channel when I get the authorization of those who try to right click.`)) 
data.delete(`sağ.tık.kick.kanal.${message.guild.id}`)}
};

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sağtıkkick', 'rightclickkick', 'right-click-kick'],
  permLevel: 0
};

exports.help = {
  name: 'sağ-tık-kick'
};// codare