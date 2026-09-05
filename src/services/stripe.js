import Stripe from '@stripe/stripe-js';

const stripePromise = Stripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const checkoutLumaPro = async () => {
  try {
    const stripe = await stripePromise;
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: process.env.REACT_APP_LUMA_PRO_PRICE_ID }),
    });

    const session = await response.json();
    return stripe.redirectToCheckout({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
  }
};

export const manageSubscription = async () => {
  try {
    const response = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const session = await response.json();
    window.location.href = session.url;
  } catch (error) {
    console.error('Portal error:', error);
  }
};
