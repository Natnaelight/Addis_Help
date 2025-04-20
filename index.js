const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command — prompts user to open the web app
bot.start((ctx) => {
  ctx.reply(
    `👋 Welcome to Addis Helper!\nTap the button below to open the app and get started.`,
    {
      reply_markup: {
        keyboard: [
          [
            {
              text: "🚀 Open Addis Helper App",
              web_app: {
                url: "https://v0-addis-helper-design.vercel.app", // Replace with your deployed app URL
              },
            },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    }
  );
});

bot.launch();
console.log('🤖 Addis Helper Bot is running...');

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
