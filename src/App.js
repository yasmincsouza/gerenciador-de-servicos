import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  // Lista de produtos disponíveis
  const produtosDisponiveis = [
    { id: 1, nome: 'Maça', preco: 3.99 },
    { id: 2, nome: 'Banana', preco: 5.50 },
    { id: 3, nome: 'Iorgute', preco: 2.99 },
    { id: 4, nome: 'Arroz 1kg', preco: 6.99 },
    { id: 5, nome: 'Feijão', preco: 7.99 },
    { id: 6, nome: 'Coca-Cola', preco: 9.90 },
    { id: 7, nome: 'Pizza Seara', preco: 16.70 },
    { id: 7, nome: 'Suco de Laranja', preco: 13.49 }
  ];

  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    const existente = carrinho.find((item) => item.id === produto.id);
    if (existente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  // Função para remover produto do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  // Função para editar a quantidade de um produto no carrinho
  const editarQuantidade = (id, quantidade) => {
    if (quantidade < 1) return;
    setCarrinho(
      carrinho.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  };

  // Calcular o total do carrinho
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Carrinho de Compras</h1>
      <div className="row">
        <div className="col-md-6">
          <ProductList
            produtos={produtosDisponiveis}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        </div>
        <div className="col-md-6">
          <Cart
            carrinho={carrinho}
            removerDoCarrinho={removerDoCarrinho}
            editarQuantidade={editarQuantidade}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default App;