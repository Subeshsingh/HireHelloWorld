import React, {Component, Fragment}from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../assests/images/logo.png';
import ApplyForm from '../../container/apply/ApplyForm';
import  './NavbarC.css';
import {Modal} from 'react-bootstrap'
import $ from 'jquery';
export class NavbarC extends Component {
    state={
        show: false,
    }
    sidedrawerHandler =() =>{
     // console.log(this.props.history.location.pathname);
        this.setState((prevState,props)=>(
            {
                ...prevState,
                show: !prevState.show
            }
        ));
    }
    handleApplyFormRe=()=>{
        this.setState((prevState,props)=>(
            { 
                ...prevState,
                show:!prevState.show
            }
        ), this.props.handleApplyForm);
    }
    componentDidMount(){  
        $(".link-nav").click(function() {
            var id = $(this).data('id');
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 1000);
        });
    }
    render() {
        let sideDrawer=null;
        if(this.state.show){
            sideDrawer=(
                <div className="SideDrawer">
                    <div className="sidedrawerlink">
                        <Nav.Link className="sideLink" href="/"><img className="mylogo" src={logo} alt="Mylogo"/></Nav.Link>
                        <hr/>
                        <Nav.Link className="sideLink" href="#about" onClick={this.sidedrawerHandler}>About</Nav.Link> 
                        <Nav.Link className="sideLink" href="#services"onClick={this.sidedrawerHandler}>Discover</Nav.Link> 
                        <Nav.Link className="sideLink" href="#contact"onClick={this.sidedrawerHandler}>Contact</Nav.Link> 
                        {/* <NavLink className="sideLink" to="/#home">ire from us</NavLink>  */}
                        <Nav.Link className="sideLink sideLinkApply" onClick={this.handleApplyFormRe}>Apply</Nav.Link> 
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
                            <Nav.Link id="#about" data-id="#about" className="mx-3 link-nav" >About</Nav.Link>
                            <Nav.Link id="#services" data-id="#services" className="mx-3 link-nav" >Discover</Nav.Link>
                            <Nav.Link id="#contact" data-id="#contact" className="mx-3 link-nav" >Contact</Nav.Link>
                            {/* <NavLink to="/#hirefu">Hire from us</NavLink> */}
                            <Nav.Link  className="mx-3 p-2 sideLinkApply" onClick={this.props.handleApplyForm}>Apply</Nav.Link>
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
            <div>
            <Modal id="applyModal" show={this.props.showApplyForm} onHide={this.props.handleApplyForm} size="md" centered>
				<Modal.Body>
					<span className="modalButton" onClick={this.props.handleApplyForm}>&#10006;</span>
					<div className="applyformWrapper">
                        <h4 className="applyFormHeading">Apply to HireHelloWorld</h4>
                        <div className="contentDevider"></div>
					    <ApplyForm handleApplyForm={this.props.handleApplyForm}/>
					</div>
				</Modal.Body>
	        </Modal>
            </div>
        </Fragment>
        )
    }
}

export default NavbarC;