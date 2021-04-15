import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const SplitCardForm = ({ handlePayment, service }) => {

    const [user, setUser] = useContext(UserContext);
    const { title, price } = service;
    const stripe = useStripe();
    const elements = useElements();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = async (event) => {
        // Block native form submission.
        // event.preventDefault();


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
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);

        }
        handlePayment(event);
    };
    return (
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
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default SplitCardForm;