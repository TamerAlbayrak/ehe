const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
	  
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
 
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Lütfen bir dil belirtiniz! Diller: `TR_tr`, `EN_us`__ \nBottaki Çevirilerin Hepsi Doğru Olmayabilir. "
      );
      return;
    }
    if (dil === "EN_us") {
      db.set(`dil_${message.guild.id}`, dil);
        message.channel.send(`__New language set to \`${dil}\`!__ \n Not all translations in bot may be correct.`);
    } else if (dil === "TR_tr") {
      db.set(`dil_${message.guild.id}`, dil);
        message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__ \nBottaki Çevirilerin Hepsi Doğru Olmayabilir`);
    } else {
      message.channel.send("__Hatalı dil! Diller: `TR_tr`, `EN_us`__");
      return;
    }
  } else {
	  
	  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))
let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Please specify a language! Languages: `TR_tr`, `EN_us`__ \nNot all translations in bot may be correct."
      );
      return;
    }
    if (dil === "EN_us") {
      db.set(`dil_${message.guild.id}`, dil);
        message.channel.send(`__New language set to \`${dil}\`!__ \nNot all translations in bot may be correct.`);
    } else if (dil === "TR_tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send(
        "__Incorrect language! Languages: `TR_tr`, `EN_us`__"
      );
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["language", "lang"],
  permLevel: 3
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};
