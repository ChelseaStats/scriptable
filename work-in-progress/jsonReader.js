let url = "[json_url]]"
let req = new Request(url)
let json = await req.loadJSON()
let output = Object.keys(json)[Math.floor(Math.random()*Object.keys(json).length)];
console.log(output)
