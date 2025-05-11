const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhFRnJ1ZGdzTHVJaEpjL2NWN2V1dnQvUXNNT1BqZUhlV09kenN6WUgwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGpPZnp5cDFDSXhFYXMwY1RhdGdMMGxvZVFxdG1FYVRmNW56WXFkUlAyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSWlTQm9tc24xZCs4d0xseXBJUXNGUURuWE5JQnBHMkdVZml3bDk2WTFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TUFSL1Ezdmd3RmpBY2QrZUhWb1Y1YXJUK3AxaXdWQ2xyUHJLWkpwblhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDdHRqZkR1cnNFSzU3eXdWa0NIWGpPczdmRnUvTnM5QXVUa0krYmZCSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJRNUJSRStINWJBczEvMFA3K0FEZW43Ym9oNHZUbTY4RS9NY0gyMk5lZ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05nN3FpYVI1L2JxRTRnYi9hL0VVT3NjSVlUOCtzRmRsNEZKc25CTitFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVFzTEZXYy9rMHV3blRvcDdmRE5YVTI0NzZ6YXFmZjBadVorRFdqMjJBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlSRGhITWhxYVVuMlZUbjlBTVVqNENQWFdXOVZUdUFob2lydHFVSVBXbVM2TVZ0aEMrQ2ppRVZwdUI4UmNKQVVBZWlXblMzZVFwWjFXeFdvcy9SakF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJNaHRUL1B6U0Nmc3JRa1o5TUNaMytydTFwd3IzL2dPcTNtd1FqVjQ0MHpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzIwMTU1NTgwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMkY2NkUxNDkzRkZENUNENDEyODdEQTRCQjk2MjlENCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2OTQ5MzI5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyMDE1NTU4MDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDcyMEExMDE0QTA0NDIxQjNGNkFFOURDQkQ4MDZBRUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0Njk0OTMzNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzMjAxNTU1ODAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ2MTYzMDEzRDY4Qjg2ODE1RUFBNDI1N0UyNjJBMEVFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDY5NDkzNTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzIwMTU1NTgwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RjVBMzNFMUFFMTM0NkFFOUI5MEE3NjIyM0Y1NThGRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2OTQ5MzU5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFanlkWms2Z1RUV1RkT3JjZHc3YTR3IiwicGhvbmVJZCI6IjM0YTJkMzM3LTJkNTMtNDhkYS1hMDljLTZlMTM1NzZiMjQxMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFOUlXUld2YkhYY0JKVmpydWhzUHJpeFhsaXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG1EZ21JTkJCZEN0QXBuOUtaR291cWc0dlpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlozRzM4UkFQIiwibWUiOnsiaWQiOiIyMzMyMDE1NTU4MDE6OTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2UvvCdlLjwnZS58J2UvCDwnZWE8J2VgPCdlL7ihI3wnZWL4pyqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYTVvNThERUx1cGdjRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhVGJaTFN6a256K1BMUTBvQjlHMFZtVmhjcDJoUi9yeWtGZXlWR1ZjeG4wPSIsImFjY291bnRTaWduYXR1cmUiOiJLSEsyKzUwY0lKODQ0RnlRR0xKMjFzNzBNRGNnYTkyYUsyU0dGeEZYeGRJTVlhYlFEckZPN3pRVGVIRlRZUWpjYjlrcDlYTE1ETnNsNmJZSmZweGxCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid3NJWi8vQ1I5dW9GY2xPcjR6UWtiS2J6N2Y2SFRnbHFVWWhmUjBnd0xFUEF5SjJSendnSkQrWUdKUFVUUjBLVFJVTEpwYmxtd1VsMFBLbUVnenpOQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyMDE1NTU4MDE6OTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2syMlMwczVKOC9qeTBOS0FmUnRGWmxZWEtkb1VmNjhwQlhzbFJsWE1aOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njk0OTMyMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDVUQifQ==",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
BOT_NAME: process.env.BOT_NAME || "aguti-dev",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233201555801",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "aguti-dev",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ B.M.B-XMD ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p9hyal.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">B.M.B IS ACTIVE AND ALIVE\n\n\nKEEP USING B.M.B-XMD FROM B.M.B TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "false",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
