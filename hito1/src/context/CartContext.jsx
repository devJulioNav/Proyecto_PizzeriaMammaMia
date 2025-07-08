import { createContext, useState, useEffect } from "react";
import { pizzaCart } from "../assets/js/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carro, setCarro] = useState(pizzaCart);
  const [pizzas, setPizzas] = useState([])
  const URL = "http://localhost:5000/api/pizzas"

  const getApiPizzas = async () => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)
        setPizzas(data)
    } catch (error) {
        console.log(error.message) 
    }
  }

    useEffect(() => {
      getApiPizzas()
  }, [])

//const [carro, setCarro] = useState(pizzas);

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

  return (
    <CartContext.Provider value={{ pizzas, carro, aumentar, disminuir, result }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;



// import { createContext, useState } from "react";
// import { pizzaCart } from "../assets/js/pizzas";

// export const CartContext = createContext();

// const CartProvider = ({children}) => {

//   const [carro, setCarro] = useState(pizzaCart);
//   const editPizza = [...carro];

//   const aumentar = (pizza) => {
//     const index = editPizza.findIndex((el) => el.id === pizza.id);

//     carro[index].price = (pizza.price / pizza.count) * (pizza.count + 1);
//     carro[index].count = pizza.count + 1;
//     setCarro([...carro]);
//   };

//   const disminuir = (pizza) => {
//     const index = editPizza.findIndex((el) => el.id === pizza.id);
//     if (editPizza[index].count - 1 == 0) {
//       carro.splice(index, 1);
//       setCarro([...carro]);
//       return;
//     } else {
//       carro[index].price = (pizza.price / pizza.count) * (pizza.count - 1);
//       carro[index].count = pizza.count - 1;
//       setCarro([...carro]);
//       return;
//     }
//   };

//   const result = carro.reduce(
//     (total, currentValue) => (total = total + currentValue.price),
//     0
//   );

//   return (
//     <CartContext.Provider value={{ carro,aumentar,disminuir,result }}> {children} </CartContext.Provider>
//   );
// }

// export default CartProvider;