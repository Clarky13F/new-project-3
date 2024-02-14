import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import Page from "../components/Page";
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';

import { PROCESS_DONATION } from '../graphql/mutations';

const stripePromise = loadStripe('pk_test_51OjEnyBdRQtOxBVpIgiqflg5KazQaEUtPXqtz7lELRpiRPuY5ZSyY60ZsGBrsW4CvzHQIGhuDuslzZA0UcqNjzif00bXe3wGem');

const headContent = (
  <>
    <title>Donations</title>
    <meta name="description" content="This is the donations page of my app." />
  </>
);

const DonationsForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [donationAmount, setDonationAmount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [processDonationMutation] = useMutation(PROCESS_DONATION);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    if (!stripe || !elements) {
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    const { error, data } = await processDonationMutation({
      variables: {
        amount: donationAmount,
      },
    });
  
    if (error) {
      console.error('[error]', error);
      setError(error.message);
      setLoading(false);
    } else {
      console.log('[DonationResponse]', data.processDonation);
      setError(null);
      setLoading(false);
      setSuccess(data.processDonation.success);
  
      if (data.processDonation.success) {
        const result = await stripe.confirmCardPayment(data.processDonation.clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });
  
        if (result.error) {
          console.error('[Stripe Error]', result.error.message);
          setError(result.error.message);
          setSuccess(false);
        } else {
          console.log('[Payment Confirmation]', result.paymentIntent);
          setSuccess(true);
        }
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Make a Donation</h2>
      <div>
        <label htmlFor="donationAmount">Choose Donation Amount:</label>
        <select
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(Number(e.target.value))}
        >
          <option value={10}>$10</option>
          <option value={20}>$20</option>
          <option value={50}>$50</option>
          <option value={100}>$100</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <CardElement />
        </div>
        {error && <div>{error}</div>}
        {success && <div>Payment successful!</div>}
        <button type="submit" disabled={!stripe || loading} >
          {loading ? 'Processing...' : 'Donate'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '20%',
    margin: '0 auto',
    padding: '20px',
  }
};


const Donations = () => {
  return (
    <Page headContent={headContent}>
      <Elements stripe={stripePromise}>
        <DonationsForm />
      </Elements>
    </Page>
  );
};

export default Donations;
