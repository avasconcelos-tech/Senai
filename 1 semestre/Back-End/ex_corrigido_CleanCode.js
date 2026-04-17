//Exercício 1

const { error } = require("node:console")

app.get('/ususarios', async (req, res) => {
    try{
    const listaUsuarios = await queryAsync("SELECT * FROM usuarios")
    res.status(200).json({
        sucesso: true,
        dados: listaUsuarios,
        total: listaUsuarios.length
    })

    } catch(erro){
        res.status(500).json({
            sucesso: false,
            mensagem:"Erro ao listar usuários"
        })
    }
})

app.get('/usuarios/:id', async (req, res) => {
    try{
    const usuario = await queryAsync("SELECT * FROM usuarios WHERE id = ?", [req.params.id])

    if (usuario.length == 0) {
        res.send("erro")
    } else {
        res.send(usuario[0])
    }
}catch (erro){
     res.status(500).json({
            sucesso: false,
            mensagem:"Erro ao listar usuários"
        })
}
})

//Exercício 2

app.post('/pedidos', async (req, res) => {
    try {
            const { cliente, valor } = req.body
            
    if (!cliente || valor) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Cliente e Valor são obrigatórios",
        })
    }

    if (typeof valor !=="number" || valor <= 0) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "O valor deve ser um número positivo",
        });
    }

    const novoPedido = {
        cliente: cliente.trim(),
        valor: valor || null
    }

   const resultado = await queryAsync("INSERT INTO pedido SET ?", [novoPedido]);

  res.status(201).json({
            sucesso: true,
            mensagem: "Pedido criado com sucesso",
            id: resultado.insertId,
        });
    } catch (error) {
       console.error("Erro ao listar os pedidos:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar os pedidos",
      erro: erro.message,
    }); 
    }
})

//Exercício 3

app.put('/pedidos/:id', async (req, res) => {
    try {
        const id = req.params
    const {cliente, valor} = req.body

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID do pedido inválido",
      });
    }
    const pedidoExiste = await queryAsync("SELECT * FROM pedido WHERE id = ?", [id])

    if (pedidoExiste.length === 0) {
       return res.status(404).json({
        sucesso: false,
        mensagem: 'O pedido não foi encontrado'
      })
    }

      const pedidoAtualizado = {}

      if(cliente !== undefined) produtoAtualizado.cliente = cliente.trim()
    
    if(valor !== undefined) {
      if(typeof valor !== 'number' || valor <=0)
        return res.status(400).json({
          sucesso: false,
          mensagem: 'O valor deve ser um número positivo.'
     })
     pedidoAtualizado.valor = valor
    }

    if(Object.keys(pedidoAtualizado).length === 0){
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Nenhum campo para atualizar'
      })
    }

     
    await queryAsync("UPDATE pedido SET ? WHERE id = ?", [pedidoAtualizado, id])
    res.json({
        sucesso: true,
        mensagem: 'Pedido atualizado'
    })
        
    } catch (erro) {
          console.error('Erro ao atualizar Pedido', erro)
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao atualizar pedido',
      erro: erro.message
    })
}
})

app.delete('/pedido/:id', async (req, res) => {
    try {
         const {id} = req.params

          if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: "ID do pedido inválido."
            })
        }

        const pedidoExiste = await queryAsync("SELECT * FROM pedido WHERE id = ?", [id])

        if (pedidoExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'O pedido não foi encontrado'
            })
        }

        await queryAsync("DELETE FROM pedido WHERE id = ?", [id])

         res.json({
            sucesso: true,
            mensagem:'O pedido foi deletado com sucesso!'
        })
    } catch (erro) {
        console.error('Erro ao deletar Pedido', erro)
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao deletar pedido',
      erro: erro.message
    })
        
    }
})