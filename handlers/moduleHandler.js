const fs = require('fs');
const path = require('path');
const color = require('chalk');
const Discord = require('discord.js');
const readline = require('readline');

let commands = new Discord.Collection();
let aliases = new Discord.Collection();
let modules = fs.readdirSync('./commands/').filter(file => fs.statSync(path.join('./commands/', file)).isDirectory());

for (let module of modules) {
  let commandFiles = fs.readdirSync(`./commands/${module}`);
  process.stdout.write(`${color.cyan('[Bastion]:')} Loading ${module} module...\n`);
  for (let file of commandFiles) {
    file = file.substr(0, file.length - 3);
    process.stdout.write(`${color.cyan('[Bastion]:')} Loading ${file} command...\n`);
    file = require(`../commands/${module}/${file}`);
    commands.set(file.help.name.toLowerCase(), file);
    file.config.module = module;
    for (let alias of file.config.aliases) {
      aliases.set(alias.toLowerCase(), file.help.name);
    }

    if (process.stdout.moveCursor) {
      process.stdout.moveCursor(0, -1);
    }
    if (process.stdout.clearLine) {
      process.stdout.clearLine();
    }
  }

  if (process.stdout.moveCursor) {
    process.stdout.moveCursor(0, -1);
  }
  if (process.stdout.clearLine) {
    process.stdout.clearLine();
  }
}

exports.commands = commands;
exports.aliases = aliases;