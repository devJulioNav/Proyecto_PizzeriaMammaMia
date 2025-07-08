import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
//import { pizzas } from '../assets/js/pizzas';

const CardPizza = ({name,ingredients,price,img}) => {

  const {agregarAlCarro} = useContext(CartContext)
  return (
    <>
        <Card style={{ width: '20rem' }} className="setCards" >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>Pizza {name}</Card.Title>
            <h6 className="text-tertiary px-2">Ingredientes:</h6>
            <Card.Text >
                      <ul className="list-ing">
                           {ingredients.map((name,i) => <li key={name}>🍕 {ingredients[i]}</li> )}
                      </ul>
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush p-2">
            <ListGroup.Item><h5>Precio: ${price.toLocaleString()}</h5></ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between p-4">
            <Button className="px-4"  variant="outline-dark">Ver más 👀</Button>
            <Button className="px-4" variant="dark" onClick={agregarAlCarro}>Añadir 🛒</Button>
        </Card.Body>
        </Card>
    </>
  );
}

export default CardPizza;
