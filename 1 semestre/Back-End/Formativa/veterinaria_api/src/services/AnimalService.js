const AnimalRepository = require("../repositories/AnimalRepository");

class AnimalService {
  async listarAnimais() {
    const animais = await AnimalRepository.listarTodosAnimais();
    return {
      sucesso: true,
      dados: listarAnimais,
    };
  }

  async buscarAnimalPorId(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido" };
    }

    const animal = await AnimalRepository.buscarPorId(id);
    if (!animal) {
      throw { status: 404, mensagem: "Paciente não encontrado" };
    }
    return {
      sucesso: true,
      dados: animal,
    };
  }

  async cadastrarAnimal(dados) {
    const { nome_pet, especie, raca, idade, nome_tutor, telefone_tutor } =
      dados;

    if (!nome_pet || !especie || !nome_tutor || !telefone_tutor) {
      throw {
        status: 400,
        mensagem:
          "Nome do pet, espécie, nome e telefone do tutor são obrigatórios",
      };
    }
    if (typeof idade !== "number" || idade <= 0) {
      throw { status: 400, mensagem: "Idade não pode ser negativa" };
    }

    const novoAnimal = {
      nome_pet: nome_pet.trim(),
      especie: especie.trim(),
      raca: raca ? raca.trim() : null,
      idade,
      nome_tutor: nome_tutor.trim(),
      telefone_tutor: telefone_tutor.trim(),
    };

    const id = await AnimalRepository.cadastrarNovoAnimal(novoAnimal);

    return {
      sucesso: true,
      mensagem: "Paciente cadastrado com sucesso",
      id: id,
    };
  }

  async atualizarAnimal(id, dados) {
    if (!id || isNaN(id)) throw { status: 400, mensagem: "ID inválido" };

    const animal = await AnimalRepository.buscarPorId(id);

    if (!animal) throw { status: 404, mensagem: "Paciente não encontrado" };

    const animalAtualizado = {};
    const { nome_pet, especie, raca, idade, nome_tutor, telefone_tutor } =
      dados;

    if (nome_pet !== undefined) animalAtualizado.nome_pet = nome_pet.trim();
    if (especie !== undefined) animalAtualizado.especie = especie.trim();
    if (raca !== undefined) animalAtualizado.raca = raca.trim();
    if (idade !== undefined) {
      if (typeof idade !== "number" || idade < 0) {
        throw { status: 400, mensagem: "Idade inválida" };
        animalAtualizado.idade = idade;
      }
    }
    if (nome_tutor !== undefined)
      animalAtualizado.nome_tutor = nome_tutor.trim();
    if (telefone_tutor !== undefined)
      animalAtualizado.telefone_tutor = telefone_tutor.trim();

    if (Object.keys(animalAtualizado).length === 0) {
      throw { status: 400, mensagem: "Nenhum dado válido" };
    }

    await AnimalRepository.atualizarAnimalPorId(id, animalAtualizado);
    return {
      sucesso: true,
      mensagem: "Ficha do paciente atualizada com sucesso",
    };
  }

  async deletarAnimal(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido" };
    }

    const animal = await AnimalRepository.buscarPorId(id);
    if (!existe) {
      throw { status: 404, mensagem: "Paciente não encontrado" };
    }

    await AnimalRepository.deletarAnimalPorId(id);

    return {
      sucesso: true,
      mensagem: "Registro apagado com sucesso",
    };
  }
}

module.exports = new AnimalService();
