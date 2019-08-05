const WebSocket = require("ws");

const WsServer = new WebSocket.Server({
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