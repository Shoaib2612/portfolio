import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = `${site.name}, ${site.role} in Dubai, UAE`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f3f0e8";
const INK = "#0f0f10";
const MUTED = "#6b6a66";
const ACCENT = "#0b6b4f";

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
          padding: "64px 72px",
          background: PAPER,
          color: INK,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: MUTED,
            borderBottom: `1px solid rgba(15,15,16,0.15)`,
            paddingBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 12, height: 12, borderRadius: 6, background: ACCENT }} />
            DUBAI, UAE
          </div>
          <div>{site.url.replace("https://", "").toUpperCase()}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {site.nameLines.map((line, i) => (
            <div
              key={line}
              style={{ display: "flex", alignItems: "flex-end", fontSize: 128, fontWeight: 700, letterSpacing: -6, lineHeight: 0.92 }}
            >
              {line}
              {i === site.nameLines.length - 1 && (
                <div style={{ width: 20, height: 20, background: ACCENT, marginLeft: 8, marginBottom: 18 }} />
              )}
            </div>
          ))}
          <div style={{ marginTop: 36, fontSize: 32, display: "flex" }}>
            <span style={{ fontWeight: 700 }}>{site.role}.</span>
            <span style={{ color: MUTED, marginLeft: 12 }}>Nest.js · React · SAP · AI integrations</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
