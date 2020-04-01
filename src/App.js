import React, { Fragment, Component } from 'react';
import './App.css';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Footer from './components/footer/Footer';
import NavbarC from './components/navbar/NavbarC';

export class App extends Component {
  render() {
    let router=(
        <Switch>
           <Route path='/' exact component={Layout}/>
           <Redirect to="/"/>
        </Switch>
    );
    return (
      <Fragment>
        {router}
        <Footer/>
     </Fragment>
    )
  }
}

export default withRouter(App);
