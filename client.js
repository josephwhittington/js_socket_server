const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", ()=>{
    console.log("opening socket");
    ws.send(JSON.stringify({data: "test"}));
})