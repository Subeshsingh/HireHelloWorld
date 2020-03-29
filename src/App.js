import React, { Fragment, Component } from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Footer from './components/footer/Footer';
import ApplyForm from './container/apply/ApplyForm';
import NavbarC from './components/navbar/NavbarC';

export class App extends Component {
  render() {
    let router=(
        <Switch>
           <Route path='/apply' exact component={ApplyForm}/>
           <Route path='/' exact component={Layout}/>
           <Redirect to="/"/>
        </Switch>
    );
    return (
      <Fragment>
        <NavbarC/>
          {router}
        <Footer id="footerId"/>
     </Fragment>
    )
  }
}

export default App;


// <Route exact path="/" render={props => (
//   <React.Fragment>
//     <MainScreen />
//     <AboutMain />
//     <Service />
//     <Product />
//     <AboutUs />
//     <Team />
//     <Director />
//     <ContactUsMain />
//   </React.Fragment>
// )} />