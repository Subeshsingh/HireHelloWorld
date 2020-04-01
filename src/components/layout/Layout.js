import React, { Component, Fragment } from 'react'
import Main from '../main/Main';
import Form from '../../container/form/Form';
import NavbarC from '../navbar/NavbarC';
import './Layout.css';

export class Layout extends Component {
    state={
        showApplyForm: false,
    }

    handleApplyForm =() =>{
        console.log("handle Apply Form");
         this.setState((prevState,props)=>(
             {
                 ...prevState,
                 showApplyForm: !prevState.showApplyForm
             }
         ));
         console.log(this.state.showApplyForm);
     }
    render() {
        return (
            <Fragment>
                <NavbarC handleApplyForm={this.handleApplyForm} showApplyForm={this.state.showApplyForm}/>            
                <Main handleApplyForm={this.handleApplyForm}/>
                <Form/> 
            </Fragment>
        );
    }
}

export default Layout;
