// index.js

import express from "express";
import routes from "./routes.mjs";


const app = express();
app.use(express.json());
app.use("/", routes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at Port: ${PORT}!`);
});
