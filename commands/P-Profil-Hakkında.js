const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = ":exclamation: İsim ayarlanmamış!";
  else isimYazi = `:diamond_shape_with_a_dot_inside: ${isim}`;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = ":exclamation: Soy isim ayarlanmamış!";
  else soyisimYazi = `:diamond_shape_with_a_dot_inside: ${soyisim}`;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = ":exclamation: Cinsiyet ayarlanmamış!";
  if (cinsiyet == "kız") csYazi = ":woman: Kız";
  if (cinsiyet == "erkek") csYazi = ":man: Erkek";
  if (cinsiyet == "yok") csYazi = ":exclamation: Belirtmek istemiyor.";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = ":exclamation: Yaş ayarlanmamış!";
  else yasYazi = `:cyclone: ${yas}`;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = `:exclamation: Bayrak girilmemiş.`;
  else bYazi = `:flag_white: ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı kullanıcının profili`)
    .setThumbnail(user.avatarURL())
    .setColor("RANDOM")
    .addField("İsim", isimYazi, true)
    .addField("Soy isim", soyisimYazi, true)
    .addField("Yaş", yasYazi, true)
    .addField("Cinsiyet", csYazi, true)
    .addField("Bayrak", bYazi, true);
  message.channel.send(embed);

} else {

  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Bots don't have profiles!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = ":exclamation: Name not set!";
  else isimYazi = `:diamond_shape_with_a_dot_inside: ${isim}`;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = ":exclamation: Last name not set!";
  else soyisimYazi = `:diamond_shape_with_a_dot_inside: ${soyisim}`;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = ":exclamation: Gerder not set!";
  if (cinsiyet == "girl") csYazi = ":woman: Girl";
  if (cinsiyet == "boy") csYazi = ":man: Boy";
  if (cinsiyet == "none") csYazi = ":exclamation: Does not want to specify";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = ":exclamation: Age not set!";
  else yasYazi = `:cyclone: ${yas}`;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = `:exclamation: Flag not set!.`;
  else bYazi = `:flag_white: ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}'s profile`)
    .setThumbnail(user.avatarURL())
    .setColor("RANDOM")
    .addField("Name", isimYazi, true)
    .addField("Last name", soyisimYazi, true)
    .addField("Age", yasYazi, true)
    .addField("Gerder", csYazi, true)
    .addField("Age", bYazi, true);
  message.channel.send(embed);

}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profile"],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};