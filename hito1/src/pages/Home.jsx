import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
//import {pizzas} from '../assets/js/pizzas';
import { useState, useEffect } from 'react';

const Home = () => {

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

  console.log(pizzas)

  return (
    <>
      <Header/>
      <main className="container d-flex justify-content-center flex-wrap my-5 gap-5 px-4" >
            {pizzas.map(pizza => <CardPizza name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />)}
      </main>
    </>
  );
}

export default Home;
