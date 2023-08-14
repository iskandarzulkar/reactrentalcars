import React, { useEffect, useState } from "react"
import NavbarHeader from "../../components/NavbarHeader"
import { Card, Col, Container, Form, InputGroup, ListGroup, Row } from "react-bootstrap"
import SkeletonLoading from "../../components/SkeletonLoading";

import { getCars } from "../../store/actions/cars";
import { CarsCart } from "../../store/actions/orders";
import { useSelector, useDispatch } from 'react-redux';
import ListCars from "../../components/cars/ListCars";
import ListOrders from "../../components/orders/ListOrders";

const Orders = () =>{
    const {cars, isLoading}   = useSelector(state => state.cars)
    const {orders}            = useSelector(state => state.orders)
    const dispatch            = useDispatch();


  
    const choose  = (cars) =>{
       dispatch(CarsCart(cars))
    }
    useEffect(() => ()=>{
        dispatch(getCars());
    },[dispatch])


    if(orders.length === 0){
        var actionsOrders = 0
    }else{
        var actionsOrders = 1
    }
    
    return(
        <>
            <NavbarHeader />
            <Container style={ContainerStyle}>

                <div style={CarsContainer}>

                {isLoading ? (<SkeletonLoading/>) : (
                    <>
                        {cars.map(car =>   
                            <ListCars
                                key={car.carId}
                                cars={car} 
                                choose={choose}
                                action={actionsOrders}
                                />                       
                        )}
                    </>
                )}
                
                </div>
                <div style={CartContainer}>
                    {orders.map(orders =>
                        <ListOrders 
                            key={orders.orderId}
                            orders={orders}
                        />
                    )}
                   
                </div>
            </Container>
        </>
    )
}


export default Orders

const ContainerStyle = {
    paddingTop    : '20px',
    display       : "flex",
    width         : "100%",
    height        : "100%",

};
const CarsContainer = {
    paddingTop    : '20px',
    width         : "80%",
    height        : "100%",
    border        : "1px solid #f7f7f7",
    padding       : "0.5rem 0.5rem",
};

const CartContainer = {
    paddingTop    : '20px',
    width         : "50%",
    border        : "1px solid #f7f7f7",
    height        : "100%",
    paddingBottom    : '20px',
};


