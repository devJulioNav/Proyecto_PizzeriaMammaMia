import React from 'react';
import { useState } from 'react';
import { pizzaCart } from '../assets/js/pizzas';

const Cart = () => {
  
  const [carro, setCarro] = useState(pizzaCart);
  const editPizza = [...carro];

  const aumentar = (pizza) => {
    const index = editPizza.findIndex((el) => el.id === pizza.id);

    carro[index].price = (pizza.price / pizza.count) * (pizza.count + 1);
    carro[index].count = pizza.count + 1;
    setCarro([...carro]);
  };

  const disminuir = (pizza) => {
    const index = editPizza.findIndex((el) => el.id === pizza.id);
    if (editPizza[index].count - 1 == 0) {
      carro.splice(index, 1);
      setCarro([...carro]);
      return;
    } else {
      carro[index].price = (pizza.price / pizza.count) * (pizza.count - 1);
      carro[index].count = pizza.count - 1;
      setCarro([...carro]);
      return;
    }
  };

  const result = carro.reduce(
    (total, currentValue) => (total = total + currentValue.price),
    0
  );
      

  return (
 <div className="my-3 card container ">
      <div className="d-flex justify-content-center">
        <div className="row col-6 ">
          <h3 className="text-start fw-bold pt-4">Pedido detallado:</h3>

          <ul className="ulFormat list-unstyled">
            {carro.map((pizza) => (
              <li key={pizza.id} className="my-3">
                <img className="imgLi col-2" src={pizza.img} alt={pizza.name} />
                <label className="col-3 text-start ms-2 text-capitalize fw-semibold">
                  {pizza.name}
                </label>
                <label className="col-3 fw-semibold">
                  $ {Intl.NumberFormat().format(pizza.price)}
                </label>

                <button
                  className="btn btn-outline-danger btnAncho"
                  onClick={() => disminuir(pizza)}
                >
                  -
                </button>
                <label className="col-1 fw-bold">{pizza.count}</label>
                <button
                  className="btn btn-outline-primary btnAncho"
                  onClick={() => aumentar(pizza)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>

          <h3 className="text-start text-primary fw-bold">
            Total a pagar : $ {Intl.NumberFormat().format(result)}
          </h3>
          <button className="my-4 col-3 btn btn-primary fw-bold">Pagar Productos</button>
        </div>
      </div>
    </div>

  );
}

export default Cart;

