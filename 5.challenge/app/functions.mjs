// functions.mjs

import fs from "fs";
import myDb from "./myDb/myDb.json" assert { type: "json" };
import path from "path";
import { v4 as uuidv4 } from 'uuid';

const addJsonData = async (Name, Price, Description) => {
  try {
    const newData = {
      id: uuidv4(),
      Name: Name,
      Price: Price,
      Description: Description
    };

    myDb.push(newData);
    await saveData(myDb);

    return newData;
  } catch (error) {
    throw new Error("Error adding data to myDb.json");
  }
};

const deleteDataById = async (id) => {
  try {
    const newData = myDb.filter((item) => item.id !== id);
    if (newData.length === myDb.length) {
      throw new Error("Data with provided ID not found");
    }
    await saveData(newData);
    return "Deleted successfully";
  } catch (error) {
    throw new Error("Error deleting data from myDb.json");
  }
};

const updateDataById = async (id, newData) => {
  try {
    const index = myDb.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Data with provided ID not found");
    }
    myDb[index] = { id, ...newData };
    await saveData(myDb);
    return "Updated successfully";
  } catch (error) {
    throw new Error("Error updating data in myDb.json");
  }
};

// const generateId = () => {
//   return Math.floor(Math.random() * 1000000);
// };

const saveData = async (data) => {
  try {
    fs.writeFileSync("./myDb/myDb.json", JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error("Error saving data to myDb.json");
  }
};

export { addJsonData, deleteDataById, updateDataById };
