const http = require("http");
const app = require("./app");
const PORT = 8000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
