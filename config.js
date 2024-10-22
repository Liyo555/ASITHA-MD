const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=L7YRQAoI#CxO9JJD17KR30BjxeYs1CFv3IHP6l3Bzs-XeqB6uAyY",
MONGODB: process.env.MONGODB || "",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
