import React from "react";

import { Card, Row, Col, ListGroup } from "react-bootstrap"

const ListBookCars = ({cars, choose, action}) =>{

    const editOrderCars = (cars) =>{

        if(action === 0){
            choose(cars)
        }
    }


    

    return(
        <Card style={CardsStyle} action onClick={() => editOrderCars(cars)} className="m-2">
            <Card.Img variant="top" src={cars.image}  width="250px" height="230px" />
            <Card.Body>
            <Card.Title>{cars.name} {cars.orderId}</Card.Title>
            <Card.Text>
                {cars.carType}
                <br />
                {cars.fuel} {cars.rating}
            </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>  
                Hour Rate {cars.hourRate}
            </ListGroup.Item>
            <ListGroup.Item>
                Hour Day {cars.dayRate}
            </ListGroup.Item>
            <ListGroup.Item>
                Hour Month {cars.monthRate}
            </ListGroup.Item>
            <ListGroup.Item>
                Pick Up Date {cars.pickUpDate}
            </ListGroup.Item>
            <ListGroup.Item>
                Drop Of Date {cars.dropOffDate}
            </ListGroup.Item>
            <ListGroup.Item>
                Pick Up Time {cars.pickUpTime}
            </ListGroup.Item>
            </ListGroup>
            <Card.Body>
        </Card.Body>
    </Card>
    )
}

export default ListBookCars


const CardsStyle = {
    cursor            : "pointer",
    background        : "#2da48f",
    height            : "100%",
    padding           : "0 1rem",
    justifyContent    : "space-between",
    margin            : "0 1 rem",
    width             : "18rem",
    float             : "left"
}