const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.find(r => r.name === "@everyone");
  message.channel.overwritePermissions(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet kanalına artık ``Yazamazsınız`` ");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["skapat", "kapat"],
  kategori: "sohbet",
  permLevel: 3
};
///OGÜN SERT DESTEK EKİBİ VENQTM
exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};