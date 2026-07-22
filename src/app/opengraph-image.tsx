import { ImageResponse } from "next/og";

export const alt = "NeatCV, ATS-friendly CVs and LinkedIn profiles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7faff",
        color: "#102a72",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "34px",
          fontWeight: 800,
          letterSpacing: "-1px",
        }}
      >
        <span>Neat</span>
        <span style={{ color: "#1499f2" }}>CV</span>
      </div>
      <div
        style={{
          display: "flex",
          maxWidth: "920px",
          fontSize: "74px",
          lineHeight: 1,
          letterSpacing: "-4px",
          fontWeight: 780,
        }}
      >
        Make your experience impossible to overlook.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "25px",
          color: "#53658d",
        }}
      >
        <span>ATS-friendly CVs and LinkedIn profile optimization.</span>
        <span
          style={{
            width: "112px",
            height: "10px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #102a72, #1246d8, #1499f2)",
          }}
        />
      </div>
    </div>,
    size,
  );
}
