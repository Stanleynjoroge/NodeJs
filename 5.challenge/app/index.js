import fs from "fs";
import express from "express";
import myDb from "./myDb/myDb.json" assert { type: "json" };
import addJsonData from "../src/addJson.js";

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("I am healthy 💪");
  console.log("i am very health Stanley🤣🤣🤣");
});
app.get("/myDb", (req, res) => {
  res.status(200).send(myDb);
});
app.post("/myDb", async (req, res) => {
  const { Name, Price, Description } = req.body;
  try {
    const newJson = await addJsonData(Name, Price, Description);
    res.status(201).json(newJson).send(myDb);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Error adding data to myDb.json");
  }
});
app.delete("/myDb/:id", (req, res) => {
  const myspaceId = req.params.id;
  try {
    const newData = myDb.filter((item) => item.id !== myspaceId);

    if (newData.length === myDb.length) {
      return res.status(404).send("Data with provided ID not found");
    }

    fs.writeFileSync("myDb/myDb.json", JSON.stringify(newData, null, 2));

    res.send("Deleted successfully");
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Error deleting data from myDb.json");
  }
});
app.put("/myDd", (req, res) => {

    
});


app.listen(PORT, "localhost", function () {
  console.log(`Server is Listening at Port: ${PORT}!`);
});
