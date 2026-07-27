import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#101828",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(18,183,106,0.25), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l7 3.11v5.66C19 16.24 16.06 20.5 12 22c-4.06-1.5-7-5.76-7-11.23V5.11L12 2z"
                fill="none"
                stroke="#12B76A"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.5l2 2 4-4.5"
                fill="none"
                stroke="#12B76A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: 32, color: "#F9FAFB", fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 60,
              lineHeight: 1.1,
              color: "#F9FAFB",
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}.
          </span>
          <span style={{ fontSize: 26, color: "#98A2B3", maxWidth: 780 }}>
            A Chrome extension that checks whether a job listing, sponsorship
            claim, and recruiter are what they say they are.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
