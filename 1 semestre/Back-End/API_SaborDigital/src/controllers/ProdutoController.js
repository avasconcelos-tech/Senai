const ProdutoService = require('../services/ProdutoService')

// Controlador para gerenciar as rotas relacionadas aos produtos
class ProdutoController{
    async listar(req,res){
        try {
            const resultado = await ProdutoService.listarProdutos()
            res.json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'Erro interno do servidor',
                erro: erro
            })
        }
    }

    async buscarPorId(req,res){
        try {
            const resultado = await ProdutoService.buscarProdutoPorId(req.params.id)
            res.json(resultado)
            
        } catch (erro) {
             res.status(500).json({
                sucesso: false,
                mensagem: erro.mensagem || 'Erro interno do servidor',
                erro: erro
            })
        }
    }
}

