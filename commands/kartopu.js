const Discord = require('discord.js');
const db = require("quick.db");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);


exports.run = async (client, msg, args) => {
    let kontrol = await db.fetch(`dil_${msg.guild.id}`);
let prefix = (await db.fetch(`prefix_${msg.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

    dbl.hasVoted(msg.author.id).then(voted => {
        if (!voted) {
            msg.channel.send(new Discord.MessageEmbed()
                .setTitle("UYARI")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("Bu Komutu Kullanabilmek icin Botumuza Oy Vermelisiniz!")
                .addField("Oy Vermek icin:", `[Bana Tikla!](https://top.gg/bot/693134673450106890/vote)`)
            )

        } else {
            let kartopu = args.slice(0).join(' ');
            if (kartopu.length < 1) {
                return msg.reply('Kime kartopu atmak istersin ya isim yaz yada etiketle!');
            } else {
                msg.channel.send('<=====     :snowflake:')
                    .then(nmsg => nmsg.edit('<=====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<===   :snowflake:'))
                    .then(nmsg => nmsg.edit('<===   :snowflake:'))
                    .then(nmsg => nmsg.edit('<==  :snowflake:'))
                    .then(nmsg => nmsg.edit('<==  :snowflake:'))
                    .then(nmsg => nmsg.edit('<= :snowflake:'))
                    .then(nmsg => nmsg.edit('<= :snowflake:'))
                    .then(nmsg => nmsg.edit(':snowflake:'))
                    .then(nmsg => nmsg.edit(':snowflake:'))
                    .then(nmsg => nmsg.edit(`${kartopu} artık :snowman: oldu.`));


            }
        }
    });
} else {
    dbl.hasVoted(msg.author.id).then(voted => {
        if (!voted) {
            msg.channel.send(new Discord.MessageEmbed()
                .setTitle("Warning")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("To Use This Command You Must Vote Our Bot!")
                .addField("To vote:", `[Click Me!](https://top.gg/bot/693134673450106890/vote)`)
            )
    
        } else {
            let kartopu = args.slice(0).join(' ');
            if (kartopu.length < 1) {
                return msg.reply('To whom do you want to throw snowballs, either write a name or tag it!');
            } else {
                msg.channel.send('<=====     :snowflake:')
                    .then(nmsg => nmsg.edit('<=====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<====    :snowflake:'))
                    .then(nmsg => nmsg.edit('<===   :snowflake:'))
                    .then(nmsg => nmsg.edit('<===   :snowflake:'))
                    .then(nmsg => nmsg.edit('<==  :snowflake:'))
                    .then(nmsg => nmsg.edit('<==  :snowflake:'))
                    .then(nmsg => nmsg.edit('<= :snowflake:'))
                    .then(nmsg => nmsg.edit('<= :snowflake:'))
                    .then(nmsg => nmsg.edit(':snowflake:'))
                    .then(nmsg => nmsg.edit(':snowflake:'))
                    .then(nmsg => nmsg.edit(`${kartopu} leftover: snowman: happened.`));


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
  name: 'kartopu',
  description: '',
  usage: ''
}; 