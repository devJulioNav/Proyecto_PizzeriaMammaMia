
import React from 'react';
import { useContext } from 'react';
//import { pizzaCart } from '../assets/js/pizzas';
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const { aumentar,disminuir,result,carro } = useContext(CartContext)
  
  return (
 <div className="my-5 card container ">
      <div className="d-flex justify-content-center">
        <div className="row col-6 py-3">
          <h3 className="text-start fw-bold pt-4">Pedido detallado:</h3>

          <ul className="ulFormat list-unstyled">
            {carro.map((pizza) => (
              <li key={pizza.id} className="my-3">
                <img className="imgLi col-2" src={pizza.img} alt={pizza.name} />
                <label className="col-3 text-start ms-2 text-capitalize fw-semibold">
                  Pizza {pizza.name}
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
          <button className="my-3 px-5 col-4 btn btn-primary fw-bold">Pagar Productos</button>
        </div>
      </div>
    </div>

  );
}

export default Cart;

