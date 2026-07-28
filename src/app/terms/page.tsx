import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="July 27, 2026">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          the Hireveal website and the Hireveal Chrome extension (together, the
          &quot;Service&quot;), operated by Hireveal, Inc. (&quot;Hireveal,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By installing the
          Extension or using the Site, you agree to be bound by these Terms. If you do
          not agree, do not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Hireveal provides informational signals about job listings on supported job
          boards, including indicators such as Listing Pulse, Ghosting Index,
          Sponsorship Truth Layer, and Scam Detection. These signals are generated from
          publicly available listing data and heuristic analysis, and are provided to
          help you make more informed decisions — they are not a substitute for your
          own judgment or due diligence.
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 16 years old, or the age of legal majority in your
          jurisdiction, to use the Service.
        </p>
      </section>

      <section>
        <h2>4. Accounts</h2>
        <p>
          If the Service requires an account, you are responsible for maintaining the
          confidentiality of your login credentials and for all activity under your
          account. Notify us promptly of any unauthorized use.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the Extension, except as permitted by law.</li>
          <li>Use the Service to harass, defame, or impersonate any person or organization.</li>
          <li>Interfere with or disrupt the Service or its underlying infrastructure.</li>
          <li>Use automated means to scrape, extract, or resell the signals produced by the Service without our written permission.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>
      </section>

      <section>
        <h2>6. No Guarantee of Accuracy</h2>
        <p>
          Hireveal&apos;s signals are estimates based on available data and are provided
          &quot;as is,&quot; without warranty of any kind. We do not guarantee that a
          listing flagged as healthy is genuine, or that a listing flagged as risky is
          actually fraudulent. You are solely responsible for any decisions you make
          based on information from the Service, including whether to apply to,
          interview with, or accept an offer from any employer or recruiter.
        </p>
      </section>

      <section>
        <h2>7. Third-Party Sites and Services</h2>
        <p>
          The Extension operates on top of third-party job boards (such as LinkedIn and
          Indeed) that we do not own or control. Hireveal is not affiliated with, and is
          not endorsed by, these third parties, and we are not responsible for their
          content, policies, or practices.
        </p>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>
        <p>
          The Service, including its design, text, graphics, and underlying technology,
          is owned by Hireveal or its licensors and is protected by intellectual
          property laws. These Terms do not grant you any rights to our trademarks or
          branding.
        </p>
      </section>

      <section>
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot;
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <h2>10. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, HIREVEAL SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
          OF PROFITS, EMPLOYMENT OPPORTUNITY, OR DATA, ARISING FROM YOUR USE OF THE
          SERVICE OR ANY DECISION MADE IN RELIANCE ON IT.
        </p>
      </section>

      <section>
        <h2>11. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or
          without notice, if we believe you have violated these Terms. You may stop
          using the Service at any time by uninstalling the Extension.
        </p>
      </section>

      <section>
        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. If we make material changes, we
          will update the effective date above. Continued use of the Service after
          changes take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, United States,
          without regard to its conflict of law principles.
        </p>
      </section>

      <section>
        <h2>14. Contact Us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
