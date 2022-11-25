const net = require("net");


// establishes a clientection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

// add clientect event 
conn.on('connect', () => {
 conn.write('Name: JLR')
 console.log('connected god')
});
  // update clientect function to handle data 
  conn.on("data", message => {
    console.log(message);
  });

conn.on('end', () => {
console.log('conn is disconnect')
})

  return conn;
};

console.log("connecting ...");
connect();

module.export = connect;