const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('ms');

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

let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}süreli-sustur <@kullanıcı> <1sn/1dk/1sa/1g>\``);

  let reason = args.slice(2).join(' ') || "Sebep Bulunmuyor.";
  if (reason.length < 2) return message.reply('Susturma sebebini yazmalısın.');
  

  message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${üye} kullanıcısı **${args[1]}** süresi boyunca susturuldu!`)
  )
  
    setTimeout(function(){
    üye.roles.remove(muterol);
    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`${üye} kullanıcısının susturma süresi sona erdi!`)
        )
  }, ms(mutezaman));


if(message.member.roles.highest.position <= üye.roles.highest.position) return message.channel.send(`${üye} senden üstün veya aynı rolde!`).then(x => x.delete({ timeout: 5000 }));
üye.roles.add(muterol).catch(error => {
    message.channel.send('Susturma rolünü veremiyorum. Verebilmem için yetkimi susturma rolünün üstüne çekmelisin.');
    return
})

let user = message.mentions.users.first();

log.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
    .setAuthor(`${user.username}#${user.discriminator} adlı kişi susturuldu`)
    .addField(" :tools:  Susturan kişi",  `${message.author}`, true)
    .addField(" :mute:  Susturulan kişi",  `${üye}`, true)
    .addField(" :alarm_clock:  Susturulan süre",  `${args[1]}`, true)
    .addField(" :notepad_spiral:  Susturma sebebi",  reason, true)
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

let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`Please enter a time! \nTo set; \`${prefix}tempmute <@user> <1s/1m/1h/1d>\``);

  let reason = args.slice(2).join(' ') || "No reason found.";
  if (reason.length < 2) return message.reply('You should write the reason for muting.');
  

  message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`${üye} silenced throughout **${args[1]}**`)
  )
  
    setTimeout(function(){
    üye.roles.remove(muterol);
    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`${üye}'s mute time has expired!`)
        )
  }, ms(mutezaman));



if(message.member.roles.highest.position <= üye.roles.highest.position) return message.channel.send(`${üye} s superior to you or in the same role!`).then(x => x.delete({ timeout: 5000 }));
üye.roles.add(muterol).catch(error => {
    message.channel.send("I can't give the mute role. You have to pull me to the top of the mute role so I can deliver.");
    return
})

let user = message.mentions.users.first();

log.send(
    new Discord.MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
    .setAuthor(`${user.username}#${user.discriminator} muted`,)
    .addField(" :tools:  Silencer",  `${message.author}`, true)
    .addField(" :mute:  Silenced",  `${üye}`, true)
    .addField(" :alarm_clock:  Silenced time",  `${args[1]}`, true)
    .addField(" :notepad_spiral:  Reason for mute",  reason, true)
).catch(error => {
    message.channel.send(`I can't send a message to${mutelog} channel!`);
    return
})
}}




exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["süreli-sustur"],
    permLevel: 0
}

exports.help = {
    name: "tempmute"
}