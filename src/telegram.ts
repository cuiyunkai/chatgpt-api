import { Telegraf } from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN)

export async function sendImage(chatId: number, imageUrl: string) {
  try {
    await bot.telegram.sendPhoto(chatId, imageUrl)
  } catch (error) {
    console.error(error)
  }
}
