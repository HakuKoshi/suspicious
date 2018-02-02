const Discord = require('discord.js');
const fs = require('fs');


const config = JSON.parse(fs.readFileSync("./config.json"));
const location_role = JSON.parse(fs.readFileSync("./location_role.json"));
const exclude_role = JSON.parse(fs.readFileSync("./exclude_role.json"));


console.log(config);

const bot = new Discord.Client();
bot.login(config.token);
bot.on("ready", () => console.log("Bot Started!"));

bot.on("message", message => {
    if (message.content.startsWith(config.prefix)) {
        let mes = message.content.slice(config.prefix.length, message.content.length).split(" ");
        const command = mes[0];
        mes.shift();
        const text = mes.join("").toLowerCase();


        switch (command) {
            case 'goto':
                const location = location_role[text];
                if (!message.member.roles.exists(x => x.name == "Player"))
                    message.channel.send("Chỉ có Players mới thực hiện được lệnh này.");
                else {
                    if (location) {
                        const currentLocation = message.member.roles.find(x => Object.keys(exclude_role).includes(x.name) == false);
                        message.member.addRole(location.roleid)
                            .then(() => {
                                console.log(currentLocation.name);
                                message.channel.send(`${message.member.user} đã rời khỏi [${currentLocation.name}].`);
                                message.member.removeRole(currentLocation);

                            });
                    }
                    else message.channel.send("Xin hãy ghi chính xác theo cú pháp !goto  [Tên tầng] - [Tên phòng]  `VD: !goto khoang tàu - phòng lái`");
                }


                break;

            default:


        }
    }
})
