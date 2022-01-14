const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {

        if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Premium Üye olmalısınız!"))
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

        const sec = args[0]

        if (!sec) {
            return message.reply(`Örnek Kullanımı: \`${prefix}anti-raid aç/kapat #logkanalı\`
`)
        }

        if (sec == "aç") {
            const kanal = message.mentions.channels.first()
            if (!kanal) {
                return message.reply(`Anti Raid Sistemini Açmak İçin \`${prefix}anti-raid aç/kapat #logkanalı\` Yazmanız Gerekiyor.`)
            }
            db.set(`antiraidK_${message.guild.id}`, kanal.id)
            return message.channel.send(`${client.emojis.cache.get("751689717258387628")} Kayıt Kanalını ${kanal} Olarak Ayarladım.`)
        }


        if (sec == "kapat") {
            const kanal = message.mentions.roles.first()
            db.delete(`antiraidK_${message.guild.id}`)
            return message.channel.send(`${client.emojis.cache.get("751689777069162618")} Kayıt Kanalını Başarıyla Kapattım.`)

        }

    } else {
        if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("You must be a Premium Member to use this command!"))
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

        const sec = args[0]

        if (!sec) {
            return message.reply(`Example: \`${prefix}anti-raid on/off #logchannels\`
`)
        }

        if (sec == "on") {
            const kanal = message.mentions.channels.first()
            if (!kanal) {
                return message.reply(`To Open The Anti Raid System \`${prefix}anti-raid on/off #logchannels\` you need to type.`)
            }
            db.set(`antiraidK_${message.guild.id}`, kanal.id)
            return message.channel.send(`${client.emojis.cache.get("751689717258387628")} I set the Log channel to ${kanal}.`)
        }


        if (sec == "off") {
            const kanal = message.mentions.roles.first()
            db.delete(`antiraidK_${message.guild.id}`)
            return message.channel.send(`${client.emojis.cache.get("751689777069162618")} I successfully closed the Log channel.`)

        }



    }};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['antiraid'], 
  permLevel: 0
};

exports.help = {
  name: 'anti-raid',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};