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
    <LegalPage title="Privacy Policy" effectiveDate="July 28, 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Hireveal (&quot;Hireveal,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) handles information when you use the
          Hireveal website (the &quot;Site&quot;) and the Hireveal Chrome extension (the
          &quot;Extension,&quot; and together with the Site, the &quot;Service&quot;).
          Hireveal is built to run almost entirely on your own device: your account,
          your resume, and your saved preferences stay in your browser, and only a
          small, specific set of lookups ever leaves it. This policy describes exactly
          what those are.
        </p>
      </section>

      <section>
        <h2>2. Information Stored on Your Device</h2>
        <p>
          The Extension stores the following directly in your browser, using Chrome&apos;s
          local storage (<code>chrome.storage.local</code>). None of it is transmitted to
          a Hireveal server, because Hireveal does not currently operate one.
        </p>
        <ul>
          <li>
            <strong>Account and session.</strong> If you create a local account or log
            in, your email and a session record are stored on your device. This is not
            server-backed authentication — it does not sync across browsers or devices,
            and we do not have server-side access to it.
          </li>
          <li>
            <strong>Your confirmed profile.</strong> Work authorization status, years of
            professional experience, minimum salary, current or recent title, skills,
            preferred location, and preferred work mode (any, remote, hybrid, or
            on-site) — but only after you review and confirm these fields. Nothing is
            saved automatically.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How Your Resume Is Processed</h2>
        <p>
          You can upload a resume as a PDF, DOCX, or TXT file (up to 8 MB) so Hireveal
          can suggest profile fields for you. This parsing happens locally in your
          browser — PDF parsing uses a bundled copy of PDF.js and its worker, so your
          file is never uploaded anywhere to be read.
        </p>
        <p>
          <strong>The original file and the raw text extracted from it are not saved.</strong>{" "}
          Once Hireveal proposes structured fields (experience, title, skills, and so
          on) and you&apos;ve reviewed and confirmed them, only that confirmed,
          structured profile is kept. You can edit it, replace it by uploading a new
          resume, or delete it at any time.
        </p>
      </section>

      <section>
        <h2>4. Job Listing Data</h2>
        <p>
          When the Extension is active on a job listing page, it reads the content of
          the active job detail pane you have open — title, company, location, posting
          age, salary, experience requirements, applicant activity, and sponsorship
          language — to compute your personalized opportunity score. This happens live,
          on the page you are viewing, and is not sent to or stored by Hireveal.
        </p>
      </section>

      <section>
        <h2>5. External Lookups the Extension Makes</h2>
        <p>
          To supplement what a listing itself says, the Extension makes a small number
          of outbound requests to independent, publicly available sources. These
          requests contain only the minimum information needed for the specific
          lookup — never your profile, resume, or account information.
        </p>
        <ul>
          <li>
            <strong>Greenhouse and Lever.</strong> If a listing links to a Greenhouse or
            Lever application page, we query that board&apos;s public API for the
            listing&apos;s official publish date, to check it against what the job
            board displays.
          </li>
          <li>
            <strong>Internet Archive (Wayback Machine).</strong> When no ATS date is
            available, we query the Wayback Machine&apos;s public CDX API for the
            earliest archived snapshot of the listing URL. Results are cached in the
            Extension&apos;s background service worker for your browsing session. This
            is labeled as an earliest archived snapshot — never as an original posting
            date, since an archive can only prove a page existed by a given date, not
            when it was first created.
          </li>
          <li>
            <strong>MyVisaJobs.</strong> Only when a listing says nothing at all about
            sponsorship, citizenship, or work authorization, we look up the hiring
            company&apos;s name against MyVisaJobs&apos; public H-1B filing records.
            This is shown as background context about the company only — it is never
            presented as proof that the specific role you&apos;re viewing sponsors visas.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Site Usage Information</h2>
        <p>
          Separately from the Extension, when you visit the Site we collect limited
          technical information — such as pages viewed and general device or browser
          information — to keep the Site working correctly and securely.
        </p>
      </section>

      <section>
        <h2>7. Communications</h2>
        <p>
          If you contact us through the Site&apos;s contact form or by email, we retain
          the content of your message and our correspondence with you so we can
          respond and keep a record of the conversation.
        </p>
      </section>

      <section>
        <h2>8. Why the Extension Requests the Permissions It Does</h2>
        <p>
          The Extension requests the <code>storage</code> permission to save your local
          account, session, and profile as described above. It requests host
          permissions for the Greenhouse boards API, the Lever API, the Internet
          Archive, and MyVisaJobs, solely to make the specific lookups described in
          Section 5. Its content script runs broadly across sites so it can detect a
          job listing page wherever you encounter one; in practice, testing and support
          today center on LinkedIn.
        </p>
      </section>

      <section>
        <h2>9. How We Share Information</h2>
        <p>We do not sell your personal information. We share information only:</p>
        <ul>
          <li>
            With the external sources described in Section 5, limited to the specific
            listing URL, ATS URL, or company name each lookup requires.
          </li>
          <li>
            With service providers who help us operate the Site (for example, hosting
            and email delivery), under obligations to protect your information.
          </li>
          <li>
            With authorities, when required by law, legal process, or to protect the
            rights, safety, or property of Hireveal, our users, or the public.
          </li>
          <li>With a successor entity, in the event of a merger, acquisition, or asset sale.</li>
        </ul>
      </section>

      <section>
        <h2>10. Data Retention and Your Controls</h2>
        <p>
          Your account, profile, and any local session data remain on your device until
          you delete them, clear your browser&apos;s extension storage, or uninstall the
          Extension — any of which removes them completely, since we do not hold a
          separate copy. Site communications are retained as long as needed to handle
          your request, unless a longer period is required by law.
        </p>
      </section>

      <section>
        <h2>11. Children&apos;s Privacy</h2>
        <p>
          The Service is not directed to children under 16, and we do not knowingly
          collect personal information from them. If you believe a child has provided us
          with personal information, contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>12. Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to
          protect the information described in this policy. No method of transmission
          or storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>13. International Users</h2>
        <p>
          If you access the Service from outside the United States, be aware that any
          information you provide to us directly (for example, through the contact
          form) may be transferred to, stored, and processed in the United States or
          other countries.
        </p>
      </section>

      <section>
        <h2>14. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make material
          changes, we will update the effective date above and, where appropriate,
          notify you.
        </p>
      </section>

      <section>
        <h2>15. Contact Us</h2>
        <p>
          Questions about this Privacy Policy can be sent to{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
