// =============================================================================
// MÉTODO PARA ATUALIZAR PRODUTO NO BANCO
// =============================================================================

const validarExistencia = (resultado, res, produto) => {
  if (resultado.length === 0) {
    res.status(404).json({
      sucesso: false,
      mensagem: `${produto} não encontrado`,
    });
    return false;
  }
  return true;
};

const validarDados = ({ nome, produto, valor }) => {
  if (!nome || !produto || !valor) {
    return "O nome, produto e o valor são obrigatórios";
  }
};

if (typeof banco.valor !== "number" || banco.valor <= 0) {
  return "valor baixo";
}

if(banco.nome !=""){
  return "O nome está vazio"
}

return null;

app.put("/produto/:id", async (req, res) => {
  try {
    const id = req.params;
    const banco = req.body;

    const produto = await queryAsync("SELECT * FROM produtos WHERE id = ?", [
      id,
    ]);

    if (!validarExistencia(produto, res, "Produto")){
      return;
    }

      if (Object.keys(banco).length === 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "O produto não existe",
        });

        await queryAsync("UPDATE produtos SET ? WHERE id = ?", [banco, id]);

        res.status(200).json({
          sucesso: true,
          mensagem: "Produto atualizado com sucesso",
        });
      }
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar produto",
    });
  }
});
