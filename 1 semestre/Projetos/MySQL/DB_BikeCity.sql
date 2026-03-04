CREATE DATABASE BikeCity;
USE BikeCity;

-- ==========================
-- TABELA Produto
-- ==========================

CREATE TABLE Produto (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    codigo_interno VARCHAR(50) NOT NULL, -- SKU ou Código de Barras
    categoria ENUM('Bicicleta', 'Patinete', 'Peça', 'Acessório', 'Serviço') NOT NULL,
    descricao TEXT,
    
    -- Controle de Estoque
    estoque_atual INT DEFAULT 0,
    estoque_minimo INT DEFAULT 5, 
    
    -- Valores e Dimensões
    preco_custo DECIMAL(10, 2),
    preco_venda DECIMAL(10, 2),
    peso_kg DECIMAL(5, 2),
    
    -- Rastreabilidade e Logística
    exige_numero_serie BOOLEAN DEFAULT FALSE, -- Para veículos e baterias
    id_fornecedor INT,
    id_localizacao INT,
    
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Chaves Estrangeiras (Relacionando com as outras entidades que você criará)
    CONSTRAINT fk_fornecedor FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor),
    CONSTRAINT fk_localizacao FOREIGN KEY (id_localizacao) REFERENCES Localizacao(id_localizacao)
);

CREATE TABLE Fornecedor (
 id INT PRIMARY KEY,
 nome VARCHAR(150) NOT NULL,
 cnpj 


);