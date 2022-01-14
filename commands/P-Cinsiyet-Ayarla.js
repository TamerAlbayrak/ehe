const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {


  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      ":exclamation: Lütfen cinsiyetini belirtmelisin. Unutma sadece erkek, kız veya yok yazabilirsin. Not: Baş harflerini büyük yazmamalısın.)"
    );
  message.channel.send(":white_check_mark: Cinsiyetin başarıyla ``" + cinsiyet + "`` olarak ayarlandı!");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
    } else {
  let cinsiyet = args.slice(0).join(" ");
  if (!cinsiyet)
    return message.channel.send(
      ":exclamation: Please indicate your gender. Remember, you can only write boy, girl or none. Note: You should not capitalize initials.)"
    );
  message.channel.send(":white_check_mark: Your gender has been successfully set to ``" + cinsiyet + "``");
  db.set(`pcinsiyet_${message.author.id}`, cinsiyet);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set-gender"],
  permLevel: 0,
  kategori:"Profil"
};
 
exports.help = {
  name: "cinsiyet-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};