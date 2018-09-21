const Discord = require('discord.js');
const moment = require("moment-timezone");
const client = new Discord.Client();

client.on('ready', () => {
  console.log("ready");
});

client.on('message', msg => {
  if (msg.content === '!timetable') {
    var year = parseInt(moment().tz("Europe/Copenhagen").format("Y"));
    var month = parseInt(moment().tz("Europe/Copenhagen").format("M"));
    var week = parseInt(moment().tz("Europe/Copenhagen").format("W"));
    var day = parseInt(moment().tz("Europe/Copenhagen").format("D"));
    var hour = parseInt(moment().tz("Europe/Copenhagen").format("H"));
    var timetable = [
        [
            [0,0,0,0,0,0,0,0,0,0,"MATHEMATIQUES",0,0,0,"MATHEMATIQUES","G1 - PHYSIQUE-CHIMIE / G2 - SVT","G1 - PHYSIQUE-CHIMIE / G2 - SVT","G1 - SVT / G2 - PHYSIQUE-CHIMIE",0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"ANGLAIS",0,"ESPAGNOL / ALLEMAND",0,"GA - AP NEAULT / GB - AP LALIRE","GA - AP NEMRI / GB - AP NEAULT","PFEG / SES","PFEG / SES","EPS","EPS",0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"HISTOIRE-GEOGRAPHIE","FRANCAIS","G2 - EMC","EURO - HISTOIRE-GEOGRAPHIE",0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"FRANCAIS","FRANCAIS","ESPAGNOL / ALLEMAND",0,"EURO - HISTOIRE-GEOGRAPHIE","HISTOIRE-GEOGRAPHIE",0,"HISTOIRE-GEOGRAPHIE","ANGLAIS",0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"PHYSIQUE-CHIMIE","ANGLAIS","PHYSIQUE-CHIMIE","ESPAGNOL",0,"FRANCAIS","MATHEMATIQUES","MATHEMATIQUES",0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        [
            [0,0,0,0,0,0,0,0,0,0,"MATHEMATIQUES",0,0,0,"MATHEMATIQUES","G1 - PHYSIQUE-CHIMIE / G2 - SVT","G1 - PHYSIQUE-CHIMIE / G2 - SVT","G1 - SVT / G2 - PHYSIQUE-CHIMIE",0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"ANGLAIS",0,"ESPAGNOL / ALLEMAND",0,"GA - AP LALIRE / GB - AP NEAULT","GA - AP NEAULT / GB - AP NEMRI",0,"PFEG / SES","EPS","EPS",0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"HISTOIRE-GEOGRAPHIE","FRANCAIS","G1 - EMC","EURO - HISTOIRE-GEOGRAPHIE",0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"FRANCAIS","FRANCAIS","ESPAGNOL / ALLEMAND",0,"EURO - HISTOIRE-GEOGRAPHIE","HISTOIRE-GEOGRAPHIE",0,"HISTOIRE-GEOGRAPHIE","ANGLAIS",0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,"PHYSIQUE-CHIMIE","ANGLAIS",0,"ESPAGNOL",0,"FRANCAIS","MATHEMATIQUES","MATHEMATIQUES",0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]];
    var sortofweek = week%2;
    var a = Math.floor((14 - month) / 12);
    var y = year - a;
     var m = month + 12 * a - 2;
     var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
     Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
     while (timetable[sortofweek][d][hour] == 0) {
        hour++;
        if (hour == 24) {
            hour = 0;
            d++;
        }
        if (d == 7) {
            d = 0;
            if (sortofweek == 0) {
                sortofweek = 1;
            }
            else {
                sortofweek = 0;
            }
        }
    }
    msg.reply(timetable[sortofweek][d][hour]);
  }
});

client.login(BOT_TOKEN);
