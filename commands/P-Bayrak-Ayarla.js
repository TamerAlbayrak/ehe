const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send(`:exclamation: Lütfen bayrağını seç. Örneğin: ${prefix}bayrak-ayarla :flag_tr:`);
  message.channel.send(":white_check_mark: Profil bayrağın başarıyla ``" + bayrak + "`` olarak ayarlandı!");
  db.set(`pbayrak_${message.author.id}`, bayrak);

} else {

  let bayrak = args.slice(0).join(" ");
  if (!bayrak) return message.channel.send(`:exclamation: Please choose your flag. Example: ${prefix}flag-set :flag_en:`);
  message.channel.send(":white_check_mark: Your profile flag has been successfully set to ``" + bayrak + "``");
  db.set(`pbayrak_${message.author.id}`, bayrak);

}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set-flag"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "bayrak-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};