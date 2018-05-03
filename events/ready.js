const COLOR = require('chalk');

module.exports = async Bot => {
    Bot.log.console(COLOR.red('[ONLINE]'));
    
    Bot.user.setActivity(`${Bot.settings.prefix}help`, {type: 'PLAYING'})

    //Bot.sql.run("CREATE TABLE IF NOT EXISTS data (amount TEXT, user1 TEXT UNIQUE, user2 TEXT UNIQUE, user1roll INTEGER, user2roll INTEGER, starter TEXT UNIQUE)").then(() => {
     //   console.log(COLOR.blue('[DATABASE ONLINE]'));
    //})
}