const connect = require('./client')


const setupInput = () => {
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.resume()
}
const handleUserInput = function () {
  stdin.on('data', handleUserInput)
};

setupInput()