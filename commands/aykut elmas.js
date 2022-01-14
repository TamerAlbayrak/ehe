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

  var sözler = [
   "Nasipte Varsa",
   "Hocam Aykut Uç Yiyo",
   "Yavaş La Gaç Tane Alıyon",
   "Oosman Gültekin Sen Misin?",
   "Ay have gat a vane pensıl",
   "Kudurdum.com bu kadar ?",
   "Ayağına Nazar Değmesin",
   "Çocuklar piknik için neler getirdiniz?",
   "Yirmi beş mi oldun öp bakem elimi",
   "Herkesin bi ayfonu bi benim yok",
   "ŞİRİN BABAYI SİLK",
    "Yes ay dozont",
    "Bamya yaptım oğlum.",
    "Osman seni çizdim he.",
    "Banağ para ver, banağ paraa veeerğ",
    "Ne demek kızın yaşı anneden büyük olamaz, bizim zamanımızda oluyordu.",
    "Pisuvara kim sıçtı?",
    "Sen yanlış yapmadın soru yanlışmış yeaww",
    "Yav oyun gitti niye çekiyon fişi.",
    "Yalnız çıkışta görüşürüz hocam hani böyle sınıf ortamında..."
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://media.discordapp.net/attachments/789023023918743562/803020375171923998/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020339122143272/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020844527517726/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020902891388959/unknown.png"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(`${görsel}`)
.setTitle("Aykut Elmas Diyor Ki:")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);

    }
  })
///////////////////////////
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

      var sözler = [
   "Nasipte Varsa",
   "Hocam Aykut Uç Yiyo",
   "Yavaş La Gaç Tane Alıyon",
   "Oosman Gültekin Sen Misin?",
   "Ay have gat a vane pensıl",
   "Kudurdum.com bu kadar ?",
   "Ayağına Nazar Değmesin",
   "Çocuklar piknik için neler getirdiniz?",
   "Yirmi beş mi oldun öp bakem elimi",
   "Herkesin bi ayfonu bi benim yok",
   "ŞİRİN BABAYI SİLK",
    "Yes ay dozont",
    "Bamya yaptım oğlum.",
    "Osman seni çizdim he.",
    "Banağ para ver, banağ paraa veeerğ",
    "Ne demek kızın yaşı anneden büyük olamaz, bizim zamanımızda oluyordu.",
    "Pisuvara kim sıçtı?",
    "Sen yanlış yapmadın soru yanlışmış yeaww",
    "Yav oyun gitti niye çekiyon fişi.",
    "Yalnız çıkışta görüşürüz hocam hani böyle sınıf ortamında..."
     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

     var resim = [
      "https://media.discordapp.net/attachments/789023023918743562/803020375171923998/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020339122143272/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020844527517726/unknown.png",
      "https://media.discordapp.net/attachments/789023023918743562/803020902891388959/unknown.png"
        ] 
        var görsel = resim[Math.floor(Math.random() * (resim.length))]  
///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(`${görsel}`)
.setTitle("Aykut Elmas Diyor Ki:")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
    }
        })
    }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["aykut-elmas"],
  permLevel: 0
};

exports.help = {
  name: "aykutelmas"
};