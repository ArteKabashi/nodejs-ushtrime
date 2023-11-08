//crud
//create,read,update,delete

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/arte") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html>");
    res.write("<head><title>Serveri</title></head>");
    res.write("<body><h1>Hello from Arte</h1></body>");
    res.write("</html>");
    return res.end;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html>");
  res.write("<head><title>Serveri</title></head>");
  res.write("<body><h1>Hello from nodejs</h1></body>");
  res.write("</html>");
  res.end;
});
server.listen(8000);
