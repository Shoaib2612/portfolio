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
          background: "#0f0f10",
          color: "#f3f0e8",
          fontSize: 120,
          fontWeight: 700,
          letterSpacing: -6,
        }}
      >
        S
        <div style={{ width: 22, height: 22, background: "#4ade9e", marginLeft: 4, marginTop: 70 }} />
      </div>
    ),
    size,
  );
}
