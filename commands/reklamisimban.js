const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
    if (!args[0]) return message.channel.send('Sistemi kullanmak için: `!reklamisimban aktif ya da deaktif`')

    if (args[0] == 'aktif') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam isim ban sistemi aktif.`)

    }
    if (args[0] == 'deaktif') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam isim ban sistemi deaktif.`)

    }
} else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
    if (!args[0]) return message.channel.send('To use the system: `!name-ads-ban activated or deactivated`')

    if (args[0] == 'active') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send('System is active.')
    }
    
    if (args[0] == 'deactivated') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Successfully disabled.`)

    }
};
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-isim-ban', 'name-ads-ban'],
    permLevel: 0
};

exports.help = {
    name: 'reklamisimban',
    description: 'Reklam isim ban sistemini açar',
    usage: 'reklamisimban a�/kapat'
};