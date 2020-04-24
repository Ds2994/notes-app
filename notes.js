const fs = require('fs');
const chalk = require('chalk');

const getNotes = function() {
    return "All your notes";
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    })
    
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note added!'));
    } else {
        console.log(chalk.red.inverse('Title already taken!'));
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const unremovedNotes = notes.filter(function(note) {
        return note.title !== title;
    });

    if(notes.length === unremovedNotes.length) {
        console.log(chalk.red.inverse('No Note Found!'));
    }else {
        console.log(chalk.green.inverse('Note Removed!'));
    }

    saveNotes(unremovedNotes);
}

const saveNotes = function(notes) {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const notesJSON = dataBuffer.toString();
        return JSON.parse(notesJSON); 
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}