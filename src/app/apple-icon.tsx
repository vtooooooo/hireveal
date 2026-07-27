import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101828",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l7 3.11v5.66C19 16.24 16.06 20.5 12 22c-4.06-1.5-7-5.76-7-11.23V5.11L12 2z"
            fill="none"
            stroke="#12B76A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.5l2 2 4-4.5"
            fill="none"
            stroke="#12B76A"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
