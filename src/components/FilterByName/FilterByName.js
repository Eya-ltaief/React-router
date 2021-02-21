import React from 'react';
import {Nav, Navbar,Form ,Button} from "react-bootstrap" ;

const FilterByName = ({inputSearch, setInputSearch}) => {
    const stylesBar = { position: "absolute",
    left: "20%", width: "300px"}
    const handleChange =(e) =>{
        setInputSearch(e.target.value);
    }
    return (
            <div style={{zIndex:"0"}}>
                <Navbar expand="lg"  bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand><img src="/images/popcorn.png"  alt="profile" style={{marginTop: "-15px",position:"relative"}}></img></Navbar.Brand>
                    <Navbar.Brand href="/"><h3 style={{color: "white"}}>MoviesAddict</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Form className="form-center" style={stylesBar}>
                        <Form.Control type="text" placeholder="Enter movie name ..." onChange={handleChange} inputSearch={inputSearch}/>
                    </Form>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Button variant="danger" className="button" style={{width: "8rem"}}><h6 style={{color:"white"}}>Log In</h6></Button>{' '}</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}
export default FilterByName;
