const Discord = require('discord.js');
const BOT = new Discord.Client();

BOT.settings = require('./settings.json');

const fs = require('fs');

let settingsFile = {
  token: "INSERT",
  botId: "INSERT",
  ownerId: "INSERT",
  prefix: "INSERT",
  logchannelId: "INSERT",
  webhook_id: "INSERT",
  webhook_token: "INSERT",
  _commentStart: "===========MYSQL DETAILS START HERE ===========",
  host: "INSERT",
  user: "INSERT",
  password: "INSERT",
  database: "INSERT",
  _commentEnd: "===========MYSQL DETAILS END HERE ==========="
}

BOT.colors = Discord.Constants.Colors;

BOT.log = require('./handlers/logHandler');
const GET_DIR_SYNC = require('./module/getDirSync');
const moment = require('moment');
require('./handlers/eventHandler')(BOT);




const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


let modules = GET_DIR_SYNC('./commands/');
log(`Loading ${modules.length} modules...`);
for (let i = 0; i < modules.length; i++) {
  loadEvent(BOT, modules[i]);
}
const LanguageHandler = require('./handlers/languageHandler');

BOT.db = require('mysql');
/*
BOT.con = BOT.db.createConnection({
  host: BOT.settings.host,
  user: BOT.settings.user,
  password: BOT.settings.password,
  database: BOT.settings.database
})

BOT.con.connect(err => {
  if (err) {
    throw err
  }
  console.log("CONNECTED TO DATABASE");
})
*/

BOT.strings = new LanguageHandler();
BOT.commands = new Discord.Collection();
BOT.aliases = new Discord.Collection();


function loadEvent(client, module) {
  fs.readdir(`./commands/${module}/`, (err, files) => {
    if (err) {
      console.log(err);
    }
    log(`Loading module: ${module} [${files.length} commands]`);
    files.forEach(f => {
      let props = require(`./commands/${module}/${f}`);
      log(`Loading command: ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.config.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });
}

try {
  BOT.login(BOT.settings.token);
}catch(e) {
  return console.log("INVALID BOT TOKEN. PLEASE CHECK settings.json FILE")
}

