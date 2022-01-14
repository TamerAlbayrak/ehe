const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      ":exclamation: Yaşını yazmalısın."
    );
  message.channel.send(
    ":white_check_mark: Yaşın ``" + yas + "`` olarak ayarlandı!"
  );
  db.set(`pyas_${message.author.id}`, yas);

} else {

  let yas = args.slice(0).join(" ");
  if (!yas)
    return message.channel.send(
      ":exclamation: You must write your age."
    );
  message.channel.send(
    ":white_check_mark: Your age is set to ``" + yas + "``"
  );
  db.set(`pyas_${message.author.id}`, yas);


}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set-age"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "yaş-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};
