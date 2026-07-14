import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';

export default function PrivacyPage() {
  return (
    <div className="bg-ink text-paper min-h-screen">
      <SiteNav />
      <section className="px-6 md:px-12 py-16 max-w-2xl mx-auto">
        <h1 className="font-display text-5xl tracking-wide mb-2">Privacy Policy</h1>
        <p className="font-mono text-xs text-paper/40 mb-8">Last updated: [DATE]</p>

        <div className="space-y-6 font-body text-paper/80 leading-relaxed">
          <p>
            This Privacy Policy explains how [COMPANY NAME] ("we", "us") collects,
            uses, and protects your information when you use the Service.
          </p>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">1. What We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Account details: email address, authentication data</li>
              <li>Photos you upload for analysis</li>
              <li>AI-generated results linked to your account (your history)</li>
              <li>Payment and subscription status (payment details are handled by our payment processor, not stored by us directly)</li>
              <li>Basic usage data (features used, timestamps) for improving the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">2. How We Use It</h2>
            <p>
              We use your photo and account data to run AI analysis, generate and
              store your results, manage your subscription, and provide customer
              support. We do not sell your photos or personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">3. Third-Party Processing</h2>
            <p>
              Photos are sent to our AI provider (Google Gemini) to generate results,
              stored via our cloud storage provider (Cloudinary), and your account
              data is managed through our authentication/database provider (Firebase).
              Payments are processed by our payment gateway. Each of these providers
              processes data under their own privacy and security terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">4. Data Retention</h2>
            <p>
              We retain your photos and results for as long as your account is active,
              so your history remains available to you. You can delete individual
              results or your entire account at any time from Settings; deletion
              removes the associated data from our systems within [RETENTION PERIOD,
              e.g. 30 days].
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">5. Your Rights</h2>
            <p>
              You can access, export, or delete your data by contacting us or using
              in-app controls. Depending on your location, you may have additional
              rights under applicable data protection law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">6. Children's Privacy</h2>
            <p>
              The Service is not directed at children under [MINIMUM AGE]. We do not
              knowingly collect data from children under this age. [Note: given this
              Service processes photos and has no robust age-verification mechanism,
              this section needs careful legal review — consider what additional
              safeguards may be required in your target markets.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">7. Security</h2>
            <p>
              We use reasonable technical and organizational measures (encrypted
              connections, access controls, row-level security on our database) to
              protect your data, but no system is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl tracking-wide text-paper mb-2">8. Contact</h2>
            <p>
              Questions about this policy? Reach us at [SUPPORT EMAIL] or via our{' '}
              <a href="/contact" className="text-marigold hover:underline">Contact page</a>.
            </p>
          </div>

          <p className="text-sm text-paper/40 italic pt-4 border-t border-paper/10">
            This is a template and not legal advice. Because this Service processes
            photos of real people and has no age-verification system, have a lawyer
            review this policy — particularly the children's privacy and data
            retention sections — before publishing, and confirm compliance with
            applicable law (e.g. India's DPDP Act) for your markets.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
