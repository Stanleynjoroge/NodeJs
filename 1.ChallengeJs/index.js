 
const http = require('http');
 const myData = require('./myData.json')
const requestListener = (req, res)=>{
  
     
  
   
  const jsonContent = JSON.stringify(myData);
  res.end(jsonContent);
};
 
const server = http.createServer(requestListener);
 
server.listen(3000,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});

  