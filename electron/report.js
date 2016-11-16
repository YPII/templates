var mustache = require("mustache")
var data = require("./data.json");
 
var output = mustache.render("{{PLastName}}", data)
console.log(output)

document.getElementById("patientName").innerHTML = output