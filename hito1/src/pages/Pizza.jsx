import React from 'react';
import { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const urlPizzas = "http://localhost:5000/api/pizzas/p001";

  useEffect(() => {
    const getApiPizzas = async () => {
      try {
        const res = await fetch(urlPizzas);
        const data = await res.json();
        setPizza(data);
      } catch (err) {
        console.error('Error al obtener la pizza:', err);
      }
    };

    getApiPizzas();
  }, []);

  if (!pizza) {
    return <div className="text-center py-5">Cargando pizza...</div>;
  }

  return (

    <section className="row p-5 m-5 align-items-center" style={{ minHeight: '60vh',width:'185vh',backgroundColor: 'white',margin: 'auto',borderRadius: '8px'}}>
      <div
        className="col-12 col-md-4 pizza__bg-img"
        style={{
          backgroundColor: 'white',
          backgroundPosition: 'center',
          backgroundImage: `url(${pizza.img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '300px',
          borderRadius: '10px'
        }}
      ></div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-center p-3">
        <h1 className="mb-3">Pizza {pizza.name}</h1>
        <p className="mt-2">{pizza.desc}</p>
        <h5 className="mt-4">Ingredientes:</h5>
        <p>{pizza.ingredients.join(', ')}</p>
        <div className="d-flex justify-content-between align-items-center p-3">
          <h2 className="m-0">
            Precio: ${pizza.price?.toLocaleString('es-CL')}
          </h2>
          <button className="btn btn-dark" >Agregar al carrito 🛒</button>
        </div>
      </div>
    </section>

  );
};

export default Pizza;
