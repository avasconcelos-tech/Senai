const express = require("express");
const pool = require("./config/database");

const app = express();
app.use(express.json());

const queryAsync = (sql, values = []) => {
    return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.send("API CINEMA");
});

app.get("/filmes", async (req, res) => {
  try {
    const filmes = await queryAsync("SELECT * FROM filme");
    res.json({
      sucesso: true,
      dados: filmes,
      total: filmes.length,
    });
  } catch (erro) {
    console.error("Erro ao listar filmes:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar filmes",
      erro: erro.message,
    });
  }
});

app.get("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de filme inválido",
      });
    }

    const filme = await queryAsync("SELECT * FROM filme WHERE id = ?", [id]);

    if (filme.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Filme não encontrado",
      });
    }

    res.json({
      sucesso: true,
      dados: filme[0],
    });
  } catch (erro) {
    console.error("Erro ao listar filmes:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar filmes",
      erro: erro.message,
    });
  }
});

app.post("/filmes", async (req, res) => {
  try {
    const { titulo, genero, duracao, classificacao, data_lancamento } =
      req.body;

    if (!titulo || !genero || !duracao) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Título, gênero e duração são obrigatórios",
      });
    }

    if (typeof duracao !== "number" || duracao <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Duração deve ser um número positivo",
      });
    }

    const novoFilme = {
      titulo: titulo.trim(),
      genero: genero.trim(),
      duracao: duracao,
      classificacao: classificacao || null,
      data_lancamento: data_lancamento || null,
    };

    const resultado = await queryAsync(
      "INSERT INTO filme SET ?", [novoFilme]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Filme criado com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar filme", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar filme",
      erro: erro.mensagem,
    });
  }
});

app.put('/filmes/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if (filmeExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }

        const filmeAtualizado = {}

        if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim()
        if(genero !== undefined) filmeAtualizado.genero = genero.trim()
        if(duracao !== undefined) {
            if(typeof duracao !== 'number' || duracao <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Duração deve ser um número positivo.'
            })
            filmeAtualizado.duracao = duracao
        }
        if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao.trim()
        if(data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento
       
        if(Object.keys(filmeAtualizado).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE filme SET ? WHERE id = ?', [filmeAtualizado, id])
        res.json({
            sucesso: true,
            mensagem:'Filme atualizado!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar filme', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar filme',
            erro: erro.message
        })
    }
})

app.delete('/filmes/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if (filmeExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])

        res.json({
            sucesso: true,
            mensagem:'Filme apagado com sucesso!'
        })
        
    } catch (erro) {
       console.error('Erro ao apagar filme', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar filme',
            erro: erro.message
        }) 
    }
})

// ========================================================================================
          //  Tabela SALA
// ========================================================================================

app.get("/salas", async (req, res) => {
  try {
    const salas = await queryAsync("SELECT * FROM sala");
    res.json({
      sucesso: true,
      dados: salas,
      total: salas.length,
    });
  } catch (erro) {
    console.error("Erro ao listar salas:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar salas",
      erro: erro.message,
    });
  }
});

app.get("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de sala inválido",
      });
    }

    const salas = await queryAsync("SELECT * FROM salas WHERE id = ?", [id]);

    if (salas.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Salas não encontradas",
      });
    }

    res.json({
      sucesso: true,
      dados: salas[0],
    });
  } catch (erro) {
    console.error("Erro ao listar salas", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar salas",
      erro: erro.message,
    });
  }
});

app.post("/salas", async (req, res) => {
  try {
    const {nome, capacidade} =
      req.body;

    if (!nome|| !capacidade) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nome e capacidade são obrigatórios",
      });
    }

    if (typeof capacidade !== "number" || capacidade <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Capacidade deve ser um número positivo",
      });
    }

    const novaSala = {
      nome: nome.trim(),
      capacidade: capacidade,
    };

    const resultado = await queryAsync(
      "INSERT INTO sala SET ?", [novaSala]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Sala criada com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar sala", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar sala",
      erro: erro.mensage,
    });
  }
});

app.put('/salas/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {nome, capacidade} = req.body

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inválido.'
            })
        }

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
       
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrado'
            })
        }

        const salaAtualizada = {}

        if(nome !== undefined) salaAtualizada.nome = nome.trim()
        if(capacidade !== undefined) {
            if(typeof capacidade !== 'number' || capacidade <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Capacidade deve ser um número positivo.'
            })
            salaAtualizada.capacidade = capacidade
        }
       
        if(Object.keys(salaAtualizada).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE sala SET ? WHERE id = ?', [salaAtualizada, id])
        res.json({
            sucesso: true,
            mensagem:'Sala atualizado!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sala',
            erro: erro.message
        })
    }
})

app.delete('/salas/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inválido.'
            })
        }

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
       
        if (salaExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrado'
            })
        }

        await queryAsync('DELETE FROM sala WHERE id = ?', [id])

        res.json({
            sucesso: true,
            mensagem:'Sala apagada com sucesso!'
        })
        
    } catch (erro) {
       console.error('Erro ao apagar sala', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar sala',
            erro: erro.message
        }) 
    }
})

// ========================================================================================
          //  Tabela SESSÃO
//========================================================================================


app.get("/sessao", async (req, res) => {
  try {
    const sessao = await queryAsync("SELECT * FROM sessao");
    res.json({
      sucesso: true,
      dados: sessao,
      total: sessao.length,
    });
  } catch (erro) {
    console.error("Erro ao listar sessão:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar sessão.",
      erro: erro.message,
    });
  }
});

app.get("/sessao/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID da sessão inválido",
      });
    }

    const sessao = await queryAsync("SELECT * FROM sessao WHERE id = ?", [id]);

    if (sessao.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Sessão não encontrada",
      });
    }

    res.json({
      sucesso: true,
      dados: sessao[0],
    });
  } catch (erro) {
    console.error("Erro ao listar sessao", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar sessao",
      erro: erro.message,
    });
  }
});

app.post("/sessao", async (req, res) => {
  try {
    const {filme_id, sala_id, data_hora, preco} =
      req.body;

    if (!filme_id || !sala_id || !data_hora ||!preco) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID do Filme e Sala,data e hora e o preço são obrigatórios",
      });
    }

    if (preco <= 0 || isNaN(preco)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "O preço deve ser um número positivo",
      });
    }

    const novaSessao = {
      filme_id: filme_id,
      sala_id: sala_id,
      data_hora: data_hora,
      preco: preco,
    };

    const resultado = await queryAsync(
      "INSERT INTO sessao SET ?", [novaSessao]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Sessão criada com sucesso",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar sessão", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar sessão",
      erro: erro.message,
    });
  }
});

app.put('/sessao/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {filme_id, sala_id, data_hora, preco} = req.body

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID da sessão inválido.'
            })
        }

        const sessaoExiste = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])
       
        if (sessaoExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sessão não encontrada'
            })
        }

        const sessaoAtualizada = {}

        if(!isNaN(filme_id) || !filme_id !== undefined) sessaoAtualizada.filme_id
        if(!isNaN(sala_id) ||sala_id !== undefined) sessaoAtualizada.sala_id
        if(data_hora !== undefined) sessaoAtualizada.data_hora
        if(preco !== undefined) {
            if(typeof preco !== 'number' || preco <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Preço deve ser um número positivo.'
            })
            sessaoAtualizada.preco = preco
        }
       
        if(Object.keys(sessaoAtualizada).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE sessao SET ? WHERE id = ?', [sessaoAtualizada, filme_id, preco])
        res.json({
            sucesso: true,
            mensagem:'Sessão atualizado!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar sessão', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sessão',
            erro: erro.message
        })
    }
})

app.delete('/sessao/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID da Sessão inválido.'
            })
        }

        const sessaoExiste = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])
       
        if (sessaoExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sessão não encontrado'
            })
        }

        await queryAsync('DELETE FROM sessao WHERE id = ?', [id])

        res.json({
            sucesso: true,
            mensagem:'Sessão apagada com sucesso!'
        })
        
    } catch (erro) {
       console.error('Erro ao apagar sessão', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar sessão',
            erro: erro.message
        }) 
    }
})

// ========================================================================================
          //  Tabela INGRESSO
//========================================================================================


app.get("/ingresso", async (req, res) => {
  try {
    const ingresso = await queryAsync("SELECT * FROM ingresso");
    res.json({
      sucesso: true,
      dados: ingresso,
      total: ingresso.length,
    });
  } catch (erro) {
    console.error("Erro ao listar ingresso:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar ingresso.",
      erro: erro.message,
    });
  }
});

app.get("/ingresso/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID do Ingresso inválido",
      });
    }

    const ingresso = await queryAsync("SELECT * FROM ingresso WHERE id = ?", [id]);

    if (ingresso.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Ingresso não encontrado",
      });
    }

    res.json({
      sucesso: true,
      dados: ingresso[0],
    });
  } catch (erro) {
    console.error("Erro ao listar ingresso", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar ingresso",
      erro: erro.message,
    });
  }
});

app.post("/ingresso", async (req, res) => {
  try {
    const { sessao_id, numero_assento, tipo, valor_pago } = req.body;

    if (sessao_id == null || numero_assento == null || tipo == null || valor_pago == null) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Todos os campos (sessão, assento, tipo e valor) são obrigatórios",
      });
    }

    if (isNaN(valor_pago) || valor_pago < 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "O valor pago deve ser um número válido e não negativo",
      });
    }

  
    const assentoOcupado = await queryAsync(
      "SELECT id FROM ingresso WHERE sessao_id = ? AND numero_assento = ?",
      [sessao_id, numero_assento]
    );

    if (assentoOcupado.length > 0) {
      return res.status(409).json({
        sucesso: false,
        mensagem: "Este assento já foi vendido para esta sessão.",
      });
    }

    const novoIngresso = { sessao_id, numero_assento, tipo, valor_pago };

    const resultado = await queryAsync("INSERT INTO ingresso SET ?", [novoIngresso]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Ingresso criado com sucesso",
      id: resultado.insertId,
    });

  } catch (erro) {
    console.error("Erro ao cadastrar ingresso", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar ingresso",
      erro: erro.message,
    });
  }
});

app.put('/sessao/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {filme_id, sala_id, data_hora, preco} = req.body

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID da sessão inválido.'
            })
        }

        const sessaoExiste = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])
       
        if (sessaoExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sessão não encontrada'
            })
        }

        const sessaoAtualizada = {}

        if(!isNaN(filme_id) || !filme_id !== undefined) sessaoAtualizada.filme_id
        if(!isNaN(sala_id) ||sala_id !== undefined) sessaoAtualizada.sala_id
        if(data_hora !== undefined) sessaoAtualizada.data_hora
        if(preco !== undefined) {
            if(typeof preco !== 'number' || preco <= 0)
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Preço deve ser um número positivo.'
            })
            sessaoAtualizada.preco = preco
        }
       
        if(Object.keys(sessaoAtualizada).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE sessao SET ? WHERE id = ?', [sessaoAtualizada, filme_id, preco])
        res.json({
            sucesso: true,
            mensagem:'Sessão atualizado!'
        })

    } catch (erro) {
        console.error('Erro ao atualizar sessão', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar sessão',
            erro: erro.message
        })
    }
})

app.delete('/sessao/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID da Sessão inválido.'
            })
        }

        const sessaoExiste = await queryAsync('SELECT * FROM sessao WHERE id = ?', [id])
       
        if (sessaoExiste.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sessão não encontrado'
            })
        }

        await queryAsync('DELETE FROM sessao WHERE id = ?', [id])

        res.json({
            sucesso: true,
            mensagem:'Sessão apagada com sucesso!'
        })
        
    } catch (erro) {
       console.error('Erro ao apagar sessão', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar sessão',
            erro: erro.message
        }) 
    }
})




module.exports = app;
