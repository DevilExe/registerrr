require("express")().listen(1343);

const db = require("quick.db"); 
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("Nzc4MjgwMzU0Mjg3OTc2NDg4.X7PsEA.pYo4OvphwsyR-_iWhUfiAw_rUDo");
const fetch = require("node-fetch");
const fs = require('fs')

setInterval(() => {
  var links = db.get("linkler");
  if(!links) return 
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)  

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})

client.on("ready", () => {
  client.user.setActivity(`Merciless 🖤 LazEMO`)
  console.log(`Botunuz Aktif`)
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "devil!ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**Bu bot zaten uptime ediliyor.**")
    
    let yardım = new Discord.RichEmbed()
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**7/24 Yaptım Güle Güle Kullan.**")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000));
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**Hata! Sadece düzgün url'ler ekleyebilirsiniz.**")
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000));
  })
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "devil!botsay") {
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "devil!yardım") {
let embed = new Discord.RichEmbed()
.setColor('#070706')
.setDescription(`**Uptime komudunu kullandıktan sonra sisteme eklenmesi için 1-5 dk bekleyin.**

 **devil!yardım** : Botun yardım menüsünü açar.

 **devil!ekle <link>** : Eklediğiniz proje linkini 7/24 açık yapar.

**devil!botsay** : Bot'umuzla uptime olan proje sayısını gösterir.

**devil!botbilgi** : Bot'un istastistik verilerini gösterir.`)
.setAuthor(`DEVİL Uptime | Yardım Menüsü`, client.user.avatarURL)
.setFooter(`DEVİL Uptime Botu`)
return message.channel.send(embed);
    }
  
  })
  const log = message => {
  console.log(`${message}`);
}
  
client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "era!devil") {
  var link = spl[1]
 message.channel.send(`**Çok yakında eklenicek  DEVİL**`)
}})

//---------------------------------------BOT-KORUMA-------------------------------------\\


client.on("ready", async () => {
client.channels.get("776172878478704690").join()
})
