const nomeUsuario = document.getElementById('nome-usuario');
nomeUsuario.textContent = "Ana Katy Romão Vasconcellos"; 

const fotoPerfil = document.querySelector('#foto-perfil');
fotoPerfil.src = "https://wallpapers.com/images/high/cute-stitch-profile-picture-2pi7ctlxbr89bv8a.webp";

const container = document.getElementById('container-perfil');
container.style.backgroundColor = "#6796d6"; 

const badgeStatus = document.querySelector('#badge-status');
badgeStatus.classList.add('online');
badgeStatus.textContent = "Status: Ativo";

const skills = document.querySelectorAll('.skill');
console.log("Total de skills encontradas:", skills.length);