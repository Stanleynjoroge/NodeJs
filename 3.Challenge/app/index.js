const fs = require("fs").promises;
const path = require("path");
const logEvents = require("./logEvents");
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("log", (msg) => logEvents(msg));
// call logEvent s



setTimeout(() => {
  customEmitter.emit("log", "new log emitted successfully  😂🤣");
}, 2000);
