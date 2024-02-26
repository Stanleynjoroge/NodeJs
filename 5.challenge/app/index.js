// Import required modules
import express from "express";
import { validationResult } from "express-validator";
import { body } from "express-validator";
import { addJsonData, deleteDataById, updateDataById } from "./functions.mjs";
import myDb from "./myDb/myDb.json" assert {type:"json"}

// Define your custom middleware
const myMiddleware = [
  // Escape and sanitize input fields
  body("Name").escape(),
  body("Description").escape(),
  // Validate fields
  body("Name").isString(),
  body("Price").isNumeric(),
  body("Description").isString().isLength({ min: 5, max: 100 }),
];


const app = express();


app.use(express.json());
app.use(myMiddleware);


app.get("/", (req, res) => {
  res.status(200).send("I am healthy 💪");
  console.log("I am very healthy Stanley🤣🤣🤣");
});

app.get("/myDb", (req, res) => {
  res.status(200).send(myDb);
});

app.post("/myDb", async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { Name, Price, Description } = req.body;
  try {
    const newJson = await addJsonData(Name, Price, Description);
    res.status(201).json(newJson);
  } catch (error) {
    console.error("An error occurred:", error.message);
    res.status(500).send(error.message);
  }
});

app.delete("/myDb/:id", async (req, res) => {
  const myspaceId = req.params.id;
  try {
    const result = await deleteDataById(myspaceId);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
    res.status(500).send(error.message);
  }
});

app.put("/myDb/:id", async (req, res) => {
  const myspaceId = req.params.id;
  const newData = req.body;
  try {
    const result = await updateDataById(myspaceId, newData);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
    res.status(500).send(error.message);
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at Port: ${PORT}!`);
});
