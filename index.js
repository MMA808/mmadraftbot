const TelegramBot = require('node-telegram-bot-api');

const token = '7574646934:AAH2166r2mN_-NopOO7oblt4u6GAZJ24t9M'; // 🔐 Замените на ваш токен
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