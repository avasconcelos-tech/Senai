const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.PORT || 3000;

// Testando conexão de forma assíncrona com Promises e iniciando o servidor
async function startServer() {
    try {
        const connection = await pool.getConnection();
        console.log("Conexão com MySQL estabelecida! ✔️");
        connection.release();

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT} 🚀`);
            console.log(`Rotas MVC ativas e escutando!`);
        });
    } catch (err) {
        console.error("Erro ao conectar ao banco de dados:", err && err.message ? err.message : err);
        const startAnyway = process.env.START_ON_DB_ERROR === 'true';
        if (startAnyway) {
            console.warn("INICIANDO O SERVIDOR SEM CONEXÃO AO BANCO (fallback ativado).");
            app.listen(PORT, () => {
                console.log(`Servidor rodando na porta ${PORT} 🚀 (sem DB)`);
                console.log(`Rotas MVC ativas e escutando!`);
            });
        } else {
            console.error("Encerrando processo. Defina START_ON_DB_ERROR=true para iniciar sem DB.");
            process.exit(1);
        }
    }
}

startServer();