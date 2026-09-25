import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Conroy’s Collective",
  description: "Wearable tech for posture and wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        <nav style={{
          background: "#000",
          padding: "15px 20px",
          display: "flex",
          gap: "20px"
        }}>
          <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
          <Link href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
          <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
        </nav>

        {children}

        <footer style={{
          width: "100%",
          padding: "20px",
          marginTop: "40px",
          backgroundColor: "#f5f5f5",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: "16px",
          color: "#555"
        }}>
          © {new Date().getFullYear()} Conroy’s Collective — All Rights Reserved
        </footer>

      </body>
    </html>
  );
}
