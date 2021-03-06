const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Adding a note
yargs.command({
    command: 'add',
    describe: 'Adding a note!',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: "string"
        }
    }, 
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
}).argv

//Remove a note
yargs.command({
    command: 'remove',
    describe: 'Removing a note!',
    builder: {
        title: {
            describe: 'Remove Title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
}).argv

//List all notes
yargs.command({
    command: 'list',
    describe: 'Listing all notes!',
    handler() {
        notes.listNotes();
    }
}).argv

//Read a note
yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    handler: () => console.log("Reading a note!")
}).argv