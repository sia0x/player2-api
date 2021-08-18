let dotEnv = require("dotenv");
dotEnv = dotEnv.config();

export default {
  PORT: process.env.PORT,
};
