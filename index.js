// Required packages
const { Telegraf, Markup } = require('telegraf');
const axios = require('axios'); // for potential Chapa integration later
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// In-memory DB for MVP (replace with real DB later)
const users = {};
const providers = [
  {
    id: 1,
    name: 'Alem Plumbing',
    rating: 4.7,
    price: 15,
    availability: 'Today at 3 PM',
    location: 'Bole',
    service: 'Plumbing'
  },
  {
    id: 2,
    name: 'Solomon Repairs',
    rating: 4.3,
    price: 12,
    availability: 'Today at 4 PM',
    location: 'Kazanchis',
    service: 'Plumbing'
  },
];

// --- User Flow ---
bot.start((ctx) => {
  users[ctx.chat.id] = { id: ctx.chat.id };
  ctx.reply(
    `Hi! I’m your Addis Helper. What service do you need today?`,
    Markup.keyboard([['🔧 Plumbing'], ['🧑🏫 Tutoring'], ['📦 Delivery']])
      .oneTime()
      .resize()
  );
});

bot.hears(['🔧 Plumbing', '🧑🏫 Tutoring', '📦 Delivery'], (ctx) => {
  const service = ctx.message.text.replace(/[🔧🧑🏫📦]/g, '').trim();
  users[ctx.chat.id].service = service;

  // Simple provider filtering
  const matches = providers.filter((p) => p.service === service);
  if (matches.length === 0) {
    return ctx.reply('No providers available at the moment. Please check back later.');
  }

  matches.forEach((p) => {
    ctx.reply(
      `*${p.name}* (⭐️${p.rating})\n💵 $${p.price}/hr\n🕒 ${p.availability}\n📍 ${p.location}`,
      {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [[
            { text: `Book ${p.name}`, callback_data: `book_${p.id}` }
          ]]
        }
      }
    );
  });
});

bot.on('callback_query', (ctx) => {
  const data = ctx.callbackQuery.data;
  if (data.startsWith('book_')) {
    const providerId = parseInt(data.split('_')[1]);
    const provider = providers.find((p) => p.id === providerId);

    if (provider) {
      ctx.reply(
        `✅ You’ve booked *${provider.name}* for ${provider.availability}.\nThey will contact you via Telegram.`,
        { parse_mode: 'Markdown' }
      );
    } else {
      ctx.reply('❌ Provider not found.');
    }
  }
  ctx.answerCbQuery();
});

// --- Provider Registration (MVP) ---
bot.command('provider_register', (ctx) => {
  ctx.reply(
    'Please send the following in one message:\nService Type, Location, Price, Availability\nExample: Plumbing, Bole, 15, Today at 3 PM'
  );

  bot.once('text', (msgCtx) => {
    const [service, location, price, availability] = msgCtx.message.text.split(',').map(s => s.trim());
    const newProvider = {
      id: providers.length + 1,
      name: msgCtx.chat.first_name,
      rating: 4.5,
      price: parseFloat(price),
      availability,
      location,
      service
    };
    providers.push(newProvider);
    msgCtx.reply('✅ You have been registered as a provider!');
  });
});

bot.launch();
console.log('🤖 Addis Helper Bot is running...');

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
