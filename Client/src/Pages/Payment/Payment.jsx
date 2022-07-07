import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'

import "./Payment.scss"

function Payment(props) {
    const stripePromise = "pk_test_51LItchLoNvDBf5Y4dryWBrybO35aIqNM0g6Nbb5uhxSIOtUga7dgUO7YJAxMPL5TW8bAnKZx7MKh4jEz2eDP3IfL00fjpzMiTb";
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent")
            .then((res) => res.json())
            .then(({ clientSecret }) => setClientSecret(clientSecret));
    }, []);


    return (
        <>
            <div className="payment_container">
                <h1>Payment</h1>
                {clientSecret && stripePromise && (
                    <Elements stripe={stripePromise} options={{ clientSecret, }}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </>
    );
}

export default Payment;