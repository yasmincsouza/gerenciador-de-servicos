import React from 'react';

const ProductList = ({ produtos, adicionarAoCarrinho }) => {
  return (
    <div>
      <h2 className="mb-3">Produtos Disponíveis</h2>
      <div className="row">
        {produtos.map((produto) => (
          <div key={produto.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">Preço: R$ {produto.preco.toFixed(2)}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;