const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);

const
    rps = [
        'makas',
        'taş',
        'kağıt'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'taş') {
            if (botChoice === 'makas') {
                return 'won';
            } else if (botChoice === 'kağıt') {
                return 'Kaybetin';
            }

            return 'draw';
        } else if (choice === 'kağıt') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'makas') {
                return 'Kazandın';
            }

            return 'draw';
        } else if (choice === 'makas') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'kağıt') {
                return 'Kazandın';
            }

            return 'draw';
        }
    };

exports.run = async (client, msg, args) => {
    let kontrol = await db.fetch(`dil_${msg.guild.id}`);
if (kontrol == "TR_tr") {


	    dbl.hasVoted(msg.author.id).then(voted => {
        if (!voted) {
            msg.channel.send(new Discord.MessageEmbed()
                .setTitle("UYARI")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("Bu Komutu Kullanabilmek icin Botumuza Oy Vermelisiniz!")
                .addField("Oy Vermek icin:", `[Bana Tikla!](https://top.gg/bot/693134673450106890/vote)`)
            )

        } else {
			
    if (!args[0]) {
        return msg.channel.send('Lütfen seçimini yap taş, kağıt yada makas & dve!tkm <taş,kağıt,makas>');
    }
    let choice = args[0].toLowerCase();
    choice = choice === 't' ? 'taş' : choice;
    choice = choice === 'k' ? 'kağıt' : choice;
    choice = choice === 'm' ? 'makas' : choice;
    if (!rps.includes(choice)) {
        return msg.channel.send('Lütfen seçimini yap taş, kağıt yada makas & >tkm <t,k,m>');
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = ':trophy: Başarılı, sen **Kazandın** :trophy: \nSenin Seçtiğin: `' + choice + '` | Bot\'s Seçtiği: `' + botChoice + '`';
    } else if (result === 'lost') {
        answer = ':x: Bidakine **Kaybetin Dostum** :x: \nSenin Seçtiğin: `' + choice + '` | Bot\'s Seçtiği: `' + botChoice + '`';
    } else if (result === 'draw') {
        answer = ':neutral_face:  **Berabere** :neutral_face:\nSenin Seçimin: `' + choice + '` | Bot\'s Seçimi: `' + botChoice + '`';
    }

    msg.channel.send(answer);
		}
		});
    } else {
        dbl.hasVoted(msg.author.id).then(voted => {
            if (!voted) {
                msg.channel.send(new Discord.MessageEmbed()
                    .setTitle("Warning")
                    .setColor("RANDOM")
                    .setFooter(client.user.username)
                    .setThumbnail(client.user.avatarURL())
                    .setDescription("To Use This Command You Must Vote Our Bot!")
                    .addField("To vote:", `[Click Me!](https://top.gg/bot/693134673450106890/vote)`)
                )
        
            } else {
                

        if (!args[0]) {
            return msg.channel.send('Please select rock, paper or scissors `!rps <rock, paper, scissors>`');
        }
        let choice = args[0].toLowerCase();
        choice = choice === 'r' ? 'rock' : choice;
        choice = choice === 'p' ? 'paper' : choice;
        choice = choice === 's' ? 'scissors' : choice;
        if (!rps.includes(choice)) {
            return msg.channel.send('Please select rock, paper or scissors`!rps <t,k,m>`');
        }
        let rand = Math.floor(Math.random() * 3);
        let botChoice = rps[rand];
        let result = rpsF(choice, botChoice);
        let answer = '';
    
        if (result === 'won') {
            answer = ':trophy: Successful, you ** Won **:trophy: \nYour Chosen: `' + choice + '` | Bot is Choice: `' + botChoice + '`';
        } else if (result === 'lost') {
            answer = ':x: **Lose it buddy** :x: \nYour Chosen: `' + choice + '` | Bot is Choice: `' + botChoice + '`';
        } else if (result === 'draw') {
            answer = ':neutral_face: **Scoreless** :neutral_face:\nYour choice: `' + choice + '` | Bot is Choice: `' + botChoice + '`';
        }
    
        msg.channel.send(answer);
            }
            });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
 exports.help = {
 name: 'tkm',
 description: 'Taş kağıt makas oyununu oynar.',
 usage: 'tkm'
 }
