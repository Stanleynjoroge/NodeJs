const fs = require("fs");
const http = require("http");

const getCont = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

var server = http.createServer(function (req, res) {
  const img1 = fs.readFileSync(`../htmlFile/Cat.jpg`);
  const img2 = fs.readFileSync(`../htmlFile/img1.png`);


  if (req.url === "/") {
    // res.write(readFile);
    res.write(getCont("../htmlFile/Home.html"));
  } else if (req.url === "/signup") {
    res.write(getCont("../htmlFile/signUp.html"));
  } else if (req.url === "/app.css") {
    res.write(getCont("../htmlFile/app.css"));
  } else if (req.url === "/Cat.jpg") {
    res.write(img1);
} else if (req.url === "/img1.png") {
    res.write(img2);
  } else {
    res.statusCode = 404;
  }

  res.end();
});

server.listen(8080, () => {
  console.log("Listening on port 8080");
});
