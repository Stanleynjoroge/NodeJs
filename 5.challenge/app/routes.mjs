// routes.mjs

import express from "express";
import { validationResult } from "express-validator";
import { addJsonData, deleteDataById, updateDataById } from "./functions.mjs";
import myDb from "./myDb/myDb.json";
import validationSchema from "./schemaValidators.mjs"; 

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("I am healthy 💪");
  console.log("I am very healthy Stanley🤣🤣🤣");
});

router.get("/myDb", (req, res) => {
  res.status(200).send(myDb);
});

router.post("/myDb", validationSchema, async (req, res) => {
  // Check for validation errors
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

router.delete("/myDb/:id", async (req, res) => {
  const myspaceId = req.params.id;
  try {
    const result = await deleteDataById(myspaceId);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error.message);
    res.status(500).send(error.message);
  }
});

router.put("/myDb/:id", async (req, res) => {
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

export default router;
