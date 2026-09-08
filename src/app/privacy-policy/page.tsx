import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// TODO — genuinely missing content, not a stylistic placeholder: the Spam Act 2003 (Cth)
// requires an ABN in commercial email sender identification. Our ABN hasn't been provided
// yet, so it's omitted from the newsletter section below (§6) rather than faked. Add it
// there — and to the actual newsletter footer/emails — before any real newsletter send.

export const metadata: Metadata = {
  title: "Privacy Policy — M&H Developments",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-6 md:px-12 py-16">
        <article className="max-w-[720px] mx-auto">
          <h1 className="text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.15] text-brand-black mb-2">
            Privacy Policy
          </h1>
          {/* Last-updated date — bump this manually whenever the policy content below changes */}
          <p className="text-sm text-brand-gray mb-10">Last updated: September 8, 2026</p>

          <p className="text-base leading-relaxed text-brand-black/80 mb-10">
            M&amp;H Developments (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is
            committed to protecting your privacy in accordance with the Australian Privacy
            Principles under the Privacy Act 1988 (Cth).
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">1. What we collect</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              Through our website, we may collect: your name and phone number (required when
              you submit our contact form), your email address (optional on the contact form;
              required if you sign up to our newsletter), and any other information you choose
              to provide in your enquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">2. How we use it</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              We use this information to respond to your enquiry about our house-and-land
              packages and services, and — if you&rsquo;ve opted in — to send you our
              newsletter with new listings and updates. We do not use automated software to
              screen, filter, or rank enquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              3. Disclosure to third parties
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              We do not sell your personal information. We may share relevant details with
              trusted parties directly involved in progressing your enquiry (for example, a
              partner builder, if your enquiry relates to a specific package), and with service
              providers who help us operate our website and communications (for example,
              hosting or email delivery providers). Some of these providers may store data on
              servers located outside Australia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              4. Storage and security
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              We take reasonable steps to keep your information secure and to protect it from
              misuse, loss, and unauthorised access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              5. Access and correction
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              You can ask us at any time what information we hold about you, or ask us to
              correct it, by contacting us at{" "}
              <a
                href="mailto:hello@mhdevelopments.com"
                className="text-brand-black underline hover:text-brand-gray transition-colors"
              >
                hello@mhdevelopments.com
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              6. Newsletter and unsubscribing
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              We only send marketing emails to people who have actively opted in. Every email
              includes a free, simple way to unsubscribe, which we action within 5 business
              days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">7. Complaints</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              If you believe we have mishandled your personal information, please contact us at{" "}
              <a
                href="mailto:hello@mhdevelopments.com"
                className="text-brand-black underline hover:text-brand-gray transition-colors"
              >
                hello@mhdevelopments.com
              </a>
              . If you&rsquo;re not satisfied with our response, you can lodge a complaint with
              the Office of the Australian Information Commissioner (OAIC) at{" "}
              <a
                href="https://oaic.gov.au"
                target="_blank"
                rel="noreferrer"
                className="text-brand-black underline hover:text-brand-gray transition-colors"
              >
                oaic.gov.au
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-black mb-2">
              8. Changes to this policy
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              We may update this policy from time to time. The current version will always be
              available on this page.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
