function link() {
    // Ganti URL di bawah dengan link file Google Drive Anda
    var driveFileUrl = 'https://drive.google.com/drive/folders/1vM_I8lWdpu2KulIacneVyhPfSSv4L0rY'; // Ganti FILE_ID dengan ID file Anda
    window.open(driveFileUrl, '_blank'); // Membuka link di tab baru
}




const text = "";
const typingTextElement = document.getElementById("typing-text");
let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); 
    }
}

type(); 

