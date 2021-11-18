const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Events");
table.setHeading("Events", "Load status");
const allevents = [];
module.exports = async (client) => {
  try{
    const load_dir = (dir) => {
      const event_files = fs.readdirSync(`./events/${dir}`).filter((file) => file.endsWith(".js"));
      for (const file of event_files){
        const event = require(`../events/${dir}/${file}`)
        let eventName = file.split(".")[0];
        allevents.push(eventName);
        client.on(eventName, event.bind(null, client));
      }
    }
    await ["client", "guild"].forEach(e=>load_dir(e));
    for (let i = 0; i < allevents.length; i++) {
        try {
            table.addRow(allevents[i], "Ready");
        } catch (e) {
            console.log(String(e.stack).red);
        }
    }
    console.log(table.toString().cyan);
    try{
      const stringlength = 69;
      console.log("\n")
      console.log("Kicking EchoBot's Butt!".yellow)
    }catch{ /* */ }
    try{
      const stringlength2 = 69;
      console.log("\n")
      console.log("Spilling Water On His Face!".red)
    }catch{ /* */ }
  }catch (e){
    console.log(String(e.stack).bgRed)
  }
};
