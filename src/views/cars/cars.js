import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Form, Row, Figure } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';

import CardCars from "../../components/cars/CardCars";

import { getCars, delCars, addCars, editCars } from "../../store/actions/cars";
import { useSelector, useDispatch } from 'react-redux';
import NavbarHeader from "../../components/NavbarHeader";
import Swal from 'sweetalert2';
import SkeletonLoading from "../../components/SkeletonLoading";

const Cars =  () =>{
    const {cars, isLoading, error}    = useSelector(state => state.cars)
    const [show, setShow]             = useState(false);

    // var handleClose                   = () => setShow(false);
    const handleShow                  = () => setShow(true);
    const [carId, setCarId]           = useState("");
    const [name, setName]             = useState("");
    const [carType, setCartype]       = useState("");
    const [rating, setRating]         = useState("");
    const [fuel, setFuel]             = useState("");
    const [file, setFile]             = useState("");
    const [hourRate, setHourRate]     = useState("");
    const [dayRate, setDayRate]       = useState("");
    const [monthRate, setMonthRate]   = useState("");
    const [isEdit, setIsEdit]         = useState(false);

    const loadImage = (e) =>{
        const image = e.target.files[0];
        setFile(image)
    }

    const dispatch                  = useDispatch();

    const DeleteId = (id) =>{
        dispatch(delCars(id))
    }

    const EditData = (id, data)=>{
        setCarId(data.carId)
        setName(data.name)
        setCartype(data.carType)
        setRating(data.rating)
        setFuel(data.fuel)
        setFile(data.image)
        setHourRate(data.hourRate)
        setDayRate(data.dayRate)
        setMonthRate(data.monthRate)
        setIsEdit(true)
        setShow(true)
    }

    const handleClose = () =>{
        setCarId("")
        setName("")
        setCartype("")
        setRating("")
        setFuel("")
        setFile("")
        setHourRate("")
        setDayRate("")
        setMonthRate("")
        setIsEdit(false)
        setShow(false)
    }
    const submit = (e) =>{
        e.preventDefault();

        const data = {
            name        : name,
            carType     : carType,
            rating      : rating,
            fuel        : fuel,
            image       : file,
            hourRate    : hourRate,
            dayRate     : dayRate,
            monthRate   : monthRate,
        }

        dispatch(addCars(data))

        setShow(false)
    }

    const submitEdit = (e) =>{
        e.preventDefault();

        const data = {
            carId       : carId,
            name        : name,
            carType     : carType,
            rating      : rating,
            fuel        : fuel,
            image       : file,
            hourRate    : hourRate,
            dayRate     : dayRate,
            monthRate   : monthRate,
        }

        dispatch(editCars(data))

        setShow(false)
    }
    useEffect(() => ()=>{
        dispatch(getCars());
    },[dispatch])


    if(error){
        Swal.fire({
            title: "error",
            text: error,
            icon: 'error',
            showCancelButton: true
        });
    }


    return(
        <>
            <NavbarHeader />

            <Container>
                <Row>
                    <Col>
                        <Button variant="primary" onClick={handleShow} className="m-2">
                            Add New
                        </Button>

                      
                            {isEdit ? (
                                 <>
                                    <Modal show={show} onHide={handleClose} >
                                        <form  onSubmit={submitEdit}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Edit Cars</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                    <Form.Label htmlFor="name cars">Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={name}
                                                    onChange={(e)=> setName(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">carType</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={carType}
                                                        onChange={(e)=> setCartype(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Rating</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={rating}
                                                        placeholder="10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%"
                                                        onChange={(e)=> setRating(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Fuel</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={fuel}
                                                        placeholder="PERTAMAX RACING,PERTAMAX TURBO,PERTAMAX,PERTALITE,PREMIUM,PERTAMINA DEX,DEXLITE,SOLAR"
                                                        onChange={(e)=> setFuel(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Image</Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        onChange={loadImage}
                                                    />
                                                
                                                    <Form.Label htmlFor="name cars">hourRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={hourRate}
                                                        onChange={(e)=> setHourRate(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">dayRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={dayRate}
                                                        onChange={(e)=> setDayRate(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">monthRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={monthRate}
                                                        onChange={(e)=> setMonthRate(e.target.value)}
                                                    />
                                                
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Save Changes
                                            </Button>
                                            </Modal.Footer>
                                        </form>
                                    </Modal>
                                 </>
                            ): (
                                <>
                                    <Modal show={show} onHide={handleClose} >
                                        <form  onSubmit={submit}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Add New Cars</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                    <Form.Label htmlFor="name cars">Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={name}
                                                    onChange={(e)=> setName(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">carType</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={carType}
                                                        onChange={(e)=> setCartype(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Rating</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={rating}
                                                        placeholder="10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%"
                                                        onChange={(e)=> setRating(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Fuel</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={fuel}
                                                        placeholder="PERTAMAX RACING,PERTAMAX TURBO,PERTAMAX,PERTALITE,PREMIUM,PERTAMINA DEX,DEXLITE,SOLAR"
                                                        onChange={(e)=> setFuel(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">Image</Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        onChange={loadImage}
                                                    />
                                                
                                                    <Form.Label htmlFor="name cars">hourRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={hourRate}
                                                        onChange={(e)=> setHourRate(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">dayRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={dayRate}
                                                        onChange={(e)=> setDayRate(e.target.value)}
                                                    />
                                                    <Form.Label htmlFor="name cars">monthRate</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={monthRate}
                                                        onChange={(e)=> setMonthRate(e.target.value)}
                                                    />
                                                
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Save Changes
                                            </Button>
                                            </Modal.Footer>
                                        </form>
                                    </Modal>
                                </>
                            )}
                           
                    
                    
                    </Col>

                </Row>
                <Row style={CardPading}>
                {isLoading ? (<SkeletonLoading/>) : (
                    <>
                        {cars.map(car =>   
                            <CardCars
                                key={car.carId}
                                cars={car} 
                                del={DeleteId}
                                edit={EditData}
                                />                  
                            
                        )}
                    </>
                )}
                </Row>

            </Container>


           

        </>
    )
}


export default Cars


const CardPading = {
    padding: "0 1rem",
    width: "100%",
}





