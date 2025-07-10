import { createContext, useState, useContext } from "react";
import { ApiContext } from "./ApiContext";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [carro, setCarro] = useState([]);
  const { pizzas } = useContext(ApiContext);

  const agregarAlCarro = (pizzaId) => {
    const pizzaSeleccionada = pizzas.find((p) => p.id === pizzaId);
    if (!pizzaSeleccionada) return;

    setCarro((prevCarro) => {
      const existe = prevCarro.find((item) => item.id === pizzaId);

      if (existe) {
        return prevCarro.map((item) => {
          if (item.id === pizzaId) {
            const nuevoConteo = item.count + 1;
            return {
              ...item,
              count: nuevoConteo,
              price: (pizzaSeleccionada.price / item.count) * nuevoConteo,
            };
          }
          return item;
        });
      } else {
        return [
          ...prevCarro,
          {
            ...pizzaSeleccionada,
            count: 1,
            price: pizzaSeleccionada.price,
          },
        ];
      }
    });
  };

  const aumentar = (pizza) => {
    setCarro((prevCarro) =>
      prevCarro.map((item) => {
        if (item.id === pizza.id) {
          const nuevoConteo = item.count + 1;
          return {
            ...item,
            count: nuevoConteo,
            price: (pizza.price / pizza.count) * nuevoConteo,
          };
        }
        return item;
      })
    );
  };

  const disminuir = (pizza) => {
    setCarro((prevCarro) =>
      prevCarro.reduce((nuevoCarro, item) => {
        if (item.id === pizza.id) {
          const nuevoConteo = item.count - 1;
          if (nuevoConteo === 0) {
            // No lo agregamos al nuevo carro (lo eliminamos)
            return nuevoCarro;
          } else {
            nuevoCarro.push({
              ...item,
              count: nuevoConteo,
              price: (pizza.price / pizza.count) * nuevoConteo,
            });
            return nuevoCarro;
          }
        }
        nuevoCarro.push(item);
        return nuevoCarro;
      }, [])
    );
  };

  const result = carro.reduce((total, item) => total + item.price, 0);

  const mostrarAlerta = () => {
  Swal.fire({
      title: '¡Acción realizada!',
      text: 'Has agregado la pizza al carrito satisfactoriamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    });
  };

  return (
    <CartContext.Provider value={{ pizzas, carro, agregarAlCarro, aumentar, disminuir, result, mostrarAlerta }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
