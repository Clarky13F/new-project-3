// client/src/pages/Donations.jsx

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Donations = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('[error]', error);
      setError(error.message);
      setLoading(false);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError(null);
      setLoading(false);
      setSuccess(true);
      // Send paymentMethod.id to your server to complete the payment
    }
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>Payment successful!</div>}
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Donate'}
        </button>
      </form>
    </div>
  );
};

export default Donations;
