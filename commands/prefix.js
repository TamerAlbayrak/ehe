const Discord = require("discord.js"),
client = new Discord.Client(),
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
module.exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

    //made by. dcs & server support
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
 
//made by dcs & server support
  
  
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Omalısınız!**"))

  async function ayarla(veri) {
  db.set(`prefix_${message.guild.id}`, veri)
  }
  async function sıfırla() {
              const check = db.fetch(`prefix_${message.guild.id}`)
		 if(check == null) return message.channel.send("**Prefix Zaten Ayarlanmamış!**").then(x => x.delete({timeout: 5000}))
  db.delete(`prefix_${message.guild.id}`)
  message.channel.send(`**Prefix Başarıyla Sıfırlandı ve Ana Prefixe Olarak Ayarlandı: \`${ayarlar.prefix}\`**`)
    }
if(args[0] !== "sıfırla" && args[0] !== "ayarla") return  message.channel.send(`**Prefix Ayarlamak İçin: \`${prefix}prefix ayarla <yeni_prefix>\`\nPrefix Sıfırlamak İçin: \`${prefix}prefix sıfırla\`**`)
if(args[0] === "sıfırla") {
   await sıfırla()
  }  
if(args[0] === "ayarla") {
  if(!args[1]) return message.channel.send(`**Bir Prefix Belirtmen Gerek!**`).then(x => x.delete({timeout: 5000}))
  if(args[1].length > 10) return message.channel.send(`**Prefix En Fazla 10 Karakter İçerebilir!**`).then(x => x.delete({timeout: 5000}))
  if(args[1] == prefix) return message.channel.send(`**Şuanki Prefix Zaten Bu Prefix ile Aynı!**`)
  if(args[1] ===  "!") {
    message.channel.send(`**Prefix Başarıyla Sıfırlandı ve Ana Prefix Olarak Ayarlandı: \`${ayarlar.prefix}\`**`)
    db.delete(`prefix_${message.guild.id}`)
  } else {
 await ayarla(args[1])
   message.channel.send(`**Prefix Ayarlandı: \`${args[1]}\`**`)
  }
  }
} else {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To Use This Command, You Must Have 'Manage Messages' Authority!**"))
  async function ayarla(veri) {
    db.set(`prefix_${message.guild.id}`, veri)
    }
    async function sıfırla() {
                const check = db.fetch(`prefix_${message.guild.id}`)
       if(check == null) return message.channel.send("**Prefix Not Already Set!**").then(x => x.delete({timeout: 5000}))
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`**Prefix Successfully Reset and Set as Master Prefix \`${ayarlar.prefix}\`**`)
      }
  if(args[0] !== "reset" && args[0] !== "set") return  message.channel.send(`**To Configure Prefix:  \`${prefix}prefix set <new_prefix>\`\nTo Reset Prefix: \`${prefix}prefix reset\`**`)
  if(args[0] === "reset") {
     await sıfırla()
    }  
  if(args[0] === "set") {
    if(!args[1]) return message.channel.send(`**You Need To Specify A Prefix!**`).then(x => x.delete({timeout: 5000}))
    if(args[1].length > 10) return message.channel.send(`**Prefix Can Contain Up To 10 Characters!**`).then(x => x.delete({timeout: 5000}))
    if(args[1] == prefix) return message.channel.send(`**Current Prefix Is Already The Same As This Prefix!**`)
    if(args[1] ===  "!") {
      message.channel.send(`**Prefix Successfully Reset and Set as Master Prefix: \`${ayarlar.prefix}\`**`)
      db.delete(`prefix_${message.guild.id}`)
    } else {
   await ayarla(args[1])
     message.channel.send(`**Prefix Set: \`${args[1]}\`**`)
    }
    }
  };
}//made by. dcs & server support
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'prefix', 
  description: "Change the bot prefix.", 
  usage: 'prefix'

};//made by. dcs(code share) & server support     