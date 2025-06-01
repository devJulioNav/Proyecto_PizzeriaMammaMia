import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardPizza = ({name, ingredients, price, img}) => {
  return (
    <>
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h6 class="text-tertiary px-2">Ingredientes:</h6>
            <Card.Text>{ingredients.join(", ")}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush p-2">
            <ListGroup.Item>Precio: ${price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        <Card.Body class="d-flex justify-content-between p-4">
            <Button className="px-4"  variant="outline-dark">Ver más 👀</Button>
            <Button className="px-4" variant="dark">Añadir 🛒</Button>
        </Card.Body>
        </Card>
    </>

  );
}

export default CardPizza;
