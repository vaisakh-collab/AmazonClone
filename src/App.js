import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as  Router, Routes, Route, Navigate } from "react-router-dom";

import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import Payment from './Payment';
import Footer from './Footer'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Orders from './Orders';

const promise = loadStripe('pk_test_51TfJuyKofOsPT9mhMnyDjqEhJ0uFPe16RUPHklr2Jnbr9ZwHYI0neR9UNWWcPtVs0JgZyCZZJIYav0IlQM6NmeqQ00jEkdWIXQ');

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser) {
        //user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      } else{
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) //will only run once when the app component loads


  return (
    <Router>
      <div className="app">
      
        <Routes>

          <Route
            path = "/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path = "/checkout"
            element={
              <>
                <Header />               
                <Checkout />                
              </>
            }
          />

          <Route 
            path = "/payment"
            element={
              user? (
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>                
              ) : (
                <Navigate to='/login' replace />
              )

            }
          />

          <Route 
            path = "/orders"
            element={
              user? (
                <>
                  <Header />
                  <Orders />
                </>
              ) : (
                <Navigate to="/login" replace />
              )

            }
          />

          <Route 
            path="/" 
            element={
             <>
              <Header />
              <Home />
              <Footer />
             </> 
            }
          />

        </Routes>

      </div>

    </Router>
  );
}

export default App;

//BEM naming convention