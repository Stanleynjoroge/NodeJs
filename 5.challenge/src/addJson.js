import fs from "fs";
import fsPromises from 'fs/promises'
import path from "path";
import { v4 as uuidv4 } from 'uuid';



const addJsonData = async (Name, Price, Description) => {
  try {
    const newData = {
        id: uuidv4(),
        Name: Name,
        Price: Price,
        Description: Description
      }
    

    const myData = path.join( "myDb");
    const jsonData = path.join(myData, "myDb.json");

 
    if (!fs.existsSync(myData)) {
      await fsPromises.mkdir(myData);
      console.log("myDb folder has been created");
    }


    if (!fs.existsSync(jsonData)) {
      await fsPromises.writeFile(jsonData, JSON.stringify([]));
      console.log("myDb.json file has been created");
    }


    let existingData = [];
    try {
      const data = await fsPromises.readFile(jsonData);
      existingData = JSON.parse(data);
    } catch (error) {
      console.error("Error reading existing data:", error);
    }



    existingData.push(newData);


    await fsPromises.writeFile(jsonData, JSON.stringify(existingData, null, 2));

    console.log("Data has been added to myDb.json");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
export default addJsonData ;
