const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './anonymous.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    bot: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
    owner: process.env.OWNER_NAME === undefined ? 'Hiruwa' : process.env.OWNER_NAME,
    ownernum: process.env.OWNER_NUMBER === undefined ? '94771039631' : process.env.OWNER_NUMBER,
    songup: process.env.SONG_UPLOAD === undefined ? 'SONG UPLOAD' : process.env.SONG_UPLOAD,
    songdown: process.env.SONG_DOWNLOAD === undefined ? 'SONG DOWNLOAD' : process.env.SONG_DOWNLOAD,
    vidup: process.env.VIDEO_UPLOAD === undefined ? 'VIDEO UPLOAD' : process.env.VIDEO_UPLOAD,
    viddown: process.env.VIDEO_DOWNLOAD === undefined ? 'VIDEO DOWNLOAD' : process.env.VIDEO_DOWNLOAD,
    logo: process.env.BOT_LOGO === undefined ? 'https://telegra.ph/file/6852aab70c51bf2797244.jpg' : process.env.BOT_LOGO,
    qr: process.env.ANONY_SESSION === undefined ? '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐' : process.env.ANONY_SESSION,
    alive: process.env.ALIVE_MESSAGE === undefined ? 'Hiruwa' : process.env.ALIVE_MESSAGE,
    BRANCH: 'main',
    DEVELOPER: 'HIRUWA',
    AUTHOR: '👿 ʜɪʀᴜᴡᴀ 👿',
    web: 'https://github.com/Anony-Hiruwa/',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
};
