const Discord = require('discord.js')
const moment = require('moment')
const db = require("quick.db");
const client = new Discord.Client();


exports.run = async (bot, msg, args) => {
  let kontrol = await db.fetch(`dil_${msg.guild.id}`);
let prefix = (await db.fetch(`prefix_${msg.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL();
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
  
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('DD/MM/YYYY')
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY')
   
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField(`Durum`, userinfo.status, true)
        .setColor('03f2df')
        .addField(`Sunucuya Katılım Tarihi:`, userinfo.dctarihkatilma, true)
        .addField(`Discorda Katılım Tarihi:`, userinfo.dctarih, true)
        .addField(`Bot mu?:`, userinfo.bot, true)
        .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj, true)
        .addField(`Kimlik:`, userinfo.id, true)
        .addField(`Roller:`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
        .setFooter("© 2021 Taxperia")
        msg.channel.send(uembed)
} else {

  let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
  let user = msg.mentions.users.first() || msg.author;

  let userinfo = {};
  userinfo.avatar= user.displayAvatarURL();
  userinfo.id = user.id;
  userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.activites || "A Game Is Not Playing."
  userinfo.status = user.presence.status.toString()
  .replace("dnd", `Dnd`)
  .replace("online", `Onlive`)
  .replace("idle", `İdle`)
  .replace("offline", `Offline`)

  userinfo.bot = user.bot.toString()
  .replace("false", `No`)
  .replace("true", `Yes`)

  userinfo.sonmesaj = user.lastMessage || "The last post was not found." || "The last post could not be displayed."

  userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('DD/MM/YYYY')

  
  userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY')


  const uembed = new Discord.MessageEmbed()
  .setAuthor(user.tag, userinfo.avatar)
  .setThumbnail(userinfo.avatar)
  .addField(`Status:`, userinfo.status, true)
  .setColor('03f2df')
  .addField(`Server Participation Date:`, userinfo.dctarihkatilma, true)
  .addField(`Participation Date in Discord:`, userinfo.dctarih, true)
  .addField(`Is it a bot?:`, userinfo.bot, true)
  .addField(`Last Post Sent:`, userinfo.sonmesaj, true)
  .addField(`ID:`, userinfo.id, true)
  .addField(`Role:`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**This user has no roles.**"}`, false)
  .setFooter("© 2021 Taxperia")
  msg.channel.send(uembed)
};

    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kb", "kullanıcıbilgi", "userinfo", "user-info"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};

