"use strict"
const customizeList = ['resim', 'renk', "sıfırla"];
const db = require('quick.db');
const Discord = require('discord.js')
exports.run = async(client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

    const [selectCustomize] = args;

    if (!customizeList.includes(selectCustomize))
        return message.channel.send(new Discord.MessageEmbed().setDescription(`**Hata:** Bu geçerli bir özelleştirme ayarı değil.`).setColor(message.guild.me.displayColor));
    else {
        if (selectCustomize === 'resim') {

            const [, backgroundURL] = args;

            if (!backgroundURL) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Hata:** Bir resim URL'si girmen gerekiyor.`).setColor(message.guild.me.displayColor));

            let data = db.fetch(`rankCardCustomize_${message.author.id}`);
            if (data) data.backgroundURL = backgroundURL;
            else data = { backgroundURL };

            message.channel.send(new Discord.MessageEmbed().setDescription(`Seviye kartındaki resmin ayarlandı.`).setColor(message.guild.me.displayColor));
            await db.set(`rankCardCustomize_${message.author.id}`, data);

        } else if (selectCustomize === 'renk') {

            const [, color] = args;

            if (!color) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Hata:** Bir renk (ingilizce örn. white) veya renk kodu (örn. #56ffff) girmen gerekiyor`).setColor(message.guild.me.displayColor));

            let data = db.fetch(`rankCardCustomize_${message.author.id}`);
            if (data) data.cardColor = color;
            else data = { cardColor: color }

            message.channel.send(new Discord.MessageEmbed().setDescription(`Renk kodun başarıyla ayarlandı.`).setColor(message.guild.me.displayColor));
            await db.set(`rankCardCustomize_${message.author.id}`, data);
        }
    }
    
    if(args[0] === 'sıfırla'){
   db.delete(`rankCardCustomize_${message.author.id}`);
    
    message.channel.send(new Discord.MessageEmbed().setDescription(`Kartındaki resim ve renk başarıyla sıfırlandı`).setColor(message.guild.me.displayColor));
    
    

}

} else {
    const [selectCustomize] = args;

    if (!customizeList.includes(selectCustomize))
        return message.channel.send(new Discord.MessageEmbed().setDescription(`**Error:** This is not a valid customization setting.`).setColor(message.guild.me.displayColor));
    else {
        if (selectCustomize === 'picture') {

            const [, backgroundURL] = args;

            if (!backgroundURL) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Error:** You need to enter an image URL.`).setColor(message.guild.me.displayColor));

            let data = db.fetch(`rankCardCustomize_${message.author.id}`);
            if (data) data.backgroundURL = backgroundURL;
            else data = { backgroundURL };

            message.channel.send(new Discord.MessageEmbed().setDescription(`Your image on the level card has been adjusted.`).setColor(message.guild.me.displayColor));
            await db.set(`rankCardCustomize_${message.author.id}`, data);

        } else if (selectCustomize === 'color') {

            const [, color] = args;

            if (!color) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Error:** You need to enter a color (eg white) or a color mode (eg #56ffff)`).setColor(message.guild.me.displayColor));

            let data = db.fetch(`rankCardCustomize_${message.author.id}`);
            if (data) data.cardColor = color;
            else data = { cardColor: color }

            message.channel.send(new Discord.MessageEmbed().setDescription(`Your color code has been set successfully.`).setColor(message.guild.me.displayColor));
            await db.set(`rankCardCustomize_${message.author.id}`, data);
        }
    }
    
    if(args[0] === 'reset'){
   db.delete(`rankCardCustomize_${message.author.id}`);
    
    message.channel.send(new Discord.MessageEmbed().setDescription(`Picture and color on card reset successfully.`).setColor(message.guild.me.displayColor));
    
    
}
}
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['seviye-kart-özelleştir', 'seviyekartözelleştir', "levelcard-customize", "level-card-customize"],
    permLevel: 0
};

exports.help = {
    name: 'seviyekart-özelleştir',
    description: 'Botun pingini gösterir',
    usage: 'ping'
};