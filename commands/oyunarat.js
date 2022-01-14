const Discord = require("discord.js");
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
            if (!message.guild) {
                return
            }

            var bos = "Aranıyor..."

            let store = args.slice(0).join('+');

            let link = `https://play.google.com/store/search?q=` + store;
            if (!store) return message.channel.send("Hangi oyunu aratmak istersin. **Kullanımı:** `!playstore online kafa topu`")
            if (!link) return message.channel.send("Oyun bulunamadı.")
            let embed = new Discord.MessageEmbed()

                .setColor('8e0505')
                .setTimestamp()
                .addField('PlayStore', `${bos}`)
                .addField("Oyun ismi:", `${args.slice(0).join(' ')}`)
                .addField('Bulunan link:', `${link}`)
                .setThumbnail('https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png')
                .setFooter("PlayStore", message.author.avatarURL());

            message.channel.send(embed);
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
                return
            }

            var bos = "Searching..."

            let store = args.slice(0).join('+');

            let link = `https://play.google.com/store/search?q=` + store;
            if (!store) return message.channel.send("Which game do you want to search for? **Use of:** `!playstore online kafa topu`")
            if (!link) return message.channel.send("The game was not found.")
            let embed = new Discord.MessageEmbed()

                .setColor('8e0505')
                .setTimestamp()
                .addField('PlayStore', `${bos}`)
                .addField("Game name:", `${args.slice(0).join(' ')}`)
                .addField('Link found:', `${link}`)
                .setThumbnail('https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png')
                .setFooter("PlayStore", message.author.avatarURL());

            message.channel.send(embed);
        }
    });
};
}

exports.conf =
{
  aliases: []
}

exports.help =
{
  name: "playstore",
  description: "playstorede oyun aratmayı sağlar.",
  usage: "playstore"
}