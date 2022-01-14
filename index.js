const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("./src/configs/settings.json");
const chalk = require('chalk');
const moment = require('moment');
const database = require("croxydb");
var Jimp = require('jimp');
const { Client, Util, Collection} = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const { promisify } = require("util");
const express = require('express');
require('./util/eventLoader.js')(client);
const ms1 = require("parse-ms");
const path = require('path');
const snekfetch = require('snekfetch');
const ms = require('ms');
const url = (ayarlar.mongoURL);
const RegisterSlashCommand = require('./util/RegisterSlashCommands.js');
const tags = require('common-tags');
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4',  client);
let diskStat = require("disk-stat")
const netStat = require('net-stat');
const Topgg = require('@top-gg/sdk')
const disbut = require('discord-buttons');
disbut(client);

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();

// Initializing the project
require("./handler")




//var raw = diskStat.raw();
var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

// Optional events
dbl.on('posted', () => {
  console.log(`Dbl Verileri Aktarıldı...`);
})

dbl.on('error', e => {
 console.log(`Hata! ${e}`);
})


process.on('unhandledRejection', error => {
    console.error('API Hatası:', error);
  });


  client.on('error', error => {
    console.error('WebSocket bir hatayla karşılaştı:', error);
});



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`Komutlar ${files.length} Yükleniyor`);
  files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Taxperia: ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
      });
  });

});


client.reload = command => {
  return new Promise((resolve, reject) => {
      try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
              if (cmd === command) client.aliases.delete(alias);
          });
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
              client.aliases.set(alias, cmd.help.name);
          });
          resolve();
      } catch (e) {
          reject(e);
      }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
      try {
          let cmd = require(`./komutlar/${command}`);
          client.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
              client.aliases.set(alias, cmd.help.name);
          });
          resolve();
      } catch (e) {
          reject(e);
      }
  });
};



client.unload = command => {
  return new Promise((resolve, reject) => {
      try {
          delete require.cache[require.resolve(`./komutlar/${command}`)];
          let cmd = require(`./komutlar/${command}`);
          client.commands.delete(command);
          client.aliases.forEach((cmd, alias) => {
              if (cmd === command) client.aliases.delete(alias);
          });
          resolve();
      } catch (e) {
          reject(e);
      }
  });
};



client.elevation = message => {
  if (!message.guild) {
      return;
  }

  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 5; 
if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;	
if (message.member.hasPermission("MANAGE_NICKNAMES")) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});








var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });




client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});





client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});


client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfMute
) {
newState.setSelfMute(true);
}
});




////////////////////////////////////capslock
function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
} 

client.on('message', async(message) => {
if (!message.guild) return
let acikmi = await db.fetch(`${message.guild.id}.capsengel`)
if (!acikmi) return
if (message.author.bot) return
if (message.member.hasPermission("MANAGE_MESSAGES")) return
let matched = message.content.replace(/[^A-Z]/g, "").length
let yuzde = percentage(matched, message.content.length)
if (Math.round(yuzde) > acikmi.yuzde) {
 message.delete()
 message.author.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock Engelleme Sistemi").setDescription("**Uyarı! "+message.guild.name+" sunucusunda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi."))
 message.channel.send(new Discord.MessageEmbed().setColor("RED").setTimestamp().setFooter(`${message.guild.name}`,message.guild.iconURL({dynamic:true})).setAuthor("CapsLock Engelleme Sistemi",message.author.displayAvatarURL({dynamic:true})).setDescription(message.author.username+" - "+(message.member.nickname ? `${message.member.nickname} - ${message.author.id}` : message.author.id)+"\n**Uyarı!  Bu sunucuda büyük harfle yazma engeli bulunmaktadır!**\nBu sebepten göndermiş olduğunuz mesaj silindi.")).then(msg=>msg.delete({timeout:3000}))
}else{return}
})




//////////////////////////////////reklamkick

client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member; //DCS EKİBİ
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacak`)
                        .setTimestamp()
                    message.channel.send(uyari) //DCS EKİBİ
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.members.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});



///////////////////////////////////otobotmesajsilici

client.on("message", async msg => {
    let i = db.has(`otobsilici_${msg.channel.id+msg.guild.id}`)
       if (i == true) {   
              let kanal = db.fetch(`otobsilici_${msg.channel.id+msg.guild.id}`)

  if (msg.channel.id != kanal.id) {
  if (msg.content.length > 0) {

    if(msg.author.bot === true){
      x => x.delete({timeout: 5000}).then(
      
      )
    }
  }
          }
        }
})



          
///////////////////////////////////gold

client.on("message", async msg => {  
const goldüyetext = new Discord.MessageEmbed()
.setDescription(`**Gold Üyemiz Aramıza Katıldı! Hoşgeldin.**`)
.setColor("#c987ff")
let zamanasimi = 30000000
let goldlar = await db.fetch(`gold${msg.author.id}`)
let goldb = await db.fetch(`goldsure${msg.author.id}`);
if (goldlar == 'gold') {  
if (goldb !== null && zamanasimi - (Date.now() - goldb) > 0) {
let time = ms(zamanasimi - (Date.now() - goldb)); } else {
if(msg.author.bot) return;   
if (msg.content.length > 1) {
db.set(`goldsure${msg.author.id}`, Date.now());
msg.channel.send(goldüyetext).then(x => x.delete({timeout: 5000}))}}}})

////////////////////////////////////admin

client.on("message", async msg => {  
const admintext = new Discord.MessageEmbed()
.setDescription(`**Açılın Bir Bot Sahibi Burda! Hoşgeldiniz Efendim!**`)
.setColor("#c987ff")
let zamanasimi = 30000000
let adminler = await db.fetch(`admin${msg.author.id}`)
let adminb = await db.fetch(`adminsure${msg.author.id}`);
if (adminler == 'admin') {  
if (adminb !== null && zamanasimi - (Date.now() - adminb) > 0) {
let time = ms(zamanasimi - (Date.now() - adminb)); } else {
if(msg.author.bot) return;   
if (msg.content.length > 1) {
db.set(`adminsure${msg.author.id}`, Date.now());
msg.channel.send(admintext).then(x => x.delete({timeout: 5000}))}}}})


//////////////////////////////////otorol

client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`otok_${member.guild.id}`)  
let rol = await db.fetch(`otorol_${member.guild.id}`)   
let mesaj =  db.fetch(`otomesaj_${member.guild.id}`)  
if(!kanal) return

if(!mesaj) {
  
  client.channels.cache.get(kanal).send('Otomatik Rol Verildi Seninle Beraber `'+member.guild.memberCount+'` Kişiyiz! Hoşgeldin! `'+member.user.username+'`')
member.roles.add(rol)
  return
} //dcs ekibi

if(mesaj) {
  var mesajs = await db.fetch(`otomesaj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.cache.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.cache.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`)
  member.roles.add(rol)
  client.channels.cache.get(kanal).send(mesajs)

}  
  
});



///////////////////sağtıkkick

client.on('guildMemberRemove', async (member) => {
const data = require('quick.db')

const da = await data.fetch(`sağ.tık.kick.${member.guild.id}`)
if(!da) return;
const kanal_id = await data.fetch(`sağ.tık.kick.kanal.${member.guild.id}`)
let kanal = client.channels.cache.get(kanal_id)

let logs = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'});
if(logs.entries.first().executor.bot) return;
let kişi = member.guild.members.cache.get(logs.entries.first().executor.id)
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id) })

const emb = new Discord.MessageEmbed()
.setAuthor(kişi.user.username, kişi.user.avatarURL())
.setFooter(`${client.user.username}`)
.setTimestamp()

kanal.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
member.guild.owner.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
console.log('')
})// codare

/



//////////////////////////////////ototag

client.on("guildMemberAdd", async member => {
let kontrol = await db.fetch(`ototag_${member.guild.id}`)
if(!kontrol) return
if (member.bot === true) return;

 var sonuc = await db.fetch(`ototag_${member.guild.id}`).replace("uye", `${member.user.username}`) 
 member.setNickname(sonuc);
 
 }) //dcs ekibi



//////////////////////////////////antiraid

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`antiraidK_${member.guild.id}`);
  if (!kanal) return;
      const gözelkanal = client.channels.cache.get(kanal) 
      if (!gözelkanal) return
  if (member.user.bot == true) {
  if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
  gözelkanal.send("**"+member.user.username + "** adlı bota bir yetkili izin verdi eğer kaldırmak istiyorsanız **!bot-izni-kaldır botunid**.")
  } else {
  gözelkanal.send("**" + member.user.username + "** adlı botu güvenlik amacı ile uzaklaştırdım. Tekrar geldiğinde uzaklaştırılmasını istemiyorsanız **!bot-izni-ver botunid**")
member.ban()
}
  }
});



	

//////////////////////////////////afk

client.on("message", async message => {
  const ms = require("parse-ms");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let zaman = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.member.setNickname(db.fetch(`afktag_${message.author.id}`))
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_cikis = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${message.author.id}>\`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniye** , **AFK Modundaydın!**`)
    message.channel.send(afk_cikis).then(x => x.delete({timeout: 5000}))}
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const afk_cikis = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${message.author.id}>\`${zaman.hours}\` **hours**  \`${zaman.minutes}\` **minutes** \`${zaman.seconds}\` **second(s)** , **You were in AFK Mode!**`)
    message.channel.send(afk_cikis).then(x => x.delete({timeout: 5000}))}
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.fetch(`afk_${kullanıcı.id}`);

  if (sebep) {
    let süre = await db.fetch(`afk_süre_${kullanıcı.id}`);
    let zaman = ms(Date.now() - süre);
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_uyarı = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${kullanıcı.id}> adlı kullanıcı \`${sebep}\` sebebiyle; \`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniyedir AFK!**`)
    message.reply(afk_uyarı).then(x => x.delete({timeout: 5000}))}
        if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const afk_uyarı = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setDescription(`<@${kullanıcı.id}> user \`${sebep}\` because; \`${zaman.hours}\` **hours**  \`${zaman.minutes}\` **minutes** \`${zaman.seconds}\` **second(s) AFK!**`)
    message.reply(afk_uyarı).then(x => x.delete({timeout: 5000}))}
  }
});


///////////////////////////////////cezalırol

  client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`kanal_${member.guild.id}`)
  let rol = await db.fetch(`rol_${member.guild.id}`)
  let security = await db.fetch(`koruma_${member.guild.id}`)
  let user = client.users.cache.get(member.id);

  if (security == 'kapali') return;
  if (security == 'acik') {

  const zaman =  new Date().getTime() - user.createdAt.getTime()
  
  if (zaman < 259200000) { 
  
  client.channels.cache.get(kanal).send(`${member} isimli kullanıcı fake şüphesi ile karantinaya alındı!`)
  member.send("Fake üye olduğun için seni karantinaya aldım!").catch(() => console.log(`DM Kapalı.`))
  member.roles.add(rol)
  
  }
}
})  


//////////////////////////////////sa as

client.on("message", async message => {
const laurysas = message.content.toLocaleLowerCase();

  if (
    laurysas === "selam" ||
    laurysas === "sa" ||
    laurysas === "selamün aleyküm" ||
    laurysas === "selamun aleyküm" ||
    laurysas === "slm" ||
    laurysas === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const laurysaas = new Discord.MessageEmbed()
     .setDescription(`**Aleyküm Selam, Hoş Geldin Dostum**`)
     .setColor("RANDOM")
      
    return message.channel.send(laurysaas)
    }
  }
});



////////////////////////etiketprefix
client.on("message", async message => {
  let pref = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let dil = await db.fetch(`dil_${message.guild.id}`);
  if (message.content === "<@!693134673450106890>") {
    if (dil == "TR_tr") {
      message.channel.send(
        `Prefixim: \`${pref}\`\nEğer yardım istiyorsan destek sunucumuza gelebilirsin.`
      );
    } else {
      message.channel.send(
        `My prefix is: \`${pref}\`\nIf you want to get help;`
      );
    }
  } else {
    return;
  }
});

////////////////güvwnlik

client.on("guildMemberAdd", async member => {
  let user = member.guild.members.cache.get(member.id);

  let kanal = await db.fetch(`güvenlik_${member.guild.id}`);
  let d = await db.fetch(`dil_${member.guild.id}`);

  if (!kanal) return;
  if (d == "TR_tr") {
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "15 günden sonra oluşturulmuş!";
    if (kurulus < 1296000000) kontrol = "15 günden önce oluşturulmuş!";
    if (kontrol == "15 günden sonra oluşturulmuş!") {
      const embed = new Discord.MessageEmbed().setDescription(
        `${member} sunucuya katıldı! Hesabı; ${kontrol}`
      );
      client.channels.cache.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikalınacak_${member.guild.id}`);
      let rol2 = await db.fetch(`güvenlikverilecek_${member.guild.id}`);
      if (!rol1) {
        if (!rol2) {
          return;
        } else {
          member.roles.add(rol2);
          return;
        }
      } else {
        member.roles.remove(rol1);
        if (!rol2) {
          return;
        } else {
          member.roles.add(rol2);
          return;
        }
      }
    } else {
      const embed = new Discord.MessageEmbed().setDescription(
        `${member} sunucuya katıldı! Hesabı; ${kontrol}`
      );
      client.channels.cache.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikfake_${member.guild.id}`);
      if (!rol1) return;
      else {
        member.roles.add(rol1);
      }
    }
  } else {
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "Created after 15 days!";
    if (kurulus < 1296000000) kontrol = "Created before 15 days!";
    if (kontrol == "Created after 15 days!") {
      const embed = new Discord.MessageEmbed().setDescription(
        `${member} has joined the server! Account; ${kontrol}`
      );
      client.channels.cache.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikalınacak_${member.guild.id}`);
      let rol2 = await db.fetch(`güvenlikverilecek_${member.guild.id}`);
      if (!rol1) {
        if (!rol2) {
          return;
        } else {
          member.roles.add(rol2);
          return;
        }
      } else {
        member.roles.remove(rol1);
        if (!rol2) {
          return;
        } else {
          member.roles.add(rol2);
          return;
        }
      }
    } else {
      const embed = new Discord.MessageEmbed().setDescription(
        `${member} has joined the server! Account; ${kontrol}`
      );
      client.channels.cache.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikfake_${member.guild.id}`);
      if (!rol1) return;
      else {
        member.roles.add(rol1);
      }
    }
  }
});

///////////////////////////reklamisimban

client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.members.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı.`, 
        }) 
    } 
  } 
//lrowsxrd
});


  


////////////

client.on("guildBanAdd", async (guild, user) => {
  let kontrol = await db.fetch(`dil_${guild.id}`);
  let kanal = await db.fetch(`bank_${guild.id}`);
  let rol = await db.fetch(`banrol_${guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    if (!rol) {
      guild.members.unban(user.id);
      guild.members.cache.get(entry.executor.id).kick();
      const embed = new Discord.MessageEmbed()
        .setTitle(`Biri Yasaklandı!`)
        .setColor("BLACK")
        .addField(`Yasaklayan`, entry.executor.tag)
        .addField(`Yasaklanan Kişi`, user.name)
        .addField(
          `Sonuç`,
          `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
        );
      client.channels.cache.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.cache.has(rol)) {
        let limito = await db.fetch(`limido_${entry.executor.id}`);
        let slimito = await db.fetch(`slimido_${guild.id}`);
        if (slimito == limito || slimito > limito) {
          db.delete(`limido_${entry.executor.id}`);
          guild.members.unban(user.id);
          guild.members.cache.get(entry.executor.id).kick();
          const embed = new Discord.MessageEmbed()
            .setTitle(`Biri Yasaklandı!`)
            .setColor("BLACK")
            .addField(`Yasaklayan`, entry.executor.tag)
            .addField(`Yasaklanan Kişi`, user.name)
            .addField(
              `Sonuç`,
              `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!\nNOT: LİMİTİ AŞTI!`
            );
          client.channels.cache.get(kanal).send(embed);
        } else {
          db.add(`limido_${entry.executor.id}`, +1);
          const embed = new Discord.MessageEmbed()
            .setTitle(`Biri Yasaklandı!`)
            .setColor("BLACK")
            .addField(`Yasaklayan`, entry.executor.tag)
            .addField(`Yasaklanan Kişi`, user.name)
            .addField(
              `Sonuç`,
              `Yasaklayan kişi ${limito}/${slimito} sınırına ulaştı!`
            );
          client.channels.cache.get(kanal).send(embed);
        }
      } else {
        guild.members.unban(user.id);
        guild.members.cache.get(entry.executor.id).kick();
        const embed = new Discord.MessageEmbed()
          .setTitle(`Biri Yasaklandı!`)
          .setColor("BLACK")
          .addField(`Yasaklayan`, entry.executor.tag)
          .addField(`Yasaklanan Kişi`, user.name)
          .addField(
            `Sonuç`,
            `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
          );
        client.channels.cache.get(kanal).send(embed);
      }
    }
  }
});

  ///////////////////////////////////////

////botdm
client.on("message", msg => {
var dm = client.channels.cache.get("768525937879810068")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});

////seslkulaklık

client.on('voiceStateUpdate', async (___, newState) => {

  if (
    newState.member.user.bot &&
    newState.channelID &&
    newState.member.user.id == client.user.id &&
    !newState.selfDeaf
  ) {
    newState.setSelfDeaf(true);
  }
});


///küfür engel 

client.on('message', async msg => {
const db = new require('quick.db');
let engin = db.fetch(`küfürengellog_${msg.guild.id}`)
let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`)
let enginar = db.fetch(`küfürengel_${msg.guild.id}`)
if(enginar === "aktif") {
const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq", "siktir"];
if (kufurler.some(word => msg.content.includes(word))) {
  try {
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          const embed = new Discord.MessageEmbed()
          .setTitle('Bir küfür yakaladım!')
          .setDescription(`<@${msg.author.id}> adlı kullanıcı küfürlü kelime kullandı! \n Kullanıcının ettiği küfür silindi!`)
          client.channels.cache.get(engin).send(embed)
          return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
 
        }              
      } 
      catch(err) {
        console.log(err);
      }
}
}
else return;
});

////reklam

client.on('message', async msg => {
  const db = new require('quick.db')
  let engin = db.fetch(`reklamengellog_${msg.guild.id}`)
  let enginn = db.fetch(`reklamengelmesaj_${msg.guild.id}`)
  let enginar = db.fetch(`reklamengel_${msg.guild.id}`)
  if(enginar === "aktif") {
  const kufurler = ["https://", "www.", "http://", "http", "https", ".org", ".com", ".gg", ".biz", ".net", ".web", ".edu", ".pol.tr", ".info", ".co"];
  if (kufurler.some(word => msg.content.includes(word))) {
    try {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
            msg.delete();
            const embed = new Discord.MessageEmbed()
            .setTitle('Bir reklam yakaladım!')
            .setDescription(`<@${msg.author.id}> adlı kullanıcı reklam yaptı! \n Kullanıcının ettiği reklam silindi!`)
            client.channels.cache.get(engin).send(embed)
            return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
   
          }              
        } 
        catch(err) {
          console.log(err);
        }
  }
  }
  else return;
  });

/////seviye
client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on('message', async message => {
    if (!message.guild || message.author.bot) return;
    // XP
    exp(message);
function exp(message) {
    if (!client.cooldown.has(`${message.author.id}`) || (Date.now() - client.cooldown.get(`${message.author.id}`) > client.config.cooldown)) {
        let exp = client.db.add(`exp_${message.author.id}`, 1);
        let level = Math.floor(0.3 * Math.sqrt(exp));
        let lvl = client.db.get(`level_${message.author.id}`) || client.db.set(`level_${message.author.id}`,1);;
        if (level > lvl) {
            let newLevel = client.db.set(`level_${message.author.id}`,level);

        }
        client.cooldown.set(`${message.author.id}`, Date.now());
    }
}
});

/////sürelirol

setInterval(async() => {
    var mem = [];
    client.guilds.cache.forEach(async guild => {
    guild.members.cache.forEach(async member => {
    let m = await db.fetch(`kullanıcı${guild.id}_${member.id}`)
    if(m){
    let time = await db.fetch(`rolint${guild.id}_${member.id}`)
    if(!time) return;
    let sures = await db.fetch(`rolsure${guild.id}_${member.id}`)
    let timing = Date.now() - time
    let rl = await db.fetch(`roliste_${guild.id}_${member.id}`)
    
    if(timing >= sures) {
      guild.members.cache.find(x => x.id === member.id).roles.remove(rl)
      let logdb = await db.fetch(`rollog${guild.id}`)
      let log = guild.channels.cache.get(logdb)
      log.send(new Discord.MessageEmbed()
.setDescription(`${member} kullanıcısının \`${moment.duration(sures).format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)}\` Süre Boyunca <@&${db.fetch(`roliste_${guild.id}_${member.id}`)}> Sahip Olduğu Rol Süresi Bittiği İçin Alındı!`))
      db.delete(`kullanıcı${guild.id}_${member.id}`)
      db.delete(`rolsure${guild.id}_${member.id}`)
      db.delete(`rolint${guild.id}_${member.id}`)
    }
  }
 })
})    
}, 5000) 


///mesajlog

     
client.on('messageDelete', async message => {    
  if(message.author.bot) return

    const channel = message.guild.channels.cache.get(db.fetch(`dcslog_${message.guild.id}`));
  if (!channel) return;
  
    let dcs = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}#${message.author.discriminator} adlı kişinin mesajı silindi`, message.author.avatarURL())
                    .setThumbnail(message.author.avatarURL())
                    .setTitle("Kullanıcının mesajı silindi")                
                    .addField(`Silinen mesaj :`,`${message.content}`)
                    .addField(`Kanal:`,`${message.channel}`)
                    .setTimestamp()
                    .setColor("RANDOM")

    channel.send(dcs)
});

client.on('messageUpdate', async (oldMessage, newMessage, message)  => {
    if(oldMessage.author.bot) return
    if(oldMessage.content == newMessage.content) return;

    const channel = oldMessage.guild.channels.cache.get(db.fetch(`dcslog_${oldMessage.guild.id}`));
    if(!channel) return;

    let dcs2 = new Discord.MessageEmbed()
    .setAuthor(`${oldMessage.author.username}#${oldMessage.author.discriminator} adlı kişinin mesajı düzenlendi`, oldMessage.author.avatarURL())
    .setThumbnail(oldMessage.author.avatarURL())
   
    .setTitle("Mesaj düzenlendi!")
    .addField("Eski mesaj : ",`${oldMessage.content}`)
    .addField("Yeni mesaj : ",`${newMessage.content}`)
    .addField("Kanal : ",`${oldMessage.channel}`)
    .setTimestamp()
    .setColor("RANDOM")

    channel.send(dcs2)
});


///////console

client.on('ready', () => {


  let API = (client.ws.ping).toFixed(2)

  let cpuStat = require("cpu-stat");

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
      if (err) {
          return console.log(err);
      }

  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      console.log (`Kanal Sayısı       : ${client.channels.cache.size}`);
      console.log (`CPU                : %${percent.toFixed(2)}`);
      console.log (`Node Sürümü        : ${process.version}`);
      console.log (`Discord Sürümü     : v${Discord.version}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Bot Gecikmesi      : ${API}ms`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');

  
  
    });

  })

////seviye

client.on("message", async message => {
  if (message.author.bot) return;

  let {
    status,
    ranks,
    logChannel,
    logRewardMessage,
    logUpMessage,
    blockChannels,
    blockRoles,
    reqXp
  } = (await db.fetch(`levelSystem_${message.guild.id}`)) || {
    status: false,
    reqXp: 3
  };
  if (!reqXp) reqXp = 50;

  if (status) {
    if (blockChannels && blockChannels.includes(message.channel.id)) return;
    if (
      blockRoles &&
      message.member.roles.cache.find(r => blockRoles.includes(r.id))
    )
      return;

    const { level, xp } = db.add(
      `levelProfile_${message.guild.id}_${message.author.id}.xp`,
      ((parseInt(message.content.length / 10, 10) + 1) * 10)
        .toString()
        .charAt(0)
    );

    if (xp >= reqXp) {
      db.set(`levelProfile_${message.guild.id}_${message.author.id}.xp`, 0);

      const { level, xp } = db.add(
        `levelProfile_${message.guild.id}_${message.author.id}.level`,
        +1
      );
      logChannel = logChannel
        ? message.guild.channels.cache.get(logChannel)
        : message.channel;

      if (!logUpMessage) logUpMessage = "seviye atladın yeni seviyen {level}";

      await logChannel.send(
        replaceOnce(
          logUpMessage,
          ["{user}", "{level}"],
          [message.member, level]
        )
      );

      const data = ranks ? ranks.find(x => x.level === `${level}`) : null;

      if (data) {
        if (!logRewardMessage)
          logRewardMessage =
            "seviye atladın ve yeni seviyen {level} aldığın seviye rolü {roleName}";

        try {
          await message.member.roles.add(data.roleId);
          await logChannel.send(
            replaceOnce(
              logRewardMessage,
              ["{user}", "{level}", "{roleName}"],
              [
                message.member,
                level,
                message.guild.roles.cache.get(data.roleId).name
              ]
            )
          );
        } catch (err) {
          await message.guild.owner.send(
            `${data.roleId}'ıd li rol olmadığı için ${message.member} adlı kişiye rolü veremedim.`
          );
        }
      }
    }
  }
});


///youtube
  

client.on("message", message => {
  let ytlog = db.fetch(`ytlog_${message.guild.id}`)
  let kanalid = db.fetch(`kanalid_${message.guild.id}`) 
  
  const ytch = require('yt-channel-info')
  
  let id = kanalid
  let type = "user"
  if(id) {
      ytch.getChannelInfo(id, type).then((response) => { 
  
  
          setInterval(() => {
              client.channels.cache.get(ytlog).send("Şu anda **"+response.subscriberCount+" **Abone var")
              }, 5000)
  
            
  
      })
  }
  
  
  
  ///////////////////////Youtube Bot bildirim
  
  
  const nrc = new (require("rss-parser"))();
  
  
  function handleUploads() {
      if (db.fetch(`postedVideos`) === null) db.set(`postedVideos`, []);
      setInterval(() => {
          nrc.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${kanalid}`)
          .then(nrc1 => {
              if (db.fetch(`postedVideos`).includes(nrc1.items[0].link)) return;
              else {
                  db.set(`videoData`, nrc1.items[0]);
                  db.push("postedVideos", nrc1.items[0].link);
                  let nrcvideo = db.fetch(`videoData`);
                  let channel = db.fetch(`ytbildirim_${message.guild.id}`)
                  if (!channel) return;
                  let message = "Hey `@everyone`, **{author}** Yeni Video Yükledi: **{title}**!\n{url}"
                      .replace(/{author}/g, nrcvideo.author)
                      .replace(/{title}/g, Discord.Util.escapeMarkdown(nrcvideo.title))
                      .replace(/{url}/g, nrcvideo.link);
                  channel.send(message);
              }
          });
      }, 30000);
  }
  
  });
  

   
client.login(ayarlar.token);

