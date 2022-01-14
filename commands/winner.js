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
  return }  
var Jimp = require("jimp");
  const Discord = require("discord.js");
  let img = Jimp.read(
      message.mentions.users.first()
        ? message.mentions.users.first().avatarURL()
        : message.author.avatarURL()
    ),
    moldura = Jimp.read(
      "https://cdn.discordapp.com/attachments/484692865985806346/487841969561796608/image0.png"
    );
  Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
      img = imgs[0];
    moldura.resize(720, 620);
    img.resize(720, 615);
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
      if (!err) message.channel.send(new Discord.MessageAttachment(buffer));
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
        if (!message.guild) {
          return }  
        var Jimp = require("jimp");
          const Discord = require("discord.js");
          let img = Jimp.read(
              message.mentions.users.first()
                ? message.mentions.users.first().avatarURL()
                : message.author.avatarURL()
            ),
            moldura = Jimp.read(
              "https://cdn.discordapp.com/attachments/484692865985806346/487841969561796608/image0.png"
            );
          Promise.all([img, moldura]).then(imgs => {
            let moldura = imgs[1],
              img = imgs[0];
            moldura.resize(720, 620);
            img.resize(720, 615);
            img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
              if (!err) message.channel.send(new Discord.MessageAttachment(buffer));
            });
          });
            }
            });

  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "winner",
  description: "atam",
  usage: "winner"
};