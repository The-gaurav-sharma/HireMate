require("dotenv").config()
const dns = require("dns")

const app = require("./src/app")
const connectToDB = require("./src/config/database")

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

connectToDB()




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});