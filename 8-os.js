const os = require('os')

const user = os.userInfo();

console.log(user)

console.log(`The system up time is ${os.uptime()}`)


const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOs)