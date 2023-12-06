document.addEventListener("DOMContentLoaded", function () {
    loadNotes();
});

function addNote() {
    const notesContainer = document.getElementById("notes-container");
    const note = document.createElement("div");
    note.className = "note";
    note.contentEditable = true;
    notesContainer.appendChild(note);
}

function deleteNote() {
    const notesContainer = document.getElementById("notes-container");
    const selectedNote = document.querySelector(".note:focus");
    if (selectedNote) {
        notesContainer.removeChild(selectedNote);
    }
}

function saveNotes() {
    const notesContainer = document.getElementById("notes-container");
    const notes = notesContainer.querySelectorAll(".note");

    const savedNotes = [];
    notes.forEach((note) => {
        savedNotes.push(note.innerHTML);
    });
    console.log(savedNotes);
}

function toggleFormat(command) {
    document.execCommand(command, false, null);
}

function changeFont(font) {
    document.execCommand("fontName", false, font);
}

function changeFontSize(size) {
    document.execCommand("fontSize", false, size);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("notebook").classList.toggle("dark-mode");
    document.querySelectorAll(".note").forEach((note) => {
        note.classList.toggle("dark-mode");
    });
}
