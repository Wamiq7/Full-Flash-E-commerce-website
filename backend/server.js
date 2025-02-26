const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

const connectDatabase = require("./config/database");

//handling uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting the server due to uncaught exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
//unhandled error rejection : jub hum mongo kay URL mai koi mistake kardain tou aik error ata hai terminal per but server close nahi hota tou ab hum aisa function banaye gaay kaah jis say server close hojaye agar URL mai koi mistake ho tou

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
