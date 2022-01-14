const discord = require('discord.js');
const db = new require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
    if(!args[0]) return message.channel.send(`Merhaba komutlar için lütfen ${prefix}reklam-engelleme-sistemi yazınız!`) 

    if(args[0] == "log") {
let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen günlük kanalını belirtiniz!')
db.set(`reklamengellog_${message.guild.id}`, enginar.id)
const embed2 = new discord.MessageEmbed()
.setTitle('Günlük')
.setDescription(`<@${message.author.id}> bu kanalı başarı ile günlük kanalı olarak ayarladı! \n \n Bundan sonra biri reklam yapınca bu kanala bildirimde bulunacağım!`)
client.channels.cache.get(enginar.id).send(embed2)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile günlük kanalı ayarlandı!')
.setDescription(`Günlük kanalını <#${enginar.id}> olarak ayarladım.`)
return message.channel.send(embed);
    };
    //
   if(args[0] == "mesaj"){
        let enginar = args.slice(1).join(' ');
        if(!enginar) return message.channel.send('Lütfen bir mesaj yaz!')
db.set(`reklamengelmesaj_${message.guild.id}`, enginar)
const embed = new discord.MessageEmbed()
.setTitle('Reklam engel mesajı ayarlandı!')
.setDescription(`<@${message.author.id}> bundan sonra biri reklam yapar ise , **${enginar}** şeklinde cevap vereceğim!`)
.setColor('RANDOM')
return message.channel.send(embed)
    }
    //
    if(args[0] == "aç") {
        let kontrol = db.fetch(`reklamengellog_${message.guild.id}`)
        if(!kontrol) return message.channel.send('Günlük kanalı ayarlanmamış!')
        let enginar = db.fetch(`reklamengelmesaj_${message.guild.id}`)
        if(!enginar) return message.channel.send('Reklam engel mesajı ayarlanmamış!')
db.set(`reklamengel_${message.guild.id}`, 'aktif')
const embed = new discord.MessageEmbed()
.setTitle('Reklam engel sistemi açıldı!')
.setDescription(`<@${message.author.id}> bu sunucuda reklam engel sistemini aktifleştirdi!`)
.setColor('RANDOM')
client.channels.cache.get(kontrol).send(embed)
return message.channel.send('Reklam engel sistemi aktifleştirildi!')
    }
//
if(args[0] == "sıfırla") {
    let engin = db.fetch(`reklamengellog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle('Reklam engel sistemi kapatıldı!')
    .setDescription(`<@${message.author.id}> reklam engel sistemini kapattı!`)
    client.channels.cache.get(engin).send(embed)
db.delete(`reklamengellog_${message.guild.id}`)
db.delete(`reklamengelmesaj_${message.guild.id}`)
db.delete(`reklamengel_${message.guild.id}`)
return message.channel.send('Sistem başarı ile sıfırlandı!')
};
//

} else {

    if(!args[0]) return message.channel.send(`Hello, please write ${prefix}profanity-blocking-system for commands!`) 


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

        
    if(args[0] == "log") {
        let enginar = message.mentions.channels.first()
        if(!enginar) return message.channel.send('Please specify the log channel!')
        db.set(`reklamengellog_${message.guild.id}`, enginar.id)
        const embed2 = new discord.MessageEmbed()
        .setTitle('Log')
        .setDescription(`<@${message.author.id}>  has successfully set this channel as her log channel! \n \nFrom now on, when someone advertises, I will notify this channel!`)
        client.channels.cache.get(enginar.id).send(embed2)
        const embed = new discord.MessageEmbed()
        .setTitle('Successfully set the log channel!')
        .setDescription(`I set the log channel to <#${enginar.id}>.`)
        return message.channel.send(embed);
            };
            //
           if(args[0] == "message"){
                let enginar = args.slice(1).join(' ');
                if(!enginar) return message.channel.send('Please write a message!')
        db.set(`reklamengelmesaj_${message.guild.id}`, enginar)
        const embed = new discord.MessageEmbed()
        .setTitle('Ad block message set!')
        .setDescription(`<@${message.author.id}>after that if someone advertises, I will answer in ${enginar}`)
        .setColor('RANDOM')
        return message.channel.send(embed)
            }
            //
            if(args[0] == "on") {
                let kontrol = db.fetch(`reklamengellog_${message.guild.id}`)
                if(!kontrol) return message.channel.send('The log channel is not set!')
                let enginar = db.fetch(`reklamengelmesaj_${message.guild.id}`)
                if(!enginar) return message.channel.send('Ad block message not set!')
        db.set(`reklamengel_${message.guild.id}`, 'aktif')
        const embed = new discord.MessageEmbed()
        .setTitle('Ad blocking system opened!')
        .setDescription(`<@${message.author.id}> has activated the ad blocking system on this server!`)
        .setColor('RANDOM')
        client.channels.cache.get(kontrol).send(embed)
        return message.channel.send('Ad blocker system activated!')
            }
        //
        if(args[0] == "reset") {
            let engin = db.fetch(`reklamengellog_${message.guild.id}`)
            const embed = new discord.MessageEmbed()
            .setTitle('Ad blocking system has been turned off!')
            .setDescription(`<@${message.author.id}> turned off the ad blocking system!`)
            client.channels.cache.get(engin).send(embed)
        db.delete(`reklamengellog_${message.guild.id}`)
        db.delete(`reklamengelmesaj_${message.guild.id}`)
        db.delete(`reklamengel_${message.guild.id}`)
        return message.channel.send('System reset successfully!')
        };




}
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ["ads-barrier"],
    permLevel: 0
    };
exports.help = {
 name: 'reklam-engel', 
description: 'küfür engel işte',
 usage: 'küfür-engel' 
};