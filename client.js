const { Server } = require("http");
const net = require("net");
const { endianness } = require("os");


// establishes a clientection with the game server
const connect = function (key, interval, next) {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  process.stdin.on('data', (message) => {
    conn.write(message);
  });

// add connect event 
conn.on('connect', () => {
  console.log('connection Established')
  //adds name to snake 
 conn.write('Name: JLR');
 for (let i = 0; i < key.length; i++) {
  setInterval(() => {
      //conn.write(key) 
  }, interval );
  }
});
  // update connect function to handle data 
  conn.on("data", message => {
    console.log(message);
  });

conn.on('end', () => {
console.log('conn is disconnected')
connect.stop()
})

};

console.log("connecting ...");
 const goUp = () => {
  connect('Move: up', 50, goDown)
 }
  const goDown = () => {
    connect("Move: down", 50, goRight)
  
   }
   const goRight = () => {
    connect('Move: right', 50, goLeft)
   
   }
   const goLeft = () => {
    connect('Move: left', 50, null)
  
   }
 
 
 goUp()
//  conn.closed()

module.export = connect;