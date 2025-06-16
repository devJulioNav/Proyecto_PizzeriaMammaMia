import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//import { pizzas } from '../assets/js/pizzas';
//import pizzas from '../assets/js/pizzas';
//{props.ingredients.join(", ")}
const CardPizza = (props) => {
  return (
    <>
        <Card style={{ width: '20rem' }} class="setCards" >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <h6 class="text-tertiary px-2">Ingredientes:</h6>
            <Card.Text >
                      <ul class="list-ing">
                           {props.ingredients.map((name,i) => <li key={props.name}>🍕 {props.ingredients[i]}</li> )}
                      </ul>
            </Card.Text>
        </Card.Body>
        <ListGroup class="list-group-flush p-2">
            <ListGroup.Item><h5>Precio: ${props.price.toLocaleString()}</h5></ListGroup.Item>
        </ListGroup>
        <Card.Body class="d-flex justify-content-between p-4">
            <Button class="px-4"  variant="outline-dark">Ver más 👀</Button>
            <Button class="px-4" variant="dark">Añadir 🛒</Button>
        </Card.Body>
        </Card>
    </>

  );
}

export default CardPizza;
