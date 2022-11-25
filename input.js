let connection;

const setupInput = (conn) => {
  connection = conn
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.on('data', handleUserInput)
  stdin.resume()
  return stdin;
};

module.exports = { setupInput }

const handleUserInput = function (key) {
  process.stdin.on('data', (key) => {
    process.stdout.write('')
    if (key === '\u0003'){
      process.exit()
    }
    if (key === 'w'){
      connection.write('Move: up')
    } if (key === 'a'){
      connection.write('Move: left')
    } if (key === 's'){
      connection.write('Move: down')
    } if (key === 'd'){
      connection.write('Move: right')
    }
    
    console.log(key)
  })
};

handleUserInput()
setupInput()




