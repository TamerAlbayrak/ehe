const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let acod = ["ayarla", "aç", "ac"];
  let kapare = ["kapat", "sıfırla", "sifirla"];
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
  let aredembed = new Discord.MessageEmbed()
    .setAuthor("CapsLock Engelleme")
    .setColor("RED")
    .setFooter(
      `Komut ${message.author.username} tarafından kullanıldı.`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  if (acod.includes(args[0])) {
    if (!args[1]) {
      if (acikmi)
        return message.channel.send(
          aredembed.setDescription(
            `CapsLock Engelleme sitemi zaten açık bulunmakta!\nBir mesajdaki büyük harf oranı eğer mesajın belirttiğiniz yüzdelikten daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz \`${prefix}capsengel aç oran\` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz \`${prefix}capsengel sıfırla\` komutunu kullanabilirsiniz.`
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme")
          .setDescription(
            `CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın \`50%\` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz \`${prefix}capsengel aç oran\` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz \`${prefix}capsengel sıfırla\` komutunu kullanabilirsiniz.`
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
    } else {
      if (isNaN(args[1]))
        return message.channel.send(
          aredembed.setDescription(
            "Oran yalnızca bir **sayı** olmalıdır. (Oran 101 den küçük 0 dan büyük bir sayı olmalıdır!)"
          )
        );
      if (args[1] >= 101)
        return message.channel.send(
          aredembed.setDescription(
            "**Oran 101 den küçük**, 0 dan büyük bir sayı olmalıdır!"
          )
        );
      if (args[1] <= 0)
        return message.channel.send(
          aredembed.setDescription(
            "Oran 101 den küçük, **0 dan büyük bir sayı olmalıdır**!"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme")
          .setDescription(
           `CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın belirttiğin yüzdeden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz \`${prefix}capsengel aç oran\` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz \`${prefix}capsengel sıfırla\` komutunu kullanabilirsiniz.\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.`
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
    }
  } else if (kapare.includes(args[0])) {
    if (!acikmi)
      return message.channel.send(
        aredembed.setDescription(
          `CapsLock Engelleme sistemi zaten kapalı.\nEğer açmak isterseniz \`${prefix}capsengel aç oran\` yazabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.`
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("CapsLock Engelleme")
        .setDescription(
          `CapsLock Engelleme sistemi başarıyla kapatıldı!\nArtık mesajlardaki büyük harfler engellenmeyecek. \nEğer tekrar açmak isterseniz \`${prefix}capsengel aç oran\` komutunu kullanabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.`
        )
        .setFooter(
          `Komut ${message.author.username} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    );
    db.delete(`${message.guild.id}.capsengel`);
  } else {
    let acikkk;
    if (acikmi)
      acikkk = `${acikmi.yuzde}% olarak Açık**\nEğer kapatmak isterseniz \`${prefix}capsengel sıfırla\` yazabilirsiniz.`;
    let kodare = new Discord.MessageEmbed()
      .setAuthor("CapsLock Engelleme")
      .setColor("#728bd6")
      .setDescription(
        `CapsLock Engelleme sistemi şu anda **" +
          (acikkk
            ? acikkk
            : "Kapalı**\nEğer açmak isterseniz \`${prefix}capsengel aç\` yazabilirsiniz.` +
          ".")
      
      .setFooter(
        `Komut ${message.author.username} tarafından kullanıldı.`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(kodare)
  }
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let acod = ["set", "on"];
  let kapare = ["off", "reset"];
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
  let aredembed = new Discord.MessageEmbed()
    .setAuthor("CapsLock Blocking")
    .setColor("RED")
    .setFooter(
      `The command was used by ${message.author.username}.`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  if (acod.includes(args[0])) {
    if (!args[1]) {
      if (acikmi)
        return message.channel.send(
          aredembed.setDescription(
            `My CapsLock Blocking system is already on!\nIf the capitalization rate in a message is more than the percentage you specify, it will be blocked.\nIf you want to increase or decrease this rate \`${prefix}capsblocking on rate \` (The ratio must be a number less than 101 but greater than 0!)\nIf you want to turn off the CapsLock blocking system, you can use the \`${prefix}capsbloking off\` command.`
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Blocking")
          .setDescription(
            `CapsLock Blocking system successfully unlocked!\nIf the capitalization rate in a message is more than \`50%\` of the message, it will be blocked.\nIf you want to increase or decrease this rate \`${prefix}capsblocking on rate \` (The ratio must be a number less than 101 but greater than 0!)\nIf you want to turn off the CapsLock blocking system, you can use the \`${prefix}capsbloking off\` command.`
          )
          .setFooter(
            `The command was used by ${message.author.username}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
    } else {
      if (isNaN(args[1]))
        return message.channel.send(
          aredembed.setDescription(
            "The ratio must be a **number** only. (The ratio must be a number less than 101 and greater than 0!)"
          )
        );
      if (args[1] >= 101)
        return message.channel.send(
          aredembed.setDescription(
            "**The ratio must be less than 101**, greater than 0!"
          )
        );
      if (args[1] <= 0)
        return message.channel.send(
          aredembed.setDescription(
            "Ratio must be a number less than 101, **greater than 0!**"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Blocking")
          .setDescription(
           `CapsLock Blocking system successfully unlocked!\nIf the capitalization rate in a message is more than the percentage you specify, it will be blocked.\nIf you want to increase or decrease this rate \`${prefix}capsblocking on rate \` (The ratio must be a number less than 101 but greater than 0!)\nIf you want to turn off the CapsLock blocking system, you can use the \`${prefix}capsbloking off\` command. \nNote: If you don't type the rate it will be automatically set to 50%.`
          )
          .setFooter(
            `The command was used by ${message.author.username}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
    }
  } else if (kapare.includes(args[0])) {
    if (!acikmi)
      return message.channel.send(
        aredembed.setDescription(
          `CapsLock Blocking system is already turned off.\nIf you want to open it, you can type \`${prefix}capsblocking on rate\` (Ratio must be a number less than 101 but greater than 0!)\nNote: If you don't type the rate, it will be set to 50% automatically.`
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("CapsLock Blocking")
        .setDescription(
          `CapsLock Blocking system has been successfully shut down!\nCapital letters in messages will no longer be blocked. \nIf you want to open it again, you can use the command \`${prefix}capsblocking on rate\`. (Ratio must be a number less than 101 but greater than 0!)\nNote: If you don't type the rate, it will be set to 50% automatically.`
        )
        .setFooter(
          `The command was used by ${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    );
    db.delete(`${message.guild.id}.capsengel`);
  } else {
    let acikkk;
    if (acikmi)
      acikkk = `Opened at ${acikmi.yuzde}. If you want to turn it off, you can type \`${prefix}capsblocking off\`.`;
    let kodare = new Discord.MessageEmbed()
      .setAuthor("CapsLock Blocking")
      .setColor("#728bd6")
      .setDescription(
        `CapsLock Blocking system is now **" +
          (acikkk
            ? acikkk
            : "Kapalı**\nIf you want to open it, you can type \`${prefix}capsblocking on\`.`) +
          "."
      
      .setFooter(
        `The command was used by ${message.author.username}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(kodare)
  }

}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "buyukharfengelle",
    "caps-engelle",
    "capslockengelle",
    "capslock-engelle",
    "caps-engel",
    "capslock",
    "capslock-engelleme",
    "capsblocking"
  ],
  permLevel: 3,
  kategori: "sunucu"
};
exports.help = {
  name: "capsengel",
  description:
    "Eğer açılırsa bir mesajda belirttiğiniz %de kadar harf büyük yazılmışsa o mesaj silinir.",
  usage: "capsengel aç/sıfırla oran (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)"
};