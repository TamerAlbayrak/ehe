const Discord = require("discord.js");
const moment = require("moment");
const client = new Discord.Client();
const os = require("os");
let cpuStat = require("cpu-stat");
let diskStat = require("disk-stat")
const netStat = require('net-stat');



exports.run = async (client, message, args, interactionCreate, interaction) => {

  require('moment-duration-format')
        const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

      let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }

      
        

       /*/ let optsLol;
        diskStat.usageRead(function(bytesPerSecond) {
          if (err) {
            return console.log(err);
          
        }/*/
      

        var totalCores = cpuStat.totalCores();

        let start = Date.now(); message.channel.send('Botun İstatistikleri').then(message => {
          let diff = (Date.now() - start);
          let API = (client.ws.ping).toFixed()

          

const istatistikler = new Discord.MessageEmbed()
.setColor("#00ccff")
.setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
 .addField(":bar_chart:  Botun Bilgileri","‎")
.setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
.addField(" :hammer_pick:  Geliştirici",  `<@!352036341153923072> <@!333146288289742850>`, true)
.addField(" :bust_in_silhouette:  Kullanıcı Sayısı",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(":clipboard:  Sunucu Sayısı", client.guilds.cache.size.toLocaleString(), true)
.addField(":crystal_ball:  Kanal Sayısı", client.channels.cache.size.toLocaleString(), true)
.addField(":sound:  Sesli Kanal Sayısı", client.channels.cache.filter(a => a.type === "voice").size.toLocaleString() , true)
.addField(":level_slider:  Bellek Kullanımı",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
 .addField(":pager:  İşlemci Kullanımı", `%${percent.toFixed(2)}`, true)
//.addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
.addField(":alarm_clock:  **Gecikme süreleri**","Mesaj: {ping1} \nBot: {ping2}"
.replace("{ping1}", `${diff}ms`)
.replace("{ping2}", `${API}ms`), true)
 .addField(":desktop:  İşletim Sistemi",`Windows Server 2021 R2 Standard Evaluation`,true)
  .addField(":compass:  İşlemci", `\n${os.cpus().map(i => `${i.model}`)[0]}`, true)
  .addField(":gear:  Çekirdek Sayısı", (totalCores), true)
  .addField(":paperclip:  Kuruluş Tarihi", "27/03/2020", true)
  .addField(`:cd:  Node Sürümü`, `${process.version}`, true)
.addField(":minidisc:  Discord sürümü", "v" + Discord.version, true)
.addField(`:bar_chart:  Çalışma Süresi`, `${duration}`, true)
.addField(`:green_circle: Shard Sayısı`, `2`, true)

//.addField(`»‎‎‎‎ Bağlantılar`, `[ :e_mail: Sunucuna Ekle](https://discord.gg) | [  Oy ver](https://discord.gg) | [  Destek sunucusu](https://discord.gg) | [ Site](https://discord.gg) | [ Site](https://discord.gg)`,)
  message.channel.send(istatistikler)
  
})
    });
        
   /*/ })/*/
  
  } else {
    
    let start = Date.now(); message.channel.send("Bot's Stats").then(message => {
      let diff = (Date.now() - start);
      let API = (client.ws.ping).toFixed(0)

    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
const istatistikler = new Discord.MessageEmbed()
.setColor("#00ccff")
.setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
 .addField(":bar_chart:  Bot Statistics","‎")
.setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
.addField(" :hammer_pick: Developer",  `<@!352036341153923072> <@!333146288289742850>`, true)
.addField(" :bust_in_silhouette:  Number of users",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(":clipboard:  Number of Servers", client.guilds.cache.size.toLocaleString(), true)
.addField(":bar_chart:  Number of Channels", client.channels.cache.size.toLocaleString(), true)
.addField(":level_slider:  Memory Usage",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
 .addField(":pager: CPU Usage", `%${percent.toFixed(2)}`, true)
//.addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
 .addField(":alarm_clock:  **Delay times**","Message: {ping1} \nBot: {ping2}"
      .replace("{ping1}", `${diff}ms`)
      .replace("{ping2}", `${API}ms`), true)
 .addField(":desktop:  OS",`Windows Server 2021 R2 Standard Evaluation`,true)
  .addField(":compass:  CPU", `\n${os.cpus().map(i => `${i.model}`)[0]}`, true)
  .addField(":paperclip:  Year of foundation", "27/03/2020", true)
  .addField(`:cd:  Node Version`, `${process.version}`, true)
.addField(":minidisc:  Discord version", "v" + Discord.version, true)
.addField(`:bar_chart:  Uptime`, `${duration}`, true)
.addField(`:green_circle:  Shard`, `2`, true)
//.addField(`»‎‎‎‎ Bağlantılar`, `[ :e_mail: Sunucuna Ekle](https://discord.gg) | [  Oy ver](https://discord.gg) | [  Destek sunucusu](https://discord.gg) | [ Site](https://discord.gg) | [ Site](https://discord.gg)`,)
  message.channel.send(istatistikler)
      })
    });
  };
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', "botinfo", "bot-info", "info"],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'istatistik sistemi',
  usage: 'istatistik'
}; 