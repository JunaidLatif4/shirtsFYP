import { useEffect, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm'

import { toast } from 'react-toastify';
import { CreatePaymentAPI } from "../../API/Payment"

import "./Payment.scss"
import { useSelector } from 'react-redux';

function Payment(props) {
    const stripePromise = loadStripe("pk_test_51LItchLoNvDBf5Y4dryWBrybO35aIqNM0g6Nbb5uhxSIOtUga7dgUO7YJAxMPL5TW8bAnKZx7MKh4jEz2eDP3IfL00fjpzMiTb");
    const [clientSecret, setClientSecret] = useState('');

    let cartData = useSelector((state) => state.cartData)
    let userData = useSelector((state) => state.userData)

    const createPayment = async () => {
        let res = await CreatePaymentAPI(props.totalPrice, cartData, userData)
        if (res.error != null) {
            toast.error(res.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setClientSecret(res.data.data)
        }
    }

    useEffect(() => {
        createPayment()
    }, []);


    return (
        <>
            <div className="payment_container">
                <p> Total Price = <span style={{ color: "red" }}> {props.totalPrice}</span> </p>
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