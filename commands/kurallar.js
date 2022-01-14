const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))



    const rules = new Discord.MessageEmbed()
    
      .setColor('RED')
      .addField(`Kurallar`, [`
      
      - Küfür, argo ve reklam kesinlikle **yasaktır**!
      - Spam ve flood **yasaktır**!
      - Din, ırk ve siyaset konuşmak **yasaktır**!
      - Herkes birbirine saygılı olmalıdır!
      - Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!
      - Üstünlük göstermek/taslamak **yasaktır**!
      - Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)
      - Oynuyor kısmına reklam, küfür koymak **yasaktır**!
      - Yetkililere karşı gelmek **yasaktır**!
      - Bot basmak/j4j yapmak **yasaktır**!
      - Rahatsızlık vermek **yasaktır**! \n\n
      - SUNUCUYA GİRDİĞİNİZ ANDA OKUMUŞ SAYILACAKSINIZ!

      `])

       message.delete();
      //message.react("?");

    return message.channel.send(rules).then(keleS => keleS.react("?"));
} else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))


    const rules = new Discord.MessageEmbed()
    
    .setColor('RED')
    .addField(`Rules`, [`
    
    - Profanity, slang and advertising are strictly  prohibited !
    - Spam and flood  are prohibited !
    - Talking about religion, race and politics is forbidden !
    - Everyone should be respectful to each other!
    - Everyone has their own opinion so arguing is prohibited !
    - It is forbidden to show superiority!
    - The use of Caps and emoji is  prohibited! (Unless Extreme)
    - It is forbidden to put advertising, profanity in the playing part!
    - It is forbidden to go against the authorities!
    - J4J Do not do!
    - Disturbance is prohibited! \n\n

    `])

     message.delete();
    //message.react("?");

  return message.channel.send(rules).then(keleS => keleS.react("?"));
};

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}