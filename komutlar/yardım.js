const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField('Devil Bot Komutları',`
** Prefix : !**
**!erkek** : Erkek Kayıt Etme
**!kız** : Kız Kayıt Etme
**!i** : Botun istatiklerini atar.
**!nick** : Nick Değiştirme
**!say** : Sunucudaki Üye Grafiğini Atar
**!dmduyur** : Sunucudaki Tüm Kullanıcılara Dm Den Mesaj Yollarsınız
**!duyuru** : Belirtilen Kanala Duyuru Atarsınız
**!kilit ** : Sohbeti İstediğiniz Süre Boyunca Kilitler
**!sohbet aç** : Sohbeti Açar
**!sohbet kapat** : Sohbet Kapat'`)
.setFooter(`${message.author.tag} İstedi.`, message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/775531432659517451/776757772829065246/Devill_Ailesi.gif')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
