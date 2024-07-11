const noteArea = document.getElementById('noteArea');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

document.addEventListener('DOMContentLoaded', () => {
    const textArea = localStorage.getItem('note');
    if (textArea) {
        noteArea.value = textArea
    }
});

saveButton.addEventListener('click', () => {
    const savedText = noteArea.value;
    localStorage.setItem('note', savedText);
    alert('Notatka zapisana');
});

clearButton.addEventListener('click', () => {
    localStorage.removeItem('note');
    noteArea.value = '';
    alert('Notatka została usunięta z pamięci.');
})