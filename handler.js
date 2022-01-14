const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
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
            delete require.cache[require.resolve(`./commands/${command}`)];
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
            let cmd = require(`./commands/${command}`);
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
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
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