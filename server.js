"use strict";

const express = require("express"),
      path    = require("path"),
      multer  = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/views/index.html");
});

app.post("/upload", upload.single("file"), (request, response) => {
  const info = {size: request.file.size};
	response.json(info);
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
