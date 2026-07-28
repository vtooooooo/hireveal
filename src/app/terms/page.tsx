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
    <LegalPage title="Terms of Service" effectiveDate="July 28, 2026">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          the Hireveal website and the Hireveal Chrome extension (together, the
          &quot;Service&quot;), operated by Hireveal (&quot;Hireveal,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By installing the
          Extension or using the Site, you agree to be bound by these Terms. If you do
          not agree, do not use the Service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Hireveal reads the active job listing you have open and combines what it can
          verify with your own confirmed profile to produce a personalized 0–100
          opportunity score, along with supporting information: posting-age evidence,
          sponsorship information, salary and experience requirements, and applicant
          activity. The score is an estimate to help you prioritize your time — it is
          not a guarantee that any job is legitimate, currently open, or a good fit, and
          it is not a substitute for your own judgment or due diligence.
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
          Any account you create is stored locally on your device and is not backed by
          a Hireveal server. It does not synchronize across browsers or devices, and if
          you clear your browser data or switch devices, your account and profile will
          not carry over — we do not hold a copy to restore it from. You are responsible
          for the accuracy of any information you enter and for keeping your device
          secure.
        </p>
      </section>

      <section>
        <h2>5. Your Resume and Profile Data</h2>
        <p>
          If you choose to upload a resume or enter profile details, you are
          representing that the information is yours and accurate to the best of your
          knowledge. Hireveal parses uploaded resumes locally in your browser and does
          not retain the original file or the raw extracted text; only the structured
          profile fields you review and confirm are saved, and only on your device.
        </p>
      </section>

      <section>
        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Reverse engineer, decompile, or attempt to extract the source code of the Extension, except as permitted by law.</li>
          <li>Use the Service to harass, defame, or impersonate any person or organization.</li>
          <li>Interfere with or disrupt the Service or its underlying infrastructure.</li>
          <li>Use automated means to scrape, extract, or resell the output of the Service without our written permission.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>
      </section>

      <section>
        <h2>7. No Guarantee of Accuracy; Not Legal or Immigration Advice</h2>
        <p>
          Hireveal&apos;s opportunity score and every signal behind it are estimates
          based on the evidence available at the time — a job listing&apos;s own text,
          public records from Greenhouse, Lever, or the Internet Archive, and public H-1B
          filing history from MyVisaJobs — provided &quot;as is,&quot; without warranty
          of any kind. An archived snapshot shows a page existed by a given date; it
          does not prove when a role was first created. A company&apos;s past
          sponsorship history is background context, not confirmation that a specific
          open role sponsors. Hireveal does not display verified or unverified employer
          badges and does not perform scam or fraud detection. Nothing in the Service
          constitutes legal, immigration, or career advice, and you are solely
          responsible for any decisions you make based on information from the Service,
          including whether to apply to, interview with, or accept an offer from any
          employer or recruiter.
        </p>
      </section>

      <section>
        <h2>8. Beta Status and Pricing</h2>
        <p>
          The Service is currently free while in beta. We may introduce paid credit
          plans in the future; if we do, we will communicate the change before it
          affects you, and continued use of any then-current free functionality will
          not be revoked without notice.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Sites and Data Sources</h2>
        <p>
          The Extension operates on top of third-party job boards (such as LinkedIn)
          that we do not own or control, and it queries independent public data sources
          (Greenhouse, Lever, the Internet Archive, and MyVisaJobs) that we do not own
          or control either. Hireveal is not affiliated with, and is not endorsed by,
          any of these third parties, and we are not responsible for their content,
          availability, or accuracy.
        </p>
      </section>

      <section>
        <h2>10. Intellectual Property</h2>
        <p>
          The Service, including its design, text, graphics, and underlying technology,
          is owned by Hireveal or its licensors and is protected by intellectual
          property laws. These Terms do not grant you any rights to our trademarks or
          branding.
        </p>
      </section>

      <section>
        <h2>11. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot;
          WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT.
        </p>
      </section>

      <section>
        <h2>12. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, HIREVEAL SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS
          OF PROFITS, EMPLOYMENT OPPORTUNITY, OR DATA, ARISING FROM YOUR USE OF THE
          SERVICE OR ANY DECISION MADE IN RELIANCE ON IT — INCLUDING DECISIONS BASED ON
          POSTING-AGE EVIDENCE, SPONSORSHIP INFORMATION, OR THE OPPORTUNITY SCORE.
        </p>
      </section>

      <section>
        <h2>13. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time, with or
          without notice, if we believe you have violated these Terms. You may stop
          using the Service at any time by uninstalling the Extension, which also
          removes the local data described in our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. If we make material changes, we
          will update the effective date above. Continued use of the Service after
          changes take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>15. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Delaware, United States,
          without regard to its conflict of law principles.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
