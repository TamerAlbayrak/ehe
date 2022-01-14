const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send(":exclamation: Soy ismini yazmalısın.");
  message.channel.send(":white_check_mark: Soy ismin ``" + soyisim + "`` olarak ayarlandı!");
  db.set(`psoyisim_${message.author.id}`, soyisim);

} else {

  let soyisim = args.slice(0).join(" ");
  if (!soyisim) return message.channel.send(":exclamation: You must write your last name.");
  message.channel.send(":white_check_mark: Your last name is set to ``" + soyisim + "``");
  db.set(`psoyisim_${message.author.id}`, soyisim);

}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set-last-name"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "soy-isim-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};