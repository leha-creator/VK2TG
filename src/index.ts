import {Telegraf, Markup} from 'telegraf';
import {Sequelize} from "sequelize";

import * as dotenv from 'dotenv';
import * as path from 'node:path';

dotenv.config();

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER_LOGIN}`, `${process.env.DB_USER_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    port: parseInt(`${process.env.DB_POR}`),
    dialect: 'postgres'
})

try {
    const dbConnection = async () => {
        await sequelize.authenticate();
        console.log('Соединение с БД было успешно установлено')
    }

} catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
}

const bot = new Telegraf(`${process.env.TELEGRAM_BOT_TOKEN}`);

bot.use(require('./composers/start.composer'))
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
