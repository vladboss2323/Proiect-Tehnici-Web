// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

const fs = require("fs");

// Aplicatia
const app = express();
app.listen("3000", () =>
    console.log("Server started at: http://localhost:3000")
);
app.use(express.static("public"));
app.use(express.json({
    limit: "10mb"
}));

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

function makeid(length = 8) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Create
app.post("/site", (req, res) => {
    const etape = readJSONFile("database.js");
    console.log(req.body);
    req.body.id = makeid();
    etape.push(req.body);
    writeJSONFile(etape);
    res.send(req.body);
    // Completati cu codul vostru aici
});

// Read One
app.get("/site/:id", (req, res) => {
    const etape = readJSONFile();
    var found = false;
    console.log(etape);
    for(i = 0 ; i < etape.length ; i++)
    {
        if(etape[i].id == req.params.id)
        {
            res.send(etape[i]);
            found = true;
            break;
        }
    }
    if(!found)
    res.send("Not found");
    // Completati cu codul vostru aici
});

// Read All
app.get("/site", (req, res) => {
    const etape = readJSONFile();
    res.send(etape);
    // Completati cu codul vostru aici
});

// Update
app.put("/site/:id", (req, res) => {
    const etape = readJSONFile();
    for (let i = 0; i < etape.length; i++)
        if (etape[i].id == req.params.id) {
            etape[i] = req.body;
            break;
        }
    writeJSONFile(etape);
    res.send(etape);
});

// Delete
app.delete("/site/:id", (req, res) => {
    const etape = readJSONFile();
    for (let i = 0; i < etape.length; i++)
        if (etape[i].id == req.params.id) {
            console.log("found");
            etape.splice(i,1);
            break;
        }
    writeJSONFile(etape);
    res.send(etape);
    // Completati cu codul vostru aici
});

// Functia de citire din fisierul db.json
function readJSONFile() {
    return JSON.parse(fs.readFileSync("database.json"))["site"];
}

// Functia de scriere in fisierul db.json
function writeJSONFile(content) {
    fs.writeFileSync(
        "database.json",
        JSON.stringify({ site: content }),
        "utf8",
        err => {
            if (err) {
                console.log(err);
            }
        }
    );
}
