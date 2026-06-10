const form = document.getElementById('form-cadastro');

form.addEventListener('submit', async (event) => {
    // Impede a página de recarregar
    event.preventDefault();

    // Captura os elementos e limpa os espaços em branco com .trim()
    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const preco = document.getElementById('preco').value;
    const categoria = document.getElementById('categoria').value;
    const fotoInput = document.getElementById('foto');

    // Cria o container virtual multipart/form-data
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('descricao', descricao);
    formData.append('preco', preco);
    formData.append('categoria', categoria);
    
    // Insere o arquivo binário físico da imagem (.files[0] pega o primeiro arquivo)
    formData.append('foto', fotoInput.files[0]);

    try {
        // Dispara os dados para a API do seu Back-end
        const response = await fetch('http://localhost:3000/produtos', {
            method: 'POST',
            body: formData // Enviamos o formData bruto, sem JSON.stringify
        });

        if (response.ok) {
            alert('Prato cadastrado com sucesso! 🍕');
            // Redireciona o usuário para o cardápio principal
            window.location.href = 'index.html';
        } else {
            const erro = await response.json();
            alert('Erro ao cadastrar produto: ' + (erro.mensagem || response.statusText));
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Não foi possível conectar ao servidor backend.');
    }
});