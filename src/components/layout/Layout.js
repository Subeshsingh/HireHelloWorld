import React, { Component, Fragment } from 'react'
import Main from '../main/Main';
import Form from '../../container/form/Form';
import './Layout.css';

export class Layout extends Component {
    render() {
        return (
            <Fragment>            
                <Main/>
                <Form/> 
            </Fragment>
    
        );
    }
}

export default Layout;
