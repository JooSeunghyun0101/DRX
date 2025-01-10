var express = require("express");
var app = express();

app.get("/DRX", function (req: any, res: any) {
  const { OC, target, MST, type } =
    req.query;

  var api_url =
    "http://www.law.go.kr/DRF/lawService.do?";
  var request = require("request");
  var options = {
    url: api_url,
    qs: { OC, target, MST, type },
  };

  request.get(options, function (error: any, response: any, body: any) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "application/xml;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/DRX?OC=carefree0101&target=law&MST=152338&type=XML app listening on port 3000!"    
  );
});