const noteArea = document.getElementById('noteArea');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const savePdf = document.getElementById('savePdf');

document.addEventListener('DOMContentLoaded', () => {
    const textArea = localStorage.getItem('note');
        if (textArea) {
            noteArea.value = textArea
        }
        
        saveButton.addEventListener('click', () => {
            const savedText = noteArea.value;
            localStorage.setItem('note', savedText);
            alert('Notatka zapisana');
        });

    clearButton.addEventListener('click', () => {
        localStorage.removeItem('note');
        noteArea.value = '';
        alert('Notatka została usunięta z pamięci.');
    });
});

savePdf.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const notatka = noteArea.value;
        
    doc.text(notatka, 60, 10);
    doc.save('notatka.pdf');
});

