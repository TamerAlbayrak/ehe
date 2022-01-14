const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Olmalısınız!**"))
   

    let timeout = 260000
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
  
  
  
   
    if(isNaN(id)) return message.channel.send(`Lütfen Sayı Giriniz, Örnek: ${prefix}temizle 10`);
    if(!args[0]) return message.channel.send("Hey, Lütfen Temizlenecek Mikatarı Belirtiniz!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesaj Silindi `).then(x => x.delete({timeout: 5000}))
  
})

} else {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To Use This Command, You Must Have 'Manage Messages' Authority!**"))

  let timeout = 260000
  let bs = args.slice(0).join('+');

let id = Number(args[0]);

  if(isNaN(id)) return message.channel.send(`Please Enter Number, Example :${prefix}clear 10`);
  if(!args[0]) return message.channel.send("Hey, Please Specify The Amount To Clean!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(` ${args[0]} Messages Deleted `).then(x => x.delete({timeout: 5000}))
    
  })
  


}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','clear','temizle','c'],
  permLevel: 1
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
};