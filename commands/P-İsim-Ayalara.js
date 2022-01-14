const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send(":exclamation: İsmini yazmalısın.");
  message.channel.send(":white_check_mark: İsmin başarıyla ``" + isim + "`` olarak ayarlandı!");
  db.set(`pisim_${message.author.id}`, isim);

} else {

  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send(":exclamation: You must write your name.");
  message.channel.send(":white_check_mark: Your name has been successfully set to ``" + isim + "``");
  db.set(`pisim_${message.author.id}`, isim);

}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set-name"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "isim-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};