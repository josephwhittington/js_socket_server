const WebSocket = require("ws");

const ws = new WebSocket.Server({
    port: 8080,
    perMessageDeflate: 
    {
        chunkSie: 1024,
        memLevel: 7,
        level: 3
    },
    zlibInflateOptions: {
        chunkSize: 10 * 1024
    },
    concurrencyLimit: 10,
    threshold: 1024
});

ws.on("connection", (conn)=>{
    console.log("Connected");
    
    conn.on("message", (data)=>{
        console.log(data);
    })
});