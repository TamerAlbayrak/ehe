const Discord = require('discord.js');
const client = new Discord.Client()
const express = require('express');
const ayarlar = require("./src/configs/settings.json");
const captain = new Discord.ShardingManager('./index.js', {

    totalShards: 2,

    token: (ayarlar.token)//sa kodır abler

});

captain.on('shardCreate', shard => {
  
  console.log(`${shard.id+1} IDli Başlatıldı ve Kullanıma Hazır.`)

    const webhook = new Discord.WebhookClient("906569445206544405","R7i1Rp3wS0HynXS4H5CxWfykCp-ZBaNCexJ9pO5dx1Wjnp6dcuKki9BVgCIvvLk2mdHL")
const embed1 = new Discord.MessageEmbed() 
 .setColor("RED") 
.setTitle("Taxperia Shard") 
 .setDescription(`Shard **${shard.id+1}/${shard.id+1} [[Bağlanılıyor]](https://discord.gg/wRbgTkVVB2)** \nTaxperia Discord'a Bağlanıyor...`)
webhook.send(embed1)
    setTimeout(() => {

  const webhook = new Discord.WebhookClient("906569445206544405","R7i1Rp3wS0HynXS4H5CxWfykCp-ZBaNCexJ9pO5dx1Wjnp6dcuKki9BVgCIvvLk2mdHL")
const embed = new Discord.MessageEmbed() 
.setColor("BLURPLE") 
.setTitle("Taxperia Shard") 
 .setDescription(`Shard **${shard.id+1}/${shard.id+1} [[Bağlanıldı]](https://discord.gg/wRbgTkVVB2)** \nTaxperia Discord'a Bağlandı ve kullanıma hazır!!`)
webhook.send(embed)
  }, 3000)

});

// WebHook Oluşturup ID ve token gir

setTimeout(() => {

    captain.broadcastEval("process.exit()");

}, 8600000);

captain.spawn();