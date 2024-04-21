import React from 'react'
import Card from 'react-bootstrap/Card';
import Tags  from "./Tags"

export const MyCard = (props) => {

    return (
        <>
        <Card style={{ width: '18rem', height: '450px'}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
              {props.name}
          </Card.Title>
          <Card.Text>{props.description}
          </Card.Text>
          <Tags vari={props.color} txt={props.texto} />
        </Card.Body>
      </Card>
        </>
    )
} 


