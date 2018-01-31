const Discord = require('discord.js');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json"));
console.log(config);

const bot = new Discord.Client();
bot.login(config.token);
bot.on("ready", () => console.log("Bot Started!"));

bot.on("message", message => {
    if (message.content.startsWith(config.prefix)) {
        let mes = message.content.slice(config.prefix.length, message.content.length).split(" ");
        const command = mes[0];
        mes.shift();
        const text = mes.join(" ");


        switch (command) {
            case 'goto':
                const location = text.split("-");
                let zone = location[0];
                let room = location[1];
                if (zone != undefined) zone = zone.trim();
                if (room != undefined) room = room.trim();
                if (zone != undefined && room != undefined) {
                    const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != 'God');
                    switch (zone) {
                        
                        case 'Khoang tàu':
                            switch (room) {
                                

                                case 'Boong tàu':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "boong-tau");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }

                                    break;
                                case 'Phòng lái':

                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                         
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {

                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "phong-lai");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;

                                case 'Hành lang':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != "God");
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "hanh-lang");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;

                                case 'Phòng thủy thủ đoàn':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != "God");
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "phong-thuy-thu-doan");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;

                                case 'Phòng dạ hội':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != "God");
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "phong-da-hoi");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;

                                case 'Bếp':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != "God");
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "bep");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;

                                case 'Hồ bơi':
                                    if (message.member.roles.exists(x => x.name == `${zone} - ${room}`))
                                        message.channel.send(`Bạn đang ở ${room} rồi. Xin hãy đến vị trí khác hoặc không dùng lệnh nếu muốn ở lại.`);
                                    else {
                                        message.delete();
                                        const currentRole = message.member.roles.find(x => x.name != 'Player' && x.name != '@everyone' && x.name != "God");
                                         
                                        message.member.addRole(message.guild.roles.find(x => x.name == `${zone} - ${room}`))
                                            .then(() => {
                                                if (currentRole != null) {
                                                    message.member.removeRole(currentRole);
                                                    message.channel.send(`${message.member.user} đã rời khỏi [${currentRole.name}].`);

                                                }
                                                const toChannel = message.guild.channels.find(x => x.name == "ho-boi");
                                                toChannel.send(`${message.member.user} đã đến ${room}.`);

                                            })
                                            .catch(err => console.log(err.message));

                                    }
                                    break;
                                default:
                                    message.channel.send("Xin hãy ghi đúng vị trí phòng `VD: 1-A, 2-D, Phòng dạ hội, X`");

                            }

                            break;

                        case 'Tầng hầm':
                            switch (room) {
                                case 'Phòng máy':
                                    break;



                                default:
                                    message.channel.send("Xin hãy ghi đúng vị trí phòng `VD: 1-A, 2-D, Phòng dạ hội, X`");

                            }
                            break;

                        default:
                            message.channel.send("Xin hãy ghi đúng vị trí tầng `VD: Khoang tàu, Tầng hầm`");

                    }
                }
                else message.channel.send("Xin hãy ghi đúng cú pháp `!goto [Tên tầng] - [Tên phòng]`");

                break;

            default:


        }
    }
})
