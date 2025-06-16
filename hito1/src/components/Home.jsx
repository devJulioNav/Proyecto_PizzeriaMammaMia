
import Header from './Header';
import CardPizza from './CardPizza';
import {pizzas} from '../assets/js/pizzas';

const Home = () => {
  return (
    <>
      <Header/>
      <main className="container d-flex flex-wrap my-4 gap-5 px-4" >
            {pizzas.map(pizza => <CardPizza name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />)}
      </main>
    </>
  );
}

export default Home;
