const Discord = require('discord.js');
const botconfig = require('../ayarlar.json');
const db = require("quick.db");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);


exports.run = async (client, message, params) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle("UYARI")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("Bu Komutu Kullanabilmek icin Botumuza Oy Vermelisiniz!")
                .addField("Oy Vermek icin:", `[Bana Tikla!](https://top.gg/bot/693134673450106890/vote)`)
            )

        } else {
            if (!message.guild) {
                const ozelmesajuyari = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTimestamp()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz**')
                return message.author.send(ozelmesajuyari);
            }
            if (message.channel.type !== 'dm') {
                const sunucubilgi = new Discord.MessageEmbed()
                    .setAuthor(message.author.username + ' Ooo yandan yandan!')
                    .setColor(3447003)
                    .setTimestamp()
                    .setDescription('')
                    .setImage(`https://cdn.discordapp.com/emojis/396521772758990851.gif?v=1`)
                return message.channel.send(sunucubilgi);
            }
        }
    });
} else {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle("Warning")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("To Use This Command You Must Vote Our Bot!")
                .addField("To vote:", `[Click Me!](https://top.gg/bot/693134673450106890/vote)`)
            )
    
        } else {
            if (!message.guild) {
                const ozelmesajuyari = new Discord.MessageEmbed()
                    .setColor(0xFF0000)
                    .setTimestamp()
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .addField('**Fun Commands Cannot Be Used in Private Messages**')
                return message.author.send(ozelmesajuyari);
            }
            if (message.channel.type !== 'dm') {
                const sunucubilgi = new Discord.MessageEmbed()
                    .setAuthor(message.author.username + ' Ooo sideways!')
                    .setColor(3447003)
                    .setTimestamp()
                    .setDescription('')
                    .setImage(`https://cdn.discordapp.com/emojis/396521772758990851.gif?v=1`)
                return message.channel.send(sunucubilgi);
            }
        }
    });
};

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kafadansı',
  description: 'Bot kafa dansı yapar!',
  usage: 'kafa-dansi'
};
