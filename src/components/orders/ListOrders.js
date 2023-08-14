import React, {useState} from "react";
import { Button, Card, ListGroup, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { CarsCartDel, CarsOdersSubmit } from "../../store/actions/orders";

import DatePicker from "react-datepicker";
import { differenceInDays, differenceInMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from 'sweetalert2';


const ListOrders = ({orders}) =>{
    const dispatch                    = useDispatch();
    const [err, setError]        = useState("");

    const cancel = id =>{
        dispatch(CarsCartDel(id))
    }


    const [pickUpDate, setPickUpDate]   = useState(new Date());
    const startDate = (pickUpDate) => new Date() < pickUpDate;
    const [dropOffDate, setDropOffDate] = useState(new Date());
    const startAfterDate = (dropOffDate) => pickUpDate < dropOffDate;
    
    const [time, setTime]               = useState(new Date());
    const countDay                      = differenceInDays(dropOffDate, pickUpDate);
    const countMonth                    = differenceInMonths(dropOffDate, pickUpDate);
    
    var total = 0;
    
    if(countDay != 0 && countMonth == 0){
        var total = orders.dayRate * countDay;
    }else if(countDay != 0 && countMonth != 0){
        var total = orders.monthRate * countMonth;
    }

  

    var data = {
        pickUpLoc     : 0,
        dropOffLoc    : 0,
        pickUpDate    : pickUpDate,
        dropOffDate   : dropOffDate,
        pickUpTime    : time,
        carId         : orders.carId,
        userId        : 7,
        adminId       : 1,
    }

    const submitOrder = (carsOrder) => {

        if(dropOffDate >= pickUpDate){
            dispatch(CarsOdersSubmit(carsOrder))
        }else{
            setError("Date dropOffdate harus lebih kecil dari pickupdate");
        }
        
    }


    if(err){
        Swal.fire({
            title: "error",
            text: err,
            icon: 'error',
            confirmButtonText: "Ok"
            
        });
    }
    return(
        <>
            <Card style={CardsStyle} className="m-2">
                <Card.Header>
                    <Button onClick={() => cancel(orders.carId)}>x</Button>
                </Card.Header>
                <Card.Img variant="top" src={orders.image}   width="250px" height="230px" />
                    <Card.Body>
                        <Card.Title>{orders.name}</Card.Title>
                        <Card.Text>
                            {orders.carType}
                            <br />
                            {orders.fuel} {orders.rating}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>  
                            Hour Rate {orders.hourRate}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Hour Day {orders.dayRate}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Hour Month {orders.monthRate}
                        </ListGroup.Item>
                        </ListGroup>
            
                    </Card.Body>

                <Card.Body>
                        <Card.Text>
                            <Form.Label htmlFor="name cars">Pick Up Date</Form.Label>
                                                    
                            <DatePicker 
                                selected={pickUpDate}   
                                filterDate={startDate} 
                                onChange={(pickUpDate) => setPickUpDate(pickUpDate)} />

                            <Form.Label htmlFor="name cars">Pick Up Date</Form.Label>
                                                    
                            <DatePicker 
                                selected={dropOffDate} 
                                filterDate={startAfterDate} 
                                onChange={(dropOffDate) => setDropOffDate(dropOffDate)} />


                            <Form.Label htmlFor="name cars">Pick Up Time</Form.Label>
                            <DatePicker 
                                selected={time}   
                                filterDate={time} 
                                onChange={(time) => setTime(time)}  
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa" />

    <                       div style={Total}>
                                <p>{total}</p>
                            </div>
                            <div style={footsubmit}>
                                <Button  onClick={ () => submitOrder(data)}>Submit</Button>
                            </div>
                        </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}


export default ListOrders;

const cart ={
    background        : "#2da48f",
    color             : "#ffffff",
    alignItems        : "center",
    height            : "15 rem",
    padding           : "0 1rem",
    justifyContent    : "space-between",
    width             : "100%",
    display           : "flex",
}

const itemName            = {
    width         : "40%",
    paddingLeft   : "0.5rem",
}

const counterContainer = {
    display               : "flex",
    width                 : "30%",
    Text                  : "center",
    margin: "1 5rem",
}


const letsInput ={
    background        : "#2da48f",
    color             : "#ffffff",
    height            : "40%",
    padding           : "0 1rem",
    justifyContent    : "space-between",
    width             : "100%",
    
}

const Box = {
    background        : "#2da48f",
    color             : "#ffffff",
    height            : "5%%",
    padding           : "0 1rem",
    justifyContent    : "space-between",
    width             : "100%",
    display           : "flex",
}


const Total = {
    display : "flex",
}

const footsubmit = {
    display : "flex",
}


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