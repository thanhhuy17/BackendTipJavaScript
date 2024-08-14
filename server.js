// Nhiệm vụ khai báo Port và khởi động server.

const app = require("./src/app");

PORT = 5055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
//   notify.send(ping...)
});
