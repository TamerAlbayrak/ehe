const discord = require('discord.js');
const db = new require('quick.db')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
    if(!args[0]) return message.channel.send(`Merhaba komutlar için lütfen ${prefix}küfür-engelleme-sistemi yazınız!`) 

    if(args[0] == "log") {
let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen günlük kanalını belirtiniz!')
db.set(`küfürengellog_${message.guild.id}`, enginar.id)
const embed2 = new discord.MessageEmbed()
.setTitle('Günlük')
.setDescription(`<@${message.author.id}> bu kanalı başarı ile günlük kanalı olarak ayarladı! \n \n Bundan sonra biri küfür edince bu kanala bildirimde bulunacağım!`)
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
db.set(`küfürengelmesaj_${message.guild.id}`, enginar)
const embed = new discord.MessageEmbed()
.setTitle('Küfür engel mesajı ayarlandı!')
.setDescription(`<@${message.author.id}> bundan sonra biri küfür eder ise , **${enginar}** şeklinde cevap vereceğim!`)
.setColor('RANDOM')
return message.channel.send(embed)
    }
    //
    if(args[0] == "aç") {
        let kontrol = db.fetch(`küfürengellog_${message.guild.id}`)
        if(!kontrol) return message.channel.send('Günlük kanalı ayarlanmamış!')
        let enginar = db.fetch(`küfürengelmesaj_${message.guild.id}`)
        if(!enginar) return message.channel.send('Küfür engel mesajı ayarlanmamış')
db.set(`küfürengel_${message.guild.id}`, 'aktif')
const embed = new discord.MessageEmbed()
.setTitle('Küfür engel sistemi açıldı!')
.setDescription(`<@${message.author.id}> bu sunucuda küfür engel sistemini aktifleştirdi!`)
.setColor('RANDOM')
client.channels.cache.get(kontrol).send(embed)
return message.channel.send('Küfür engel sistemi aktifleştirildi!')
    }
//
if(args[0] == "sıfırla") {
    let engin = db.fetch(`küfürengellog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle('Küfür engel sistemi kapatıldı!')
    .setDescription(`<@${message.author.id}> küfür engel sistemini kapattı!`)
    client.channels.cache.get(engin).send(embed)
db.delete(`küfürengellog_${message.guild.id}`)
db.delete(`küfürengelmesaj_${message.guild.id}`)
db.delete(`küfürengel_${message.guild.id}`)
return message.channel.send('Sistem başarı ile sıfırlandı!')
};
//

} else {

    if(!args[0]) return message.channel.send(`Hello, please write ${prefix}profanity-blocking-system for commands!`) 


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))


    if(args[0] == "log") {
        let enginar = message.mentions.channels.first()
        if(!enginar) return message.channel.send('Please specify the log channel!')
        db.set(`küfürengellog_${message.guild.id}`, enginar.id)
        const embed2 = new discord.MessageEmbed()
        .setTitle('Log')
        .setDescription(`<@${message.author.id}> has successfully set this channel as her log channel! \n \nFrom now on, when someone swears, I will report this channel!`)
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
        db.set(`küfürengelmesaj_${message.guild.id}`, enginar)
        const embed = new discord.MessageEmbed()
        .setTitle('Cursing block message set!')
        .setDescription(`<@${message.author.id}> If someone swears after that , I will answer in ${enginar}!`)
        .setColor('RANDOM')
        return message.channel.send(embed)
            }
            //
            if(args[0] == "on") {
                let kontrol = db.fetch(`küfürengellog_${message.guild.id}`)
                if(!kontrol) return message.channel.send('The log channel is not set!')
                let enginar = db.fetch(`küfürengelmesaj_${message.guild.id}`)
                if(!enginar) return message.channel.send('The profanity block message is not set.')
        db.set(`küfürengel_${message.guild.id}`, 'aktif')
        const embed = new discord.MessageEmbed()
        .setTitle('The cursing barrier system has been opened!')
        .setDescription(`<@${message.author.id}> has activated the profanity block system on this server!`)
        .setColor('RANDOM')
        client.channels.cache.get(kontrol).send(embed)
        return message.channel.send('The profanity barrier system has been activated!')
            }
        //
        if(args[0] == "reset") {
            let engin = db.fetch(`küfürengellog_${message.guild.id}`)
            const embed = new discord.MessageEmbed()
            .setTitle('The profanity barrier system has been turned off!')
            .setDescription(`<@${message.author.id}> turned off the curse blocking system!`)
            client.channels.cache.get(engin).send(embed)
        db.delete(`küfürengellog_${message.guild.id}`)
        db.delete(`küfürengelmesaj_${message.guild.id}`)
        db.delete(`küfürengel_${message.guild.id}`)
        return message.channel.send(' System reset successfully!')
        };
        //
        




}
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
exports.help = {
 name: 'küfür-engel', 
description: 'küfür engel işte',
 usage: 'küfür-engel' 
};