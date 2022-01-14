const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');


const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Komutlar Yüklendi. Bot Giriş Yaptı. Gerekli Ayarlar Yapıldı. Kaptan ${client.user.username} Bot Göreve Hazır. Yelkenler Fora...`);
  client.user.setStatus("idle");
  client.user.setPresence({ activity: { name: "!yardım | !dil | !davet | !website | !prefix | Taxperia" }, status: "online" });
  client.channels.cache.get("828316762948501514").join();

};



