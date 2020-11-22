const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send(":bell: Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send(":loudspeaker: Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send(":mega: Başarıyla duyuruldu!");
    kanal.createWebhook("Devil Duyuru")
    .then(webhook => webhook.edit("Devil Duyuru")
        .then(wb => {
            const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send( duyurumetni + "\n@everyone")
            duyurucuPing.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuru',
  description: 'Duyurucu',
  usage: 'duyuru'
};