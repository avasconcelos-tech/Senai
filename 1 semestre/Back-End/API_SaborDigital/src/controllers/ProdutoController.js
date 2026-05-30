const ProdutoService = require("../services/ProdutoService");

class ProdutoController {
  async listar(req, res) {
    try {
      const resultado = await ProdutoService.listarProdutos();
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async buscarPorId(req, res) {
    try {
      const resultado = await ProdutoService.buscarProdutoPorId(Number(req.params.id));
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async cadastrar(req, res) {
    try {
      const dadosProduto = req.body;

      // Se o usuário enviou uma imagem, pegamos o nome do arquivo gerado pelo Multer
      if (req.file) {
        dadosProduto.foto = req.file.filename;
      }

      // Repassa os dados (incluindo o nome da foto) para a camada de serviço
      const novoProduto = await ProdutoService.cadastrarProduto(dadosProduto);
      res.status(201).json(novoProduto);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;

      if (req.file) {
        dadosAtualizados.foto = req.file.filename;
      }
      if (dadosAtualizados.preco) {
        dadosAtualizados.preco = Number(dadosAtualizados.preco);
      }
      if (dadosAtualizados.disponivel !== undefined) {
        dadosAtualizados.disponivel = dadosAtualizados.disponivel === "true";
      }

      const resultado = await ProdutoService.atualizarProduto(
        Number(id),
        dadosAtualizados,
      );

      return res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }

  async deletar(req, res) {
    try {
      const resultado = await ProdutoService.deletarProduto(Number(req.params.id));
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor",
        erro: erro.stack || erro,
      });
    }
  }
}

module.exports = new ProdutoController();
