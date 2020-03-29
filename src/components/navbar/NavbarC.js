import React, {Component, Fragment}from 'react';
import {NavLink} from 'react-router-dom';
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
                        <Nav.Link className="sideLink" href="/#about" onClick={this.sidedrawerHandler}>About</Nav.Link> 
                        <Nav.Link className="sideLink" href="/#services"onClick={this.sidedrawerHandler}>Discover</Nav.Link> 
                        <Nav.Link className="sideLink" href="/#contact"onClick={this.sidedrawerHandler}>Contact</Nav.Link> 
                        {/* <NavLink className="sideLink" to="/#home">ire from us</NavLink>  */}
                        <NavLink className="sideLink" to="/apply" onClick={this.sidedrawerHandler}>Apply</NavLink> 
                        {/* <Nav.Link className="sideLink" to="/#footer">FAQ</Nav.Link> */}
                    </div> 
                </div> );
        }
        return (
        <Fragment>  
            <div className="mainnav">
                <Navbar bg="dark"  variant="dark" className="fixed-top">
                    <Nav.Link className="sideLink" href="/"><img className="mylogo" src={logo} alt="Mylogo"/></Nav.Link>
                        <Nav className="d-none ml-auto d-md-flex mainnavlink">
                            <Nav.Link href="/#about" className="mx-3" >About</Nav.Link>
                            <Nav.Link href="/#services" className="mx-3" >Discover</Nav.Link>
                            <Nav.Link href="/#contact" className="mx-3" >Contact</Nav.Link>
                            {/* <NavLink to="/#hirefu">Hire from us</NavLink> */}
                            <NavLink to="/apply" className="mx-3 p-2" >Apply</NavLink>
                            {/* <NavLink to="/#footer">FAQ</NavLink> */}
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