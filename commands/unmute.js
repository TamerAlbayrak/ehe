const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {
       
const muterol =  db.fetch(`muterol.${message.guild.id}`)
const mutekanal = db.fetch(`mutelog.${message.guild.id}`)
const muteyetkili = db.fetch(`muteyetkili.${message.guild.id}`)
const log = message.guild.channels.cache.get(mutekanal)
const üye = message.mentions.members.first()
if(!muterol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturma rolü ayarlanmamış! Ayarlamak için: **${prefix}susturma-rol @susturmarolü** şeklinde yazmalısın.`)
)
if(!mutekanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturma günlüğü ayarlanmamış! Ayarlamak için: **${prefix}susturma-log #logkanalı** şeklinde yazmalısın.`)
)
if(!muteyetkili) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturma yetkilisi ayarlanmamış! Ayarlamak için: **${prefix}susturma-yetkilisi @susturmayetkilisi** şeklinde yazmalısın.`)
)
if(!message.member.roles.cache.has(muteyetkili)) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturma işlemi için **<@&${muteyetkili}>** yetkisine sahip olman gerekiyor.`)
)
if(!üye) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`Susturulacak üyeyi etiketlemelisin.`)
)

let reason = args.slice(1).join(' ') || "Sebep Bulunmuyor.";
if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.');

if(message.member.roles.highest.position <= üye.roles.highest.position) return message.channel.send(`${üye} senden üstün veya aynı rolde!`).then(x => x.delete({ timeout: 5000 }));
üye.roles.remove(muterol).catch(error => {
    message.channel.send('Susturma rolünü veremiyorum. Verebilmem için yetkimi susturma rolünün üstüne çekmelisin.');
    return
})

message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${üye} adlı kişinin susturması başarıyla açıldı`)
)

let user = message.mentions.users.first();

log.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
    .setAuthor(`${user.username}#${user.discriminator} adlı kişinin susturulması açıldı.`)
    .addField(" :tools:  Susturan kişi",  `${message.author}`, true)
    .addField(" :mute:  Susturulan kişi",  `${üye}`, true)
    .addField(" :alarm_clock:  Susturulan süre",  `Süresiz`, true)
    .addField(" :notepad_spiral:  Susturma açma sebebi",  reason, true)
).catch(error => {
    message.channel.send(`${mutelog} adlı kanala mesaj atamıyorum!`);
    return
})
    } else {

        const muterol =  db.fetch(`muterol.${message.guild.id}`)
const mutekanal = db.fetch(`mutelog.${message.guild.id}`)
const muteyetkili = db.fetch(`muteyetkili.${message.guild.id}`)
const log = message.guild.channels.cache.get(mutekanal)
const üye = message.mentions.members.first()
if(!muterol) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`The mute role is not set! To set: **${prefix}mute-role @muterole** `)
)
if(!mutekanal) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`The mute log is not set! To set: **${prefix}mute-log #logchannel** `)
)
if(!muteyetkili) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`The mute authority is not set! To set: **${prefix}mute-authorized @muteauthorized**`)
)
if(!message.member.roles.cache.has(muteyetkili)) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`You need to have **<@&${muteyetkili}>** privilege to mute.`)
)
if(!üye) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`You must tag the member to be muted.`)
)

let reason = args.slice(1).join(' ') || "No reason found.";
if (reason.length < 1) return message.reply('You should write the reason for muting.');


if(message.member.roles.highest.position <= üye.roles.highest.position) return message.channel.send(`${üye} senden üstün veya aynı rolde!`).then(x => x.delete({ timeout: 5000 }));
üye.roles.remove(muterol).catch(error => {
    message.channel.send("I can't give the mute role. You have to pull me to the top of the mute role so I can deliver.");
    return
})

message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${üye} has been muted successfully.`)
)

let user = message.mentions.users.first();

log.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
    .setAuthor(`${user.username}#${user.discriminator} unmuted`,)
    .addField(" :tools:  Silencer",  `${message.author}`, true)
    .addField(" :mute:  Silenced",  `${üye}`, true)
    .addField(" :alarm_clock:  Silenced time",  `Perma`, true)
    .addField(" :notepad_spiral:  Reason for unmute",  reason, true)
).catch(error => {
    message.channel.send(`I can't send a message to${mutelog} channel!`);
    return
})
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["susturma-kaldır"],
    permLevel: 0
}

exports.help = {
    name: "unmute"
}