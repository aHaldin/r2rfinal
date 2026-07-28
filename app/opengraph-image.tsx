import { ImageResponse } from "next/og";

export const alt = "Road2Resolve — AI & Business Automation Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(160deg, #1f2126 0%, #25272C 55%, #2c2f36 100%)",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#B8F7E4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#25272C",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            R²
          </div>
          <div style={{ color: "#B8F7E4", fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>
            ROAD2RESOLVE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
            Automate your business.
          </div>
          <div style={{ color: "#B8F7E4", fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
            Save time. Grow faster.
          </div>
          <div style={{ color: "#9CA3AF", fontSize: 28, marginTop: 28, maxWidth: 860 }}>
            AI &amp; Business Automation Consultancy · United Kingdom
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
