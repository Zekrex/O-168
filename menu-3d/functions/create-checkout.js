import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  try {
    const { name, price, table } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: name,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        table: table,
        menu: name,
      },
      success_url: `${event.headers.origin}/succes.html`,
      cancel_url: `${event.headers.origin}/`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
