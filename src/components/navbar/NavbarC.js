import React, {Component, Fragment}from 'react';
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap';
import logo from '../../assests/images/logo.png';
import  './NavbarC.css';

export class NavbarC extends Component {
    state={
        show: false,
    }
    sidedrawerHandler =() =>{
        this.setState((prevState,props)=>(
            {
                ...prevState,
                show: !prevState.show
            }
        ));
    }
    render() {
        let sideDrawer=null;
        if(this.state.show){
            sideDrawer=(
                <div className="SideDrawer">
                    <a href="#home"className="brand1"><img className="mylogo" src={logo} alt="Mylogo"/></a>
                    <hr/>
                    <div className="sidedrawerlink">
                        <Nav.Link>About</Nav.Link> 
                        <Nav.Link>Discover</Nav.Link> 
                        <Nav.Link>Contact</Nav.Link> 
                        <Nav.Link>Hire from us</Nav.Link> 
                        <Nav.Link>Apply</Nav.Link> 
                        <Nav.Link>About</Nav.Link>
                    </div> 
                </div> );
        }
        return (
        <Fragment>  
            <div className="mainnav">
                <Navbar bg="dark"  variant="dark">
                   <Navbar.Brand href="#home"><img className="mylogo" src={logo} alt="MyLogo" /></Navbar.Brand>
                        <Nav className="ml-auto d-none d-md-flex mainnavlink">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#discover">Discover</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#hirefu">Hire from us</Nav.Link>
                            <Nav.Link href="#apply">Apply</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav>
                        <div className="DrawerToggle ml-auto d-flex d-md-none" onClick={this.sidedrawerHandler}>
                                <div></div>
                                <div></div>
                                <div></div>
                        </div>
                </Navbar>
            </div>
            {sideDrawer}
            {this.state.show ? <div className="Backdrop" onClick={this.sidedrawerHandler}></div> : null}
        </Fragment>
        )
    }
}

export default NavbarC;