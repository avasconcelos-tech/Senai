const pool = require("../config/database");

class ProdutoRepository {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM produto ORDER BY id DESC");
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM produto WHERE id = ?", [id]);
    return rows[0];
  }

  async create(produtoData) {
    const { nome, descricao, preco, categoria, disponivel, foto } = produtoData;
    const [result] = await pool.query(
      "INSERT INTO produto (nome, descricao, preco, categoria, disponivel, foto) VALUES (?, ?, ?, ?, ?, ?)",
      [nome, descricao, preco, categoria, disponivel, foto],
    );
    return result.insertId;
  }

  async update(id, produtoData) {
    const fields = [];
    const values = [];
    for (const [key, value] of Object.entries(produtoData)) {
      fields.push(`${key} = ?`);
      values.push(value);
    }
    if (fields.length === 0) return null;

    values.push(id);
    const query = `UPDATE produto SET ${fields.join(", ")} WHERE id = ?`;
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await pool.query("DELETE FROM produto WHERE id = ?", [id]);
    return result.affectedRows;
  }
}

module.exports = new ProdutoRepository();

// O método Object.entries() é usado para obter um array de pares chave-valor a partir do objeto dados. O loop for...of é usado para iterar sobre esses pares, onde key representa a chave (nome do campo) e value representa o valor correspondente. Dentro do loop, as chaves são adicionadas ao array nomeCampo e os valores são adicionados ao array valorCampo.

// A variável query é construída usando template literals para criar uma string SQL dinâmica. O método join(',') é usado para concatenar os elementos do array nomeCampo em uma única string, separando-os por vírgulas. O resultado final é uma consulta SQL que atualiza os campos especificados para o produto com o ID fornecido.
