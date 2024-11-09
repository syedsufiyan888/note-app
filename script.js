// Yo here we are declaring variables and getting elements from the html to js 
// so that we can perform operations on the variables
const noteInput = document.getElementById('noteInput');
const addNoteButton = document.getElementById('addNoteButton');
const notescontainer = document.getElementById('notesContainer');
//console.log('noteInput');

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];
renderNotes();

//Function render notes
function renderNotes(){
    notescontainer.innerHtml = '';
    notes.forEach((note,index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
        <span class="note-content" contentedtable="false">${note}</span>
        <button class="editBtn>Edit</button>
        <button class="deleteBtn">Delete</button>
        `;
        notescontainer.appendChild(noteElement);

        //Event Listener
        noteElement.querySelector('.deleteBtn').addEventListener('click',()=>{
            deleteNotes(index)
        })

        //Event Listener
        noteElement.querySelector('.editBtn').addEventListener('click',(e)=>{
            toggleEditMode(e,index)
        })
    });
}