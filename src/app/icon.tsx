import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 8,
          background: "#0f0f10",
          color: "#f3f0e8",
          fontSize: 50,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        S
        <div style={{ width: 9, height: 9, background: "#4ade9e", marginLeft: 2, marginBottom: 8 }} />
      </div>
    ),
    size,
  );
}
