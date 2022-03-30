const fs = require('fs'); 
const data = fs.readFileSync('data.json')
const info = JSON.parse(data)
console.log(info)

const born = {
    "Born": "New York"
}
const name = {
    "Name": "Parker"
}

const dataName = JSON.stringify(name); 
const newData = JSON.stringify(born); 

fs.writeFile('data.json', newData, finished)

function finished() {
    console.log('all set')
}
