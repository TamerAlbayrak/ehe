const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const a = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
    if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Premium Üye olmalısınız!"))
		
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {

        var kullanıcı = message.author;
        var sebep = args.slice(0).join("  ");
        if (!sebep) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`AFK Moduna Geçmek İçin Bir Sebep Belirtmelisin!`))
        let dcs15 = new Discord.MessageEmbed()
            .setTimestamp()
            .setDescription(`AFK Moduna Girmek İçin Onay Veriyor musun?`)
            .setColor("RED");
        message.channel.send(dcs15).then(sunucu => {
            sunucu.react("✅").then(() => sunucu.react("❌"))

            let yesFilter = (reaction, user) =>
                reaction.emoji.name === "✅" && user.id === message.author.id;
            let noFilter = (reaction, user) =>
                reaction.emoji.name === "❌" && user.id === message.author.id;

            let yes = sunucu.createReactionCollector(yesFilter, { time: 0 });
            let no = sunucu.createReactionCollector(noFilter, { time: 0 });

            yes.on("collect", r => {
                message.member.setNickname(`[AFK] ${message.member.displayName}`)
                db.set(`afktag_${message.author.id}`, message.member.displayName)
                let dcs16 = new Discord.MessageEmbed()
                    .setTitle(`✅ İşlem Başarılı!`)
                    .setDescription(`AFK Moduna Girdiniz!`)
                    .setColor("GREEN")
                message.channel.send(dcs16)
                });

          });
            db.set(`afk_${kullanıcı.id}`, sebep);
            db.set(`afk_süre_${kullanıcı.id}`, Date.now());
            no.on("collect", r => {
                db.delete(`afk_${kullanıcı.id}`, sebep);
                db.delete(`afk_süre_${kullanıcı.id}`, Date.now());
                message.channel.send(`İptal Edildi!`)
            });
        
    } else {

        var kullanıcı = message.author;
        var sebep = args.slice(0).join("  ");
        if (!sebep) return message.channel.send(new Discord.MessageEmbed()
            .setTitle(`Warning!`)
            .setDescription(`You must provide a reason to switch to AFK Mode!`))
        let dcs15 = new Discord.MessageEmbed()
            .setDescription(`Do you confirm entering AFK Mode?`)
            .setColor("RED");
        message.channel.send(dcs15).then(sunucu => {
            sunucu.react("✅").then(() => sunucu.react("❌"))
            let yesFilter = (reaction, user) =>
                reaction.emoji.name === "✅" && user.id === message.author.id;
            let noFilter = (reaction, user) =>
                reaction.emoji.name === "❌" && user.id === message.author.id;

            let yes = sunucu.createReactionCollector(yesFilter, { time: 0 });
            let no = sunucu.createReactionCollector(noFilter, { time: 0 });

            yes.on("collect", r => {
                message.member.setNickname(`[AFK] ${message.member.displayName}`)
                db.set(`afktag_${message.author.id}`, message.member.displayName)
                let dcs16 = new Discord.MessageEmbed()
                    .setTitle(`✅ Successful!`)
                    .setDescription(`You Entered AFK Mode!`)
                    .setColor("GREEN")
                message.channel.send(dcs16)
                });

            });
            db.set(`afk_${kullanıcı.id}`, sebep);
            db.set(`afk_süre_${kullanıcı.id}`, Date.now());
            no.on("collect", r => {
                db.delete(`afk_${kullanıcı.id}`, sebep);
                db.delete(`afk_süre_${kullanıcı.id}`, Date.now());
                message.channel.send(`İptal Edildi!`)
            });
        

    } };
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "afk"
};