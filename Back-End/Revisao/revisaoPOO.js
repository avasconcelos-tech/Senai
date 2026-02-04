/*----------------------------------------
Exercício 1- Classe Simples (Pessoa)

Enunciado: 
Crie uma classe chamada Pessoa que possua:
-nome
-idade

Crie um método apresentar() que exiba no console 
o nome e a idade da pessoa
---------------------------------------------*/

// class Pessoa {
// constructor(nome,idade){
//     this.nome = nome
//     this.idade = idade
// }
//  apresentar(){
//     console.log(`Nome: ${this.nome}, Idade: ${this.idade}.`)
//  }
// }

// const pessoa1 = new Pessoa("Celso",27)
// pessoa1.apresentar()

/*----------------------------------------

EXERCÍCIO 2- CLASSE SIMPLES(Produto)

Enunciado: 
Crie uma clase Produto com:
-Nome
-preco

Crie um método mostrarPreco() que exiba 
o nome do produto e seu preco.
--------------------------------------------*/

// class Produto {
//     constructor(nome,preco){
//         this.nome  = nome
//         this.preco = preco
//     }

//     mostrarPreco(){
//         console.log(`Produto: ${this.nome}, Preco: R$ ${this.preco.toFixed(2)}`)
//     }
// }

// const produto1 = new Produto("SAL",2.50)
// produto1.mostrarPreco()

/*----------------------------------------

EXERCÍCIO 3- Herança

Enunciado: 
Crie uma clase Funcionario com:
-Nome

Crie uma clase Gerente que herda de Funcionario e possui:
-setor

Crie um método que exiba o nome e o setor do gerente.
--------------------------------------------*/

// class Funcionario{
//     constructor(nome){
//         this.nome = nome
//     }
// }

// class Gerente extends Funcionario{
//     constructor(nome,setor){
//       super(nome)
//       this.setor = setor
//     }

//     mostrarDados(){
//         console.log(`Funcionário: ${this.nome}, Setor: ${this.setor}.`)
//     }
// }

// const funcionario1 = new Gerente("Marlon", "TI")
// funcionario1.mostrarDados()

/*----------------------------------------

EXERCÍCIO 4- Herança(Veículo)

Enunciado: 
Crie uma clase Veículo com:
-marca

Crie uma clase Carro que herda de Veículo e possui:
-modelo

Crie um método que exiba a marca e o modelo do carro.
--------------------------------------------*/

// class Veiculo{
//     constructor(marca){
//         this.marca = marca
//     }
// }

// class Carro extends Veiculo {
//     constructor(marca, modelo){
//         super(marca)
//         this.modelo = modelo
//     }

//     mostrarVeiculo(){
//         console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}.`)
//     }
// }

// const veiculo1 = new Carro("Toyota", "Corola")
// veiculo1.mostrarVeiculo()

/*----------------------------------------

EXERCÍCIO 5- ENCAPSULAMENTO

Enunciado: 
Crie uma clase Conta onde:
-o saldo seja um atributo privado
-exista um método depositar(valor)
-exista um método mostrarSaldo()
--------------------------------------------*/

// class Conta {
//   #saldo;
//   constructor() {
//     this.#saldo = 0;
//   }
//   depositar(valor) {
//     if (valor > 0) {
//       this.#saldo += valor;
//     } else {
//       console.log("Valor incorreto!");
//     }
//   }

//   mostrarSaldo() {
//     console.log(`Saldo atual: R$ ${this.#saldo.toFixed(2)}`);
//   }
// }

// const conta1 = new Conta();
// conta1.depositar(150);
// conta1.mostrarSaldo();
// conta1.depositar(-30);

/*----------------------------------------

EXERCÍCIO 6- ENCAPSULAMENTO

Enunciado: 
Crie uma clase Aluno onde:
-a nota seja um atributo privado
-exista um método definirNota(nota)
-exista um método mostrarNota()
--------------------------------------------*/

class Aluno {
  #nota;

  definirNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.#nota = nota;
    } else {
      console.log("Nota Inválida!");
    }
  }

  mostrarNota() {
    console.log(`Nota: ${this.#nota.toFixed(1)}`);
  }
}

const aluno1 = new Aluno();
aluno1.definirNota(8);
aluno1.mostrarNota();
aluno1.definirNota(-3);
