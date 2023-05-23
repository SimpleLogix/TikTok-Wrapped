import { DragAndDropHandler } from './utils/DragDropHandler.js';

// handle when user drags & drops file into drop zone
let handler = new DragAndDropHandler('drop-zone', (json) => {
    // This function will be called when a json file is dropped
    console.log(json);
});



// make call to server to upload file

// make call to server to process file

// save data to local storage

// send data to next page to display

// check if data already exists in local storage