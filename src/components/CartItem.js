// DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS - 123
// Yasmin Cristina de Souza - 2020101033 

import React, { useState } from 'react';

const CartItem = ({ item, removerDoCarrinho, editarQuantidade }) => {
  const [quantidade, setQuantidade] = useState(item.quantidade);

  const handleChange = (e) => {
    const novaQuantidade = parseInt(e.target.value);
    if (!isNaN(novaQuantidade)) {
      setQuantidade(novaQuantidade);
      editarQuantidade(item.id, novaQuantidade);
    }
  };

  return (
    <tr>
      <td>{item.nome}</td>
      <td>R$ {item.preco.toFixed(2)}</td>
      <td>
        <input
          type="number"
          className="form-control"
          min="1"
          value={quantidade}
          onChange={handleChange}
          style={{ width: '80px' }}
        />
      </td>
      <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removerDoCarrinho(item.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
};

export default CartItem;