import { Container, ListGroup, Row } from "react-bootstrap"
import Button from "../Button";
import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";
import avanza from "../../assets/avanza.png"

// import "../style/Button.css"
import "../../style/style.css"


const CardCars = ({cars, del, edit}) => {

    const delById = (id) =>{
        del(id)
    }

    const editById = (id, cars) => {
        edit(id, cars)
    }
    return(

        <Card style={CardsStyle} className="m-2" >
           
            <Card.Img variant="top"  src={cars.image}   width="250px" height="230px"  />
            <Card.Body>
            <Card.Title>{cars.name} </Card.Title>
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
            </ListGroup>
            <Card.Body>
                <Card.Link>
                    <Card.Link><Button text="edit" variant="primary" action={() => editById(cars.carId, cars)}/></Card.Link>
                </Card.Link>
                <Card.Link>
                    <Button text="delete" variant="warning" action={() => delById(cars.carId)}/>
                </Card.Link>
            </Card.Body>
        </Card>

    )
}


export default CardCars

const CardsStyle = {
    background: "#2da48f",
    height: "100%",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0 1 rem",
    width : "18rem",
    float: "left"
}