import {Composer} from "telegraf";

const composer = new Composer();

composer.start((ctx) => {
    ctx.reply("Привет, я могу пересылать тебе новости из ВК.\nДля этого надо кое-что настроить. 🔧")
});
composer.help((ctx) => ctx.reply('Send me a sticker'));

module.exports = composer;