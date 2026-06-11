import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {

    const [{user, basket}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{
        //generate stripe secret to charge customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('SECRET >>>',clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        console.log("clientSecret =", clientSecret);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            navigate('/orders',{ replace: true })
        })
    }

    const handleChange = event =>{
        //listen for changes in card element
        //and display errors as card dteails are typed
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const formattedTotal = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(getBasketTotal(basket)); 

  return (
    <div className='payment'>
      <div className='payment__container'>

        <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/*delivery address */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>202 Tulip Apartments</p>
                <p>Shashtri Nagar</p>
                <p>New Delhi - 143067</p>
            </div>

        </div>
        {/*review items */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review Items and Delivery</h3>
            </div>
            <div className='payment__items'>
                {basket.map(item => (
                    <CheckoutProduct 
                      id = {item.id}
                      title={item.title}
                      image = {item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                ))}
            </div>
        </div>
        {/*payment method */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Payment Method</h3>
            </div>
            
            <div className='payment__details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>

                    <div className='payment__priceContainer'>
                        <h3>Order Total: {formattedTotal}</h3>
                        <button disabled = {processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
