import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsers } from '../../store/actions/loginAdmin';
import { Link, useNavigate } from "react-router-dom";
import SweetAlert from 'sweetalert2';
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'

const LoginUsers = () =>{
    const {isAuthenticated, isLoadingLogin, error, isAdmin}           = useSelector(state => state.loginAdmin)

    const [email, setEmail]         = useState("");
    const [password, setPassword]   = useState("");
    const dispatch                  = useDispatch();
    const Navigate                  = useNavigate();
    const [isOpen, setOpen] = useState(false);

    if(error){
        Swal.fire({
            title: "error",
            text: error,
            icon: 'error',
            confirmButtonText: "Ok"
            
        });
    }
    const submit = (e) =>{
        e.preventDefault();

        if(email != " " && password != ""){

            const data ={
                email       : email,
                password    : password
            }

            dispatch(loginUsers(data))
            
        }
    }
    
    if(isAuthenticated){
        Navigate("/orders");
    }

    return(
        <div style={box}>
             <h3 style={head}>Login User</h3>
          
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        placeholder="Enter email" 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword" style={loginCenter}>
                    <Button variant="primary" type="submit">Login</Button>{' '}
                    <br />
                    <Link to="/loginAdmin">Login Admin</Link>
                </Form.Group>

            </Form>
        </div>
    )
}


export default LoginUsers;



const textBtn = {
    color       : "#57ea4f",
    fontSize    : "15px",
    cursor      : "pointer"
}
const box = {
    background    : '#7FFFD4',
    width         : "25%",
    position      : "absolute",
    top           : "50%",
    left          : "50%",
    transform     : "translate(-50%, -50%)",
    padding       : "0.7rem"
}

const head = {
    textAlign       : "center",
    marginBottom    : "0.4rem"
}

const btn = {
    textAlign       : "center",
    marginTop       : "0.5rem"
}

const paragraph ={
    textAlign       : "center",
    marginTop       : "0.5rem",
    fontSize        : "14px"
}

const loginCenter ={
    textAlign : "center",
    top           : "50%",
    left          : "50%",
}