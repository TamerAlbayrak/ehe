const Discord = require('discord.js');
const db = require('quick.db');

let botid = ('650739604789395476') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} İletişim Bilgileri`)
        .addField('Sevgili Kullanıcı', 'Botumuzun Davet Linki Aşağıdadır. Eğer Bot İle İlgili Sorunun Varsa Botumuzun Destek Sunucusuna Gelip Yardım İsteyebilir ve Botumuzdan Memnun Kalırsan Oy Vererek Bize Destek Verebilirsin.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=693134673450106890&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/wRbgTkVVB2) **|** [Bota Oy Ver](https://top.gg/bot/693134673450106890/vote) **|** [Website](https://www.taxperia.tk)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.send(embed);

} else {

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} Contact information`)
            .addField('Dear User', 'Below is the invitation link of our bot.If you have a problem with the bot, you can come to our bot is support server and ask for help, and if you are satisfied with our bot, you can give us support by voting.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
        .addField(`» Links`, `[Bot İnvite Link](https://discordapp.com/oauth2/authorize?client_id=693134673450106890&scope=bot&permissions=805314622) **|** [Support Server](https://discord.gg/wRbgTkVVB2) **|** [Vote For Bot](https://top.gg/bot/693134673450106890/vote) **|** [Website](https://www.taxperia.tk)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.send(embed);

}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'bot hakkında bilgi',
  usage: 'davet'
};
   