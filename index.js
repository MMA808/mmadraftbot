require('dotenv').config(); // Подключаем dotenv в начале

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN; // Берём токен из .env
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const message = `*Welcome to the MMA DRAFT Universe!*

Train fighters, climb the rankings, and dominate the league 🥋

Jump into the octagon and build your ultimate MMA legacy 🚀`;

  bot.sendMessage(chatId, message, {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Join 🚀',
            web_app: { url: 'https://mma-draft-8esimcofw-mma-drafts-projects.vercel.app' }
          }
        ]
      ]
    }
  });
});