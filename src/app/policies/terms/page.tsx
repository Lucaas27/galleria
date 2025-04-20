import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Galleria",
  description: "Terms & Conditions for Galleria",
};

export default function TermsPage() {
  return (
    <div className="terms-page">
      {/* Terms Header */}
      <div className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Terms & Conditions</h1>
        <p className="text-gray-400">Last updated: April 19, 2025</p>
      </div>

      {/* Terms of Service Section */}
      <article id="terms" className="mb-16 space-y-6">
        <h2 className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold">Terms of Service</h2>

        <section>
          <h3 className="mb-3 text-xl font-semibold">1. Introduction</h3>
          <p className="mb-4">
            Welcome to Galleria (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms of
            Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website located at{" "}
            <a href="https://galleria.lucasgomes.co.uk" className="text-blue-400 hover:underline">
              https://galleria.lucasgomes.co.uk
            </a>
            (together or individually &quot;Service&quot;) operated by Galleria.
          </p>
          <p className="mb-4">
            Our{" "}
            <Link href="/policies/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>{" "}
            also governs your use of our Service and explains how we collect, safeguard and disclose information that
            results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy
            (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be
            bound of them.
          </p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then you may not use the Service. These Terms
            apply to all visitors, users and others who wish to access or use the Service.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">2. Communications</h3>
          <p>
            By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
            information we may send. However, you may opt out of receiving any, or all, of these communications from us
            by following the unsubscribe link or by emailing contactgalleri4@gmail.com.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">3. Purchases</h3>
          <p className="mb-4">
            If you wish to purchase any product or service made available through the Service (&quot;Purchase&quot;),
            you may be asked to supply certain information relevant to your Purchase including, without limitation, your
            credit card number, the expiration date of your credit card, your billing address, and your shipping
            information.
          </p>
          <p>
            You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment
            method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct
            and complete.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">4. Content</h3>
          <p className="mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text,
            graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post
            on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mb-4">
            By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you
            own it) and/or you have the right to use it and the right to grant us the rights and license as provided in
            these Terms, and (ii) that the posting of your Content on or through the Service does not violate the
            privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
          </p>
          <p>We reserve the right to terminate the account of anyone found to be infringing on a copyright.</p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">5. Prohibited Uses</h3>
          <p className="mb-4">
            You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use the
            Service:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-8">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk
              mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or
              entity.
            </li>
            <li>
              In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or
              harmful.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">6. Analytics</h3>
          <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <p className="mt-2">
            For more information on how we use cookies, please see our{" "}
            <Link href="/policies/cookies" className="text-blue-400 hover:underline">
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">7. Intellectual Property</h3>
          <p className="mb-4">
            The Service and its original content (excluding Content provided by users), features and functionality are
            and will remain the exclusive property of Galleria and its licensors. The Service is protected by copyright,
            trademark, and other laws of both the United Kingdom and foreign countries. Our trademarks and trade dress
            may not be used in connection with any product or service without the prior written consent of Galleria.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">8. Termination</h3>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or
            liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
            limited to a breach of the Terms.
          </p>
          <p>
            If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the
            Terms which by their nature should survive termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">9. Disclaimer</h3>
          <p className="mb-4">
            Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS
            AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of merchantability, fitness for a particular purpose,
            non-infringement or course of performance.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">10. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without
            regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">11. Changes to Terms</h3>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by
            the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>
        </section>

        <section>
          <h3 className="mb-3 text-xl font-semibold">12. Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at contactgalleri4@gmail.com.</p>
        </section>
      </article>
    </div>
  );
}
