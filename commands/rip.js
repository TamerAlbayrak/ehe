const Discord = require("discord.js");
var Jimp = require('jimp');
const db = require("quick.db");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);


exports.run = async (client, message, args) => {
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
            var user = message.mentions.users.first() || message.author;
            if (!message.guild) user = message.author;
            Jimp.read('https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_960_720.png', (err, image) => {
                image.resize(310, 325)
                //image.greyscale()
                //image.gaussian(3)
                Jimp.read(user.avatarURL(), (err, avatar) => {
                    avatar.resize(100, 100)
                    image.composite(avatar, 95, 159).write(`./img/rip/${client.user.id}-${user.id}.png`);
                    setTimeout(function () {
                        message.channel.send(new Discord.MessageAttachment(`./img/rip/${client.user.id}-${user.id}.png`));
                    }, 1000);
                });

            });
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
            var user = message.mentions.users.first() || message.author;
            if (!message.guild) user = message.author;
            Jimp.read('https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_960_720.png', (err, image) => {
                image.resize(310, 325)
                //image.greyscale()
                //image.gaussian(3)
                Jimp.read(user.avatarURL(), (err, avatar) => {
                    avatar.resize(100, 100)
                    image.composite(avatar, 95, 159).write(`./img/rip/${client.user.id}-${user.id}.png`);
                    setTimeout(function () {
                        message.channel.send(new Discord.MessageAttachment(`./img/rip/${client.user.id}-${user.id}.png`));
                    }, 1000);
                });

            });
        };
    });
};
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['ölü'],
 permLevel: 0
};

exports.help = {
 name: 'rip',
 description: 'Profil fotoğrafınıza RIP efekti ekler.',
 usage: 'rip'
};