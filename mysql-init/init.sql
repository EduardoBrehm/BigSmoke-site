-- Criar tabelas
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    category_id INT,
    featured BOOLEAN DEFAULT FALSE,
    discount_percent INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE product_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    url VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'customer') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    complement VARCHAR(100),
    neighborhood VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state CHAR(2) NOT NULL,
    zipcode CHAR(8) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address_id INT NOT NULL,
    status ENUM('pending', 'paid', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (address_id) REFERENCES addresses(id)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Inserir dados de exemplo
INSERT INTO categories (name, slug, description) VALUES
('Bong', 'bong', 'Bongs de alta qualidade'),
('Pipe', 'pipe', 'Pipes para todos os gostos'),
('Seda', 'seda', 'Sedas das melhores marcas'),
('Piteira', 'piteira', 'Piteiras de diversos materiais'),
('Dichavador', 'dichavador', 'Dichavadores premium'),
('Isqueiro', 'isqueiro', 'Isqueiros confiáveis');

INSERT INTO products (name, slug, description, price, stock, category_id, featured, discount_percent) VALUES
('Dichavador Be Safe', 'dichavador-be-safe', 'Dichavador premium da marca Be Safe', 129.90, 15, 5, true, 15),
('Bong de Vidro Preto', 'bong-vidro-preto', 'Bong de vidro premium com acabamento em preto', 199.90, 8, 1, true, 0),
('Seda King Size', 'seda-king-size', 'Seda king size da melhor qualidade', 7.90, 50, 3, true, 10),
('Piteira de Vidro', 'piteira-vidro', 'Piteira de vidro durável e elegante', 29.90, 20, 4, true, 0),
('Isqueiro Clipper', 'isqueiro-clipper', 'Isqueiro Clipper original', 15.90, 30, 6, true, 5);

-- Atualizar os dados das imagens
UPDATE product_images SET url = CONCAT('/images/products/', url);

-- Reinserir as imagens com os caminhos corretos
INSERT INTO product_images (product_id, url, is_primary) VALUES
(1, '/images/products/besafe.png', true),
(1, '/images/products/besafe-detail1.png', false),
(1, '/images/products/besafe-detail2.png', false),
(2, '/images/products/bong-preto.png', true),
(2, '/images/products/bong-preto-detail1.png', false),
(2, '/images/products/bong-preto-detail2.png', false),
(3, '/images/products/seda-king.png', true),
(4, '/images/products/piteira-vidro.png', true),
(5, '/images/products/clipper.png', true);

-- Criar usuário admin
INSERT INTO users (name, email, password, role) VALUES
('Admin', 'admin@bigsmoke.com', '$2a$12$1InE3Tq5B6J3UYC3QQWJk.9OueZXJyPHT3WGWnvTkNphR1TUQFrHi', 'admin');

-- Criar endereço para o admin
INSERT INTO addresses (user_id, street, number, neighborhood, city, state, zipcode, is_default) VALUES
(1, 'Rua Exemplo', '123', 'Centro', 'São Paulo', 'SP', '01001000', true);
