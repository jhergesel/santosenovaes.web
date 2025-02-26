import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const db = getFirestore(); // Initialize Firestore

// Function to add a new contact
async function addContact(nome, cpf, telefone, email, dataNascimento) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            nome,
            cpf,
            telefone,
            email,
            dataNascimento
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Dados enviados com sucesso!");
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Erro ao enviar dados.");
    }
}

// Event listener for contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Call the function to add the contact
    addContact(nome, cpf, telefone, email, dataNascimento);
});

// Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === 'admin123') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

// Other existing code...
