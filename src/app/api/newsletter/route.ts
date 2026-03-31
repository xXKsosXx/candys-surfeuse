import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email: string };

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const resend = getResend();
    await resend.emails.send({
      from: "Candys <noreply@sparkana.fr>",
      to: email,
      subject: "Bienvenue chez Candys !",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #fff8f0; padding: 40px 30px;">
          <h1 style="font-family: Epilogue, sans-serif; color: #00526d; font-size: 24px; text-transform: uppercase; letter-spacing: -0.02em;">
            Bienvenue dans la vague !
          </h1>
          <p style="color: #40484d; font-size: 14px; line-height: 1.6;">
            Merci de vous être inscrit(e) à la newsletter Candys.
            Vous serez parmi les premiers à découvrir nos nouvelles collections,
            nos offres exclusives et nos conseils surf.
          </p>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://candys.com"}/shop"
             style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #ab3500; color: white; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
            Découvrir la collection
          </a>
          <p style="margin-top: 30px; color: #40484d; font-size: 12px;">
            &mdash; L'équipe Candys
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
