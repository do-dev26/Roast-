import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function RefundPage() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav />
      <section className="px-6 md:px-12 py-16 max-w-2xl mx-auto">
        <h1 className="font-display text-5xl tracking-wide mb-2">Refund Policy</h1>
        <p className="font-mono text-xs text-paper/40 mb-8">Last updated: [DATE]</p>

        <div className="space-y-6 font-body text-paper/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">1. Paid Plans</h2>
            <p>
              The Basic plan (₹499) unlocks all entertainment and professional
              engines. [Specify here whether this is a one-time purchase or a
              recurring subscription — this materially changes the refund terms
              below.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">2. Refund Eligibility</h2>
            <p>
              [Choose and customize one approach:]
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>No refunds:</strong> Given the Service delivers digital
                content instantly upon purchase, all sales are final and non-refundable,
                except where required by law.
              </li>
              <li>
                <strong>Limited refund window:</strong> Refund requests made within
                [X days] of purchase, where the paid features were not substantially
                used, may be granted at our discretion.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">3. How to Request a Refund</h2>
            <p>
              Contact us at [SUPPORT EMAIL] or via our{' '}
              <a href="/contact" className="text-marigold hover:underline">Contact page</a>{' '}
              with your account email and order ID. We will respond within
              [RESPONSE TIME, e.g. 3-5 business days].
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">4. Payment Processor</h2>
            <p>
              Payments are processed via CCAvenue. Approved refunds are issued to
              the original payment method and may take [X-Y business days] to
              reflect, depending on your bank.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">5. Subscription Cancellation</h2>
            <p>
              [If subscription-based:] You can cancel anytime from Settings. Cancelling
              stops future billing but does not automatically refund the current
              billing period unless it falls within the refund window above.
            </p>
          </div>

          <p className="text-sm text-paper/40 italic pt-4 border-t border-paper/10">
            This is a template with open decisions marked in brackets — particularly
            whether the ₹499 plan is one-time or recurring, and your refund window.
            Indian consumer protection law has specific requirements for digital
            goods refunds; have a lawyer finalize this before publishing.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
