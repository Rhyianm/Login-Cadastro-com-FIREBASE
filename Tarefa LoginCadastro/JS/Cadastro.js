import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDc7G5G-5gtGLu8ezVS7XFTOvhT8IfA38c",
    authDomain: "projeto-backy.firebaseapp.com",
    projectId: "projeto-backy",
    storageBucket: "projeto-backy.firebasestorage.app",
    messagingSenderId: "848211316493",
    appId: "1:848211316493:web:f4b5198b059c5701a6ea44",
    measurementId: "G-3REVXBZQZX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById('cadastroForm');
const inputs = form.querySelectorAll('input');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmaSenha');
const btnSubmit = document.getElementById('btnSubmit');
const senhaErro = document.getElementById('senhaErro');

function validarFormulario() {
    let todosPreenchidos = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') todosPreenchidos = false;
    });

    let senhasIguais = false;
    if (senha.value !== '' && confirmaSenha.value !== '') {
        if (senha.value === confirmaSenha.value) {
            senhasIguais = true;
            senhaErro.textContent = '';
            confirmaSenha.style.borderColor = '#00e676';
        } else {
            senhaErro.textContent = 'As senhas não coincidem.';
            confirmaSenha.style.borderColor = '#ff5252';
        }
    } else {
        senhaErro.textContent = '';
        confirmaSenha.style.borderColor = '#333';
    }

    btnSubmit.disabled = !(todosPreenchidos && senhasIguais);
}

inputs.forEach(input => {
    input.addEventListener('input', validarFormulario);
});

const togglePasswordButtons = document.querySelectorAll('.toggle-password');
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const inputSenha = document.getElementById(targetId);
        if (inputSenha.type === 'password') {
            inputSenha.type = 'text';
            this.classList.add('closed');
        } else {
            inputSenha.type = 'password';
            this.classList.remove('closed');
        }
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    btnSubmit.disabled = true;
    btnSubmit.textContent = "Carregando...";

    const email = document.getElementById('email').value;
    const senhaValor = senha.value; // Usando a variável já mapeada
    const nome = document.getElementById('nome').value;
    const usuario = document.getElementById('usuario').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senhaValor);
        const user = userCredential.user;

        await setDoc(doc(db, "usuarios", user.uid), {
            nomeCompleto: nome,
            nomeUsuario: usuario,
            email: email,
            criadoEm: new Date()
        });

        alert("Conta criada com sucesso!");
        window.location.href = "login.html";

    } catch (error) {
        console.error("Erro ao cadastrar:", error.code);

        let msg = "Erro ao cadastrar.";
        if (error.code === 'auth/email-already-in-use') msg = "Este e-mail já está em uso.";
        if (error.code === 'auth/weak-password') msg = "A senha é muito fraca (mínimo 6 caracteres).";

        alert(msg);

        btnSubmit.disabled = false;
        btnSubmit.textContent = "Cadastrar";
    }
});