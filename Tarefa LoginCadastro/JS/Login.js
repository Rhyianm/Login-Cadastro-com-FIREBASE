import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDc7G5G-5gtGLu8ezVS7XFTOvhT8IfA38c",
    authDomain: "projeto-backy.firebaseapp.com",
    projectId: "projeto-backy",
    storageBucket: "projeto-backy.firebasestorage.app",
    messagingSenderId: "848211316493",
    appId: "1:848211316493:web:f4b5198b059c5701a6ea44",
    measurementId: "G-3REVXBZQZX"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Seleção de Elementos (Sempre no topo para evitar erros)
const form = document.getElementById('loginForm');
const inputs = form.querySelectorAll('input');
const btnSubmit = document.getElementById('btnSubmit');

// 1. Validação de campos (Habilita o botão)
function validarLogin() {
    let todosPreenchidos = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
        }
    });
    btnSubmit.disabled = !todosPreenchidos;
}

inputs.forEach(input => {
    input.addEventListener('input', validarLogin);
});

// 2. Lógica do Olhinho (Mostrar/Esconder senha)
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

// 3. Login Real no Firebase
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Feedback visual
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Verificando...";

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        // Tenta autenticar o usuário
        await signInWithEmailAndPassword(auth, email, senha);

        // Se der certo, redireciona para a home
        window.location.href = "home.html";

    } catch (error) {
        console.error("Erro ao logar:", error.code);

        // Mensagem de erro amigável
        let msg = "E-mail ou senha incorretos.";
        if (error.code === 'auth/user-not-found') msg = "Usuário não encontrado.";
        if (error.code === 'auth/wrong-password') msg = "Senha incorreta.";

        alert(msg);

        // Reativa o botão se houver erro
        btnSubmit.disabled = false;
        btnSubmit.textContent = "Entrar";
    }
});