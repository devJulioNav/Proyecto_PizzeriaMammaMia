import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { pizzas } = useContext(CartContext)

  return (
    <>
      <Header/>
      <main className="container d-flex justify-content-center flex-wrap my-5 gap-5 px-4" >
            {pizzas.map(pizza => <CardPizza key={pizza.id} id={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />)}
      </main>
    </>
  );
}

export default Home;
