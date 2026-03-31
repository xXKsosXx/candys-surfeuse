import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getResend } from "@/lib/resend";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      const resend = getResend();
      await resend.emails.send({
        from: "Candys Surfeuse <noreply@sparkana.fr>",
        to: customerEmail,
        subject: "Confirmation de commande — Candys Surfeuse",
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #fff8f0; padding: 40px 30px;">
            <h1 style="font-family: Epilogue, sans-serif; color: #00526d; font-size: 24px; text-transform: uppercase; letter-spacing: -0.02em;">
              Merci pour votre commande !
            </h1>
            <p style="color: #40484d; font-size: 14px; line-height: 1.6;">
              Votre commande a bien été confirmée. Nous préparons vos articles avec soin.
              Vous recevrez un email de suivi dès l'expédition.
            </p>
            <div style="margin-top: 24px; padding: 20px; background: #f4ede3; border-radius: 8px;">
              <p style="color: #1e1b15; font-size: 14px; margin: 0;">
                <strong>Montant total :</strong> ${(session.amount_total! / 100).toFixed(2)} &euro;
              </p>
            </div>
            <p style="margin-top: 30px; color: #40484d; font-size: 12px;">
              &mdash; L'équipe Candys Surfeuse
            </p>
          </div>
        `,
      });
    }
  }

  return NextResponse.json({ received: true });
}
