import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Button, Card, ListGroup, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { differenceInDays, differenceInMonths } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
// import { CarsCartDel, CarsOdersSubmit } from "../../store/actions/orders";
import {carsOrdersEditCancel, carsOrdersEditSubmit, carsOrdersDelete} from "../../store/actions/carsOrders";
import Swal from "sweetalert2";

const ListBookCarsChoose = ({orders}) =>{
    const dispatch                    = useDispatch();


    const cancel = id =>{
        dispatch(carsOrdersEditCancel(id))
    }


    const [pickUpDate, setPickUpDate]   = useState(new Date(orders.pickUpDate));
    const [dropOffDate, setDropOffDate] = useState(new Date(orders.dropOffDate));
    
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
        carId       : `${orders.carId}`,
        name        : orders.name,
        carType     : orders.carType,
        rating      : orders.rating,
        fuel        : orders.fuel,
        image       : orders.image,
        hourRate    : orders.hourRate,
        dayRate     : orders.dayRate,
        monthRate   : orders.monthRate,
        orderId     : orders.orderId,
        pickUpLoc   : "1",
        dropOffLoc  : "1",
        pickUpDate  : pickUpDate,
        dropOffDate : dropOffDate,
        pickUpTime  : time,
        userId      : `${orders.userId}`,
        adminId     : `${orders.adminId}`,
    }
    
    const submitOrder = (data) => {

        if(dropOffDate <= pickUpDate){
            Swal.fire({
                title: "error",
                text: "Date Off Date Tidak boleh lebih kecil dari pick up date",
                icon: 'error',
                showCancelButton: true
            });
        }else{
            dispatch(carsOrdersEditSubmit(data))
        }
    }

    const deleteOrders = (id) =>{
        dispatch(carsOrdersDelete(id))
    }

    return(
        <>
          <>
            <Card style={CardsStyle} className="m-2">
                <Card.Header>
                    <Button onClick={() => cancel(orders.orderId)}>x</Button>
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
                                // filterDate={startDate} 
                                onChange={(pickUpDate) => setPickUpDate(pickUpDate)} />

                            <Form.Label htmlFor="name cars">Drop Of Date</Form.Label>
                                                    
                            <DatePicker 
                                selected={dropOffDate} 
                                // filterDate={startAfterDate} 
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

                        <div style={Total}>
                                <p>{total}</p>
                            </div>
                            <div style={footsubmit}>
                                <Button variant="primary" onClick={ () => submitOrder(data)}>Submit</Button>
                                <Button variant="danger" onClick={ () => deleteOrders(orders.orderId)}>Delete</Button>
                            </div>
                        </Card.Text>
                </Card.Body>
            </Card>
        </>

        {/* <div style={cart}>
            <div style={itemName}>
                <ul>
                    <li>
                        Name : {orders.name}
                    </li>
                    <li>
                        Hour Rate :{orders.hourRate}
                    </li>
                    <li>
                        Day Rate : {orders.dayRate}
                    </li>
                    <li>
                        Month Rate :{orders.monthRate}
                    </li>

                </ul>
            </div>
            <div style={counterContainer}>
                <Button onClick={() => cancel(orders.orderId)}>x</Button>
            </div>
        </div>
        <div style={letsInput}>

            <label for="exampleDataList" class="form-label">Pick Up Date</label>
            <DatePicker 
                selected={pickUpDate}   
                // filterDate={startDate} 
                onChange={(pickUpDate) => setPickUpDate(pickUpDate)} />
            <label for="exampleDataList" class="form-label">Drop Of Date</label>
            <DatePicker 
                selected={dropOffDate} 
                // filterDate={startAfterDate} 
                onChange={(dropOffDate) => setDropOffDate(dropOffDate)} />

            <label for="exampleDataList" class="form-label">Pick Up Time</label>
            <DatePicker 
                // selected={orders.pickUpTime}   
                selected={time}   
                type="time-date"
                filterDate={time} 
                onChange={(time) => setTime(time)}  
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa" />
        </div>
        <div style={Box}>
            <div style={Total}>
                <p>{total}</p>
            </div>
            <div style={footsubmit}>
                <Button  onClick={ () => submitOrder(data)}>Submit</Button>
            </div>
        </div> */}
     </>
    )
}


export default ListBookCarsChoose;


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
    height            : "20%",
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