const { Client } = require('discord.js-selfbot-v13');
const readline = require('node:readline/promises');
const { Webhook } = require('discord-webhook-node');
var sleep = function (ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, ms);
	});
};

console.clear()
console.log(`
 ___      ___ ________  ________   ___  _________    ___    ___      _________  ________  ________  ___          
|\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\___   ___\\\\   __  \\|\\   __  \\|\\  \\         
\\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\        
 \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /          \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\       
  \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /            \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\____  
   \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /               \\ \\__\\ \\ \\_______\\ \\_______\\ \\_______\\
    \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /                 \\|__|  \\|_______|\\|_______|\\|_______|
                                                   \\|___|/                                                       `);

                                                   

var rl = new readline.Interface({
  "input": process.stdin,
  "output": process.stdout
});

async function run() {                                 

const token = await rl.question('Enter the token : ');
const bot = new Client({
  checkUpdate: false,
});
bot.login(token)
bot.on('ready', async () => {
  console.log(`${bot.user.tag} is ready!`);
})
await sleep(2000);

await sleep (1000)
 
console.clear()
await sleep (500)
const jsp = await rl.question(" [1] Vanity locker     \n [2] Vanity sniper    \n [3] Vanity sniper and then locker \n")
await sleep(500)
console.clear()
switch (jsp) {
  case "1":
    console.log(`
    _      ___ ________  ________   ___  _________    ___    ___      ___       ________  ________  ___  __    _______   ________     
    |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\  \\     |\\   __  \\|\\   ____\\|\\  \\|\\  \\ |\\  ___ \\ |\\   __  \\    
    \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\    \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\/  /|\\ \\   __/|\\ \\  \\|\\  \\   
     \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\    \\ \\   ___  \\ \\  \\_|/_\\ \\   _  _\\  
      \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\| 
       \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /           \\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\\\ _\\ 
        \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /             \\|_______|\\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|
                                                       \\|___|/                                                                           
`)
    var guildid = (await rl.question("Input the guildId you want :")).trim();
    var old = await rl.question("Paste the url to lock :")
    setInterval( async function () {
      
      var guild = await bot.guilds.fetch(guildid)
      var logs = await guild.fetchAuditLogs({"type": 1, "limit": 3});
      
      var entries = logs.entries.first(3).filter(function(e) {
        var createat = new Date(Number((BigInt(e.id) >> 22n) + 1420070400000n)).getTime();
        return (createat < (Date.now() - 1046));
        
      });
      var entry = entries[0];
      
      if (!entry) return;
      var executor = await guild.members.fetch(entry.executor.id);
      
      if(!entry.changes) return
      if(executor.id == bot.user.id) return;
      var haschanged = false
      for (let c = 0; c < entry.changes.length; c++) {
        const change = entry.changes[c];
        if(change.key == 'vanity_url_code') haschanged = true
        
      }
      if(haschanged) {
        try {
        guild.setVanityCode(old)
        executor.kick().catch(console.error)
        }catch(err) {console.log(err)}
      } 
      }, 256)
    break;
      case "2":
        var guildid = (await rl.question("Input the guildId you want :")).trim();
        await sleep(500)
        var vanity = await rl.question("Give me the vanity you want to snipe (without https://discord.gg/) :")
        await sleep (1000)
        var time = await rl.question ("Give me a time between each trial in milliseconds (recommended 300 milliseconds) :")
        await sleep (1000)
        var ouiounon = await rl.question("Would you be informated by a webhook ? \n [y] yes \n [n] no \n")
        await sleep (1000)

        switch (ouiounon) {
          case "y":
            var weebhook = await rl.question("Enter the webhook URl : ")
            await sleep (1000)
            const message = await rl.question("Enter the message will be send : ")
            const hook = new Webhook(weebhook);
            const IMAGE_URL = 'https://imgs.search.brave.com/vJ_i9t4OqNIMoeeaIpataNWBZ8vhgr1xLCUWeAKO6pA/rs:fit:1200:1200:1/g:ce/aHR0cDovL25vdnJp/dHNjaC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/V2FsbHBhcGVyLTA4/LmpwZw';
            hook.setUsername('Vanity sniper');
            hook.setAvatar(IMAGE_URL);
            console.clear()
            console.log(`
            ___      ___ ________  ________   ___  _________    ___    ___      ________  ________   ___  ________  _______   ________     
            |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\   ____\\|\\   ___  \\|\\  \\|\\   __  \\|\\  ___ \\ |\\   __  \\    
            \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\___|\\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\   __/|\\ \\  \\|\\  \\   
             \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\_____  \\ \\  \\\\ \\  \\ \\  \\ \\   ____\\ \\  \\_|/_\\ \\   _  _\\  
              \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\|____|\\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\_|\\ \\ \\  \\\\  \\| 
               \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /            ____\\_\\  \\ \\__\\\\ \\__\\ \\__\\ \\__\\    \\ \\_______\\ \\__\\\\ _\\ 
                \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /            |\\_________\\|__| \\|__|\\|__|\\|__|     \\|_______|\\|__|\\|__|
                                                               \\|___|/             \\|_________|                                             
                                                                                                                                `)        
            setInterval( async function () {
              var date = new Date();
              var guild = await bot.guilds.fetch(guildid);
              guild.setVanityCode(vanity).then(function (response) {
                console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL RECUPERER ! https://discord.gg/" + response.code)
                hook.send(message);
                return;
              }).catch(function (error) {
              console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL NON DISPONIBLE https://discord.gg/" + vanity)
              })
              
            }, time)
            break;
          case "n":
            console.clear()
            console.log(`
            ___      ___ ________  ________   ___  _________    ___    ___      ________  ________   ___  ________  _______   ________     
            |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\   ____\\|\\   ___  \\|\\  \\|\\   __  \\|\\  ___ \\ |\\   __  \\    
            \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\___|\\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\   __/|\\ \\  \\|\\  \\   
             \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\_____  \\ \\  \\\\ \\  \\ \\  \\ \\   ____\\ \\  \\_|/_\\ \\   _  _\\  
              \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\|____|\\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\_|\\ \\ \\  \\\\  \\| 
               \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /            ____\\_\\  \\ \\__\\\\ \\__\\ \\__\\ \\__\\    \\ \\_______\\ \\__\\\\ _\\ 
                \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /            |\\_________\\|__| \\|__|\\|__|\\|__|     \\|_______|\\|__|\\|__|
                                                               \\|___|/             \\|_________|                                             
                                                                                                                                `) 
            setInterval( async function () {
              var date = new Date();
              var guild = await bot.guilds.fetch(guildid);
              guild.setVanityCode(vanity).then(function (response) {
                console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL RECUPERER ! https://discord.gg/" + response.code)
                return;
              }).catch(function (error) {
              console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL NON DISPONIBLE https://discord.gg/" + vanity)
              })
              
            }, time)
          break;
          default:
            break;
        }
        
      break;
      case "3":
        var guildid = (await rl.question("Input the guildId you want :")).trim();
        await sleep(500)
        var vanity = await rl.question("Give me the vanity you want to snipe (without https://discord.gg/) :")
        await sleep (1000)
        var time = await rl.question ("Give me a time between each trial in milliseconds (recommended 300 milliseconds) :")
        await sleep (1000)
        var ouiounon = await rl.question("Would you be informated by a webhook ? \n [y] yes \n [n] no \n")
        switch (ouiounon) {
          case "y":
            var weebhook = await rl.question("Enter the webhook URl : ")
            await sleep (1000)
            message = await rl.question("Enter the message will be send : ")
            const hook = new Webhook(weebhook);
                const IMAGE_URL = 'https://imgs.search.brave.com/vJ_i9t4OqNIMoeeaIpataNWBZ8vhgr1xLCUWeAKO6pA/rs:fit:1200:1200:1/g:ce/aHR0cDovL25vdnJp/dHNjaC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/V2FsbHBhcGVyLTA4/LmpwZw';
                hook.setUsername('Vanity sniper');
                hook.setAvatar(IMAGE_URL);
                console.clear()
                console.log(`
                ___      ___ ________  ________   ___  _________    ___    ___      ________  ________   ___  ________  _______   ________     
                |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\   ____\\|\\   ___  \\|\\  \\|\\   __  \\|\\  ___ \\ |\\   __  \\    
                \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\___|\\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\   __/|\\ \\  \\|\\  \\   
                 \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\_____  \\ \\  \\\\ \\  \\ \\  \\ \\   ____\\ \\  \\_|/_\\ \\   _  _\\  
                  \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\|____|\\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\_|\\ \\ \\  \\\\  \\| 
                   \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /            ____\\_\\  \\ \\__\\\\ \\__\\ \\__\\ \\__\\    \\ \\_______\\ \\__\\\\ _\\ 
                    \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /            |\\_________\\|__| \\|__|\\|__|\\|__|     \\|_______|\\|__|\\|__|
                                                                   \\|___|/             \\|_________|                                             
                                                                                                                                    `) 
                var interval =setInterval( async function () {
                  var date = new Date();
                  var guild = await bot.guilds.fetch(guildid);
                  guild.setVanityCode(vanity).then(async function (response) {
                console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL RECUPERER ! https://discord.gg/" + response.code)
                hook.send(message);
                clearInterval(interval)
                console.clear();
                console.log(`
    _      ___ ________  ________   ___  _________    ___    ___      ___       ________  ________  ___  __    _______   ________     
    |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\  \\     |\\   __  \\|\\   ____\\|\\  \\|\\  \\ |\\  ___ \\ |\\   __  \\    
    \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\    \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\/  /|\\ \\   __/|\\ \\  \\|\\  \\   
     \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\    \\ \\   ___  \\ \\  \\_|/_\\ \\   _  _\\  
      \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\| 
       \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /           \\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\\\ _\\ 
        \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /             \\|_______|\\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|
                                                       \\|___|/                                                                           
                `)
      var guildid = (await rl.question("Input the guildId you want :")).trim();
      setInterval( async function () {
      
      var guild = await bot.guilds.fetch(guildid)
      var logs = await guild.fetchAuditLogs({"type": 1, "limit": 3});
      
      var entries = logs.entries.first(3).filter(function(e) {
        var createat = new Date(Number((BigInt(e.id) >> 22n) + 1420070400000n)).getTime();
        return (createat < (Date.now() - 1046));
        
      });
      var entry = entries[0];
      
      if (!entry) return;
      var executor = await guild.members.fetch(entry.executor.id);
      
      if(!entry.changes) return
      if(executor.id == bot.user.id) return;
      var haschanged = false
      for (let c = 0; c < entry.changes.length; c++) {
        const change = entry.changes[c];
        if(change.key == 'vanity_url_code') haschanged = true
        
      }
      if(haschanged) {
        try {
        //var old = entry.changes[0].old
        guild.setVanityCode(vanity)
        executor.kick().catch(console.error)
        }catch(err) {console.log(err)}
      } 
      }, 256)
    
              }).catch(function (error) {
              console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL NON DISPONIBLE https://discord.gg/" + vanity)
              })
              
            }, time)  

            break;
            case "n":

            var interval =setInterval( async function () {
              var date = new Date();
              var guild = await bot.guilds.fetch(guildid);
              guild.setVanityCode(vanity).then(async function (response) {
            console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL RECUPERER ! https://discord.gg/" + response.code)
            clearInterval(interval)
            console.log(`
            _      ___ ________  ________   ___  _________    ___    ___      ___       ________  ________  ___  __    _______   ________     
            |\\  \\    /  /|\\   __  \\|\\   ___  \\|\\  \\|\\___   ___\\ |\\  \\  /  /|    |\\  \\     |\\   __  \\|\\   ____\\|\\  \\|\\  \\ |\\  ___ \\ |\\   __  \\    
            \\ \\  \\  /  / | \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\|___ \\  \\_| \\ \\  \\/  / /    \\ \\  \\    \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\/  /|\\ \\   __/|\\ \\  \\|\\  \\   
             \\ \\  \\/  / / \\ \\   __  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\ \\    / /      \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\    \\ \\   ___  \\ \\  \\_|/_\\ \\   _  _\\  
              \\ \\    / /   \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\   \\ \\  \\   \\/  /  /        \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\| 
               \\ \\__/ /     \\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\   \\ \\__\\__/  / /           \\ \\_______\\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\_______\\ \\__\\\\ _\\ 
                \\|__|/       \\|__|\\|__|\\|__| \\|__|\\|__|    \\|__|\\___/ /             \\|_______|\\|_______|\\|_______|\\|__| \\|__|\\|_______|\\|__|\\|__|
                                                               \\|___|/                                                                           
                        `)
              var guildid = (await rl.question("Input the guildId you want :")).trim();
              setInterval( async function () {
              
              var guild = await bot.guilds.fetch(guildid)
              var logs = await guild.fetchAuditLogs({"type": 1, "limit": 3});
              
              var entries = logs.entries.first(3).filter(function(e) {
                var createat = new Date(Number((BigInt(e.id) >> 22n) + 1420070400000n)).getTime();
                return (createat < (Date.now() - 1046));
                
              });
              var entry = entries[0];
              
              if (!entry) return;
              var executor = await guild.members.fetch(entry.executor.id);
              
              if(!entry.changes) return
              if(executor.id == bot.user.id) return;
              var haschanged = false
              for (let c = 0; c < entry.changes.length; c++) {
                const change = entry.changes[c];
                if(change.key == 'vanity_url_code') haschanged = true
                
              }
              if(haschanged) {
                try {
                //var old = entry.changes[0].old
                guild.setVanityCode(vanity)
                executor.kick().catch(console.error)
                }catch(err) {console.log(err)}
              } 
              }, 256)

          }).catch(function (error) {
          console.log("[" + ([date.getHours(), date.getMinutes(), date.getSeconds()]).join(":") + "] ~ URL NON DISPONIBLE https://discord.gg/" + vanity)
          })
          
        }, time)
              break; 
          default:
            break;
        }  
           
        break;
  default:
    break;
}

}
run()

