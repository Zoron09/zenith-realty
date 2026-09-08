import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — M&H Developments",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="max-w-wrap mx-auto px-6 md:px-12 py-16">
        <article className="max-w-[720px] mx-auto">
          <h1 className="text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.15] text-brand-black mb-2">
            Terms of Service
          </h1>
          {/* Last-updated date — bump this manually whenever the terms content below changes */}
          <p className="text-sm text-brand-gray mb-10">Last updated: September 8, 2026</p>

          <p className="text-base leading-relaxed text-brand-black/80 mb-10">
            By using this website, you agree to the following terms.
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              1. Information is illustrative only
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              M&amp;H Developments is currently in an early stage of operation. All images,
              renders, floor plans, dimensions, and specifications shown on this site are
              illustrative only and subject to change without notice. Nothing on this site
              constitutes an offer, warranty, or binding contract.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              2. Not financial, legal, or investment advice
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              Content on this site is general information only. It is not financial, legal,
              conveyancing, or investment advice. You should seek independent professional
              advice before making any decision to purchase land or enter a building contract.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              3. Referral and commission disclosure
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              Where we refer you to a third party — such as a mortgage broker, builder, or
              other service provider — we will disclose any commission, referral fee, or other
              benefit we receive from that arrangement, in accordance with our obligations
              under the Property and Stock Agents Act 2002 (NSW).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">4. Agent&rsquo;s interest</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              If a licensee of M&amp;H Developments (or a director of the company) has a
              personal ownership interest in a property advertised on this site, that interest
              will be clearly disclosed on the relevant listing, in accordance with s.50 of the
              Property and Stock Agents Act 2002 (NSW).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">5. Intellectual property</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              All content on this site — including text, images, and design — is owned by or
              licensed to M&amp;H Developments and may not be reproduced without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">
              6. Limitation of liability
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              To the extent permitted by law, M&amp;H Developments is not liable for any loss
              arising from your use of this site. Nothing in these terms excludes, restricts,
              or modifies any consumer guarantee, right, or remedy you have under the
              Australian Consumer Law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-brand-black mb-2">7. Governing law</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              These terms are governed by the laws of New South Wales, Australia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-black mb-2">8. Contact</h2>
            <p className="text-base leading-relaxed text-brand-gray">
              Questions about these terms can be sent to{" "}
              <a
                href="mailto:hello@mhdevelopments.com"
                className="text-brand-black underline hover:text-brand-gray transition-colors"
              >
                hello@mhdevelopments.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
