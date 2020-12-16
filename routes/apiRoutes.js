const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

//Routing
//---------------------------------------------------------------------------

module.exports = (app) => {
   
    app.get("/api/notes", (req,res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        // readData();
        res.json(savedNotes);
    });
        
    //Post Route
    //---------------------------------------------------------------------------
    app.post('/api/notes', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let newNote = req.body;
        newNote.id = uniqid();
        savedNotes.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        console.log(`Note saved to db.json. Content: ${newNote}`);
        res.json(newNote);
    });

    // Deleting notes by id
    //---------------------------------------------------------------------------
    app.delete("/api/notes/:id", (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        savedNotes = savedNotes.filter(note => {
            note.id !== req.params.id;
        })
        
        for (currNote of savedNotes) {
            currNote.id = newID.toString();
            newID++;
        }

        fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
        res.json(savedNotes);
    });

};
