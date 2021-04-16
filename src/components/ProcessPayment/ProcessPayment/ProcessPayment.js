import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import SplitCardForm from "../SplitCardForm/SplitCardForm";


const stripePromise = loadStripe("pk_test_51Ie2ihF1tExMkB7LLtBXDKe7hcBFndf8DnTt0aA6DhMNt1mW6w56s1wQAU29j17zgZYxGyUHN0h4qujhFzZzzr9i00TdUDRA2B");

const ProcessPayment = ({ service, handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm service={service} handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;