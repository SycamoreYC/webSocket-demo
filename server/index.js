const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

// wss refers to server
wss.on("connection", (ws) => {
  // ws refers to a single connection of server side
  console.log("New client connected");

  ws.on("message", (data) => {
    console.log(data);
    if (data === "How are you today?") {
      ws.send("I am fine thanks and you?");
    } else {
      ws.send(data.toUpperCase());
    }
  });

  ws.on("close", () => {
    console.log("Client has disconnected!");
  });
});
