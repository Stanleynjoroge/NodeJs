const fs = require("fs");
const fsPromises = require("fs").promises
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const path = require("path");

const currentDate = format(new Date(), "yyyy/MM.dd\tHH:mm:ss");
const randomId = uuidv4();
console.log(randomId, currentDate);

const logDir = "./logs";
const logFile = "app.txt";
const logEvents = async (message) => {
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      fs.mkdirSync(path.join(__dirname, "logs"));
      console.log('folder should be created')
    }
      var message= `${randomId}\t ${currentDate}\t${message}\n`
   
    await fsPromises
      .appendFile(`${logDir}/${logFile}`, `${message}` )//
      .then(() => console.log(`Data added to file`))
      .catch((err) => console.error(err));
  } catch (error) {
    console.log("Error occured while logging events", error);
  }
};

module.exports = logEvents;
