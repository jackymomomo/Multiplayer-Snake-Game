
const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a clientection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

// add connect event 
conn.on('connect', () => {
  console.log('connection verify Established')

  //adds name to snake 
 conn.write('Name: JLR');
});
  // update connect function to handle data 
  conn.on("data", (msg) => {
    console.log('Server says:', msg);
  });
return conn;
};
 

//EXPORT
module.exports = { connect }





//for (let i = 0; i < key; i++) {
  //   setInterval(() => {
  //       conn.write(key) 
  //   }, interval );

  // conn.on('end', () => {
    // console.log('conn is disconnected')
    //   })