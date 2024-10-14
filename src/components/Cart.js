import React from 'react';
import CartItem from './CartItem';

const Cart = ({ carrinho, removerDoCarrinho, editarQuantidade, total }) => {
  return (
    <div>
      <h2 className="mb-3">Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removerDoCarrinho={removerDoCarrinho}
                  editarQuantidade={editarQuantidade}
                />
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <h5>Total: R$ {total.toFixed(2)}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;