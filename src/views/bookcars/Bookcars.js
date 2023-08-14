import React, { useEffect } from "react";
import NavbarHeader from "../../components/NavbarHeader";
import { Container } from "react-bootstrap";
import ListBookCars from "../../components/bookcars/ListBookCars";
import ListBookCarsChoose from "../../components/bookcars/ListBookCarsChoose";

import { carsOrders, carsOrdersEdit } from "../../store/actions/carsOrders"; 
import { useDispatch, useSelector } from "react-redux";

const Bookcars = () =>{
    const {orders}                  = useSelector(state => state.orders)
    const {listOrders, isLoading, listOrdersEdit }   = useSelector(state => state.listOrder)

    console.log(listOrders);
    const choose  = (cars) =>{
        dispatch(carsOrdersEdit(cars))
    }

    if(listOrdersEdit.length === 0){
        var actionsOrders = 0
    }else{
        var actionsOrders = 1
    }



    const dispatch = useDispatch(); 

    useEffect(() => ()=>{
        dispatch(carsOrders());
    },[dispatch])

    return(
       <>
        <NavbarHeader />
        
            <Container style={ContainerStyle}>
                <div style={CarsContainer}>

                {listOrders.filter(cars => cars.userId == 7).map(car => (
                    
                    // {listOrders.map(car =>   
                    
                        <ListBookCars
                            key={car.orderId}
                            cars={car} 
                            choose={choose}
                            action={actionsOrders}
                            />                       
                    // )}
                    ))}
                </div>
                <div style={CartContainer}>
                    {listOrdersEdit.map(orders =>
                        <ListBookCarsChoose 
                            key={orders.orderId}
                            orders={orders}
                        />
                    )}
                   
                </div>
            </Container>
       </>
    )
}


export default Bookcars;



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

