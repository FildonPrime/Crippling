const LOAD_EVENTS = event => require(`../events/${event}`);

module.exports = Bot => {
    Bot.on('ready', () => LOAD_EVENTS('ready')(Bot));
    Bot.on('message', LOAD_EVENTS('message'));
    Bot.on('error', LOAD_EVENTS('error'));
    Bot.on('logEvent', LOAD_EVENTS('logEvent'));
    Bot.on('helpEvent', LOAD_EVENTS('helpEvent'));
    Bot.on('databaseClean', LOAD_EVENTS('databaseClean'));
}