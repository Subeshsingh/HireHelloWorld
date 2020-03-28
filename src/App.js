import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import Form from './container/form/Form';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
     <Layout/>
      <Main/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
// <div className="App">
    //   <button type="button" class="btn btn-primary"> Hello!</button>      
    // </div>
