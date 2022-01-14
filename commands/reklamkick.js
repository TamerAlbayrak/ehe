const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    if (kontrol == "TR_tr") {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))


    if (!args[0]) return message.channel.send('Sistemi kullanabilmek için: `reklamkick aç ya da kapat yazmalısın.`')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam kick sistemi açıldı. Reklam yapanlar 3 uyarıdan sonra banlanıcaktır.`)
//DCS EKİBİ
    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam kick sistemi kapatıldı`)

    }
} else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    if (!args[0]) return message.channel.send('To use the system: `adskick open or close`')

    if (args[0] == 'open') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send('advertising kick system has been opened. Advertisers will be banned after 3 warnings.')
//DCS EKİBİ
    }
    if (args[0] == 'close') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`System disable`)

    }
};
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-kick'],
    permLevel: 0
};

exports.help = {
    name: 'reklamkick',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};