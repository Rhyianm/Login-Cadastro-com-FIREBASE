import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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

document.getElementById('btnLogout').addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = "Login.html";
    }).catch((error) => {
        console.error("Erro ao sair:", error);
    });
});