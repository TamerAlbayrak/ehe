const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
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
                    .addField(':warning: Uyarı :warning:', '`sunucuresmi` adlı komutu özel mesajlarda kullanamazsın.')
                return message.author.send(ozelmesajuyari);
            }
            if (message.channel.type !== 'dm') {
                const sunucubilgi = new Discord.MessageEmbed()
                    .setAuthor(message.guild.name)
                    .setColor(3447003)
                    .setTimestamp()
                    .setDescription('')
                    .setImage(`${message.guild.iconURL()} `)
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
                    .addField(':warning: Warning :warning:', ' You cannot use the  `serverpicture`command in private messages.')
                return message.author.send(ozelmesajuyari);
            }
            if (message.channel.type !== 'dm') {
                const sunucubilgi = new Discord.MessageEmbed()
                    .setAuthor(message.guild.name)
                    .setColor(3447003)
                    .setTimestamp()
                    .setDescription('')
                    .setImage(`${message.guild.iconURL()} `)
                return message.channel.send(sunucubilgi);
            }
        }
    });


}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 0
};

exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucu Resminin Linkini Atar.',
  usage: 'sunucuresmi'
};