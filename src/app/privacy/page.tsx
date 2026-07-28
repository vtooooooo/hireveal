import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/shared/legal-page";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="July 27, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Hireveal, Inc. (&quot;Hireveal,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
          information when you use the Hireveal website (the &quot;Site&quot;) and the
          Hireveal Chrome extension (the &quot;Extension,&quot; and together with the
          Site, the &quot;Service&quot;). By using the Service, you agree to the
          collection and use of information as described in this policy.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Account information.</strong> If you create a Hireveal account, we
            collect your email address and any other details you choose to provide.
          </li>
          <li>
            <strong>Listing data processed by the Extension.</strong> When the Extension
            is active on a supported job board (such as LinkedIn or Indeed), it reads
            the content of the job listing page you are currently viewing — for
            example, the posting text, salary range, applicant count, and posting date —
            in order to generate the signals shown to you (Listing Pulse, Ghosting
            Index, Sponsorship Truth Layer, and Scam Detection). This processing happens
            only on pages you actively visit while the Extension is enabled.
          </li>
          <li>
            <strong>Site usage information.</strong> We collect limited technical
            information when you visit the Site, such as pages viewed and general
            device/browser information, to keep the Site working correctly and secure.
          </li>
          <li>
            <strong>Communications.</strong> If you contact us, we retain the content
            of your message and our correspondence with you.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>Operate, maintain, and improve the Service and the signals it produces.</li>
          <li>Provide, and respond to requests related to, your account.</li>
          <li>Detect, investigate, and prevent fraudulent or scam listings.</li>
          <li>Communicate with you about the Service, including support requests.</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
      </section>

      <section>
        <h2>4. How We Share Information</h2>
        <p>
          We do not sell your personal information. We share information only with:
        </p>
        <ul>
          <li>
            Service providers who help us operate the Service (for example, hosting and
            email delivery), under obligations to protect your information.
          </li>
          <li>
            Authorities, when required by law, legal process, or to protect the rights,
            safety, or property of Hireveal, our users, or the public.
          </li>
          <li>A successor entity, in the event of a merger, acquisition, or asset sale.</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Retention</h2>
        <p>
          We retain account information for as long as your account is active, and
          listing data processed by the Extension only as long as needed to generate
          and display the relevant signals. We delete or anonymize information when it
          is no longer needed for these purposes, unless a longer retention period is
          required by law.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct,
          delete, or export your personal information, or to object to or restrict
          certain processing. To exercise any of these rights, contact us at{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>

      <section>
        <h2>7. Children&apos;s Privacy</h2>
        <p>
          The Service is not directed to children under 16, and we do not knowingly
          collect personal information from them. If you believe a child has provided us
          with personal information, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to
          protect the information we hold. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>9. International Users</h2>
        <p>
          We are based in the United States. If you access the Service from outside the
          United States, your information may be transferred to, stored, and processed
          in the United States or other countries.
        </p>
      </section>

      <section>
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make material
          changes, we will update the effective date above and, where appropriate,
          notify you.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>
          Questions about this Privacy Policy can be sent to{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
