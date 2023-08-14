import React from "react"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logOut } from "../store/actions/loginAdmin";

const NavbarHeader = () => {
    const {isAuthenticated, isLoadingLogin, error, isAdmin}           = useSelector(state => state.loginAdmin)

    const Navigate    = useNavigate();
    const dispatch    = useDispatch();
    const isAdminTrue = localStorage.getItem("isAdmin");

    const logout = () =>{
        dispatch(logOut())
        Navigate("/loginAdmin");
    }

    if(isAdminTrue === "true"){
        return(
            <Navbar style={navbarColor}>
                <Container>
    
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
    

                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link to="/bookcars">Cars Booking</Link></Nav.Link>
                       
                          <Nav.Link href="#features"><Button text="logout" variant="primary" onClick={logout}>Logout</Button></Nav.Link>
                          {/* <Nav.Link href="#features"><Button text="logout" variant="primary">Logout</Button></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        )
    }else{
        return(
            <Navbar style={navbarColor}>
                <Container>
    
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                            <Nav.Link href="#features"><Link to="/orders">Cars</Link></Nav.Link>
                            <Nav.Link href="#features"><Link to="/bookcars">Order</Link></Nav.Link>
                          
                          <Nav.Link href="#features"><Button text="logout" variant="primary" onClick={logout}>Logout</Button></Nav.Link>
                          {/* <Nav.Link href="#features"><Button text="logout" variant="primary">Logout</Button></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        )
    }
    // return(
    //     <Navbar style={navbarColor}>
    //         <Container>

    //             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    //             <Nav className="me-auto">

    //                 {isAdminTrue ? (
    //                     <>
    //                         <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
    //                         <Nav.Link href="#features"><Link to="/bookcars">Cars Booking</Link></Nav.Link>
    //                     </>
    //                 ):(
    //                     <>
    //                         <Nav.Link href="#features"><Link to="/orders">Cars</Link></Nav.Link>
    //                         <Nav.Link href="#features"><Link to="/bookcars">Order</Link></Nav.Link>
    //                     </>
    //                 )
    //                 }
    //                   <Nav.Link href="#features"><Button text="logout" variant="primary" onClick={logout}>Logout</Button></Nav.Link>
    //                   {/* <Nav.Link href="#features"><Button text="logout" variant="primary">Logout</Button></Nav.Link> */}
    //             </Nav>
    //         </Container>
    //     </Navbar>
    // )
}


export default NavbarHeader


const navbarColor ={
    background        : "#4aba",
    color             : "#fff"
}