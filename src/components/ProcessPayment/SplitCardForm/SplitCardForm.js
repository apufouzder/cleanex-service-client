import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const SplitCardForm = ({ handlePayment, service }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [user, setUser] = useContext(UserContext);
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const { title, price } = service;
    const stripe = useStripe();
    const elements = useElements();


    const onSubmit = async (event) => {

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error);
            setPaymentSuccess(null);
            console.log('[error]', error);
        } else {
            setPaymentSuccess(paymentMethod);
            setPaymentError(null);
            console.log('[PaymentMethod]', paymentMethod);
            console.log('[PaymentMethod]', paymentMethod.card);
            if (paymentMethod) {
                handlePayment(paymentMethod.card, paymentMethod.id);
            }
        }

    };
    return (
        <div className="shadow-sm p-4 mt-5 mr-4 w-75"
            style={{
                background: 'white',
                marginLeft: '20px',
                padding: '17px',
                borderRadius: '10px'
            }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter name" name="name" defaultValue={user.name} ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter email" name="email" defaultValue={user.email} ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicTitle">
                    <Form.Control type="text" placeholder="Enter title" name="title" defaultValue={title} ref={register} />
                </Form.Group>

                <Form.Group controlId="formBasicPrice">
                    <Form.Control type="text" placeholder="Enter price" name="price" defaultValue={price} ref={register} />
                </Form.Group>

                <div>
                    <label htmlFor="">Pay With</label>
                    <div class="form-check mb-3">
                        <span className="mr-5">
                            <input class="form-check-input" type="radio" name="creditCard" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">Credit Card</label>
                        </span>

                        <span>
                            <input class="form-check-input" type="radio" name="paypal" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">Paypal</label>
                        </span>
                    </div>
                    <Form.Group style={{
                        width: '450px',
                        padding: '12px',
                        boxShadow: '0px 2px 5px 0px #d6d7d9',
                        borderRadius: '5px',
                        color: '#aab7c4 !important',
                        background: 'white'
                    }}>

                        <CardElement />
                    </Form.Group>
                    {
                        paymentError && <p style={{ color: 'red' }}>{paymentError.message}</p>
                    }
                    {
                        paymentSuccess && <p style={{ color: 'green' }}>Your booking has been successfully!</p>
                    }
                </div>

                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default SplitCardForm;