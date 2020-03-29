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
                    <div className="sidedrawerlink">
                        <Nav.Link className="sideLink" href="/"><img className="mylogo" src={logo} alt="Mylogo"/></Nav.Link>
                        <hr/>
                        <Nav.Link className="sideLink" href="#home">About</Nav.Link> 
                        <Nav.Link className="sideLink" href="#home">Discover</Nav.Link> 
                        <Nav.Link className="sideLink" href="#home">Contact</Nav.Link> 
                        <Nav.Link className="sideLink" href="#home">Hire from us</Nav.Link> 
                        <Nav.Link className="sideLink" href="/apply">Apply</Nav.Link> 
                        <Nav.Link className="sideLink" to="footerId">FAQ</Nav.Link>
                    </div> 
                </div> );
        }
        return (
        <Fragment>  
            <div className="mainnav">
                <Navbar bg="dark"  variant="dark" className="fixed-top">
                <Nav.Link className="sideLink" href="/"><img className="mylogo" src={logo} alt="Mylogo"/></Nav.Link>
                        <Nav className="d-none ml-auto d-md-flex mainnavlink">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#discover">Discover</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#hirefu">Hire from us</Nav.Link>
                            <Nav.Link href="/apply">Apply</Nav.Link>
                            <Nav.Link to="footerId">FAQ</Nav.Link>
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