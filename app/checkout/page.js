
"use client";

import { useSearchParams } from "next/navigation";

export default function Checkout() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const price = searchParams.get("price");

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>
        Checkout
      </h1>

      {/* PRODUCT SUMMARY */}
      <section style={{
        marginBottom: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          Order Summary
        </h2>

        <p style={{ fontSize: "18px" }}>
          <strong>Product:</strong> {product || "Unknown Product"}
        </p>

        <p style={{ fontSize: "18px" }}>
          <strong>Price:</strong> ${price || "0.00"}
        </p>
      </section>

      {/* SHIPPING FORM */}
      <section style={{
        marginBottom: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Shipping Information
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            type="text"
            placeholder="Full Name"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <input 
            type="text"
            placeholder="Address"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <input 
            type="text"
            placeholder="City"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <input 
            type="text"
            placeholder="State"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <input 
            type="text"
            placeholder="ZIP Code"
            style={{ padding: "12px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </form>
      </section>

      {/* PAYMENT PLACEHOLDER */}
      <section style={{
        marginBottom: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Payment
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Payment processing will be added soon.
        </p>

        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Complete Order
        </button>
      </section>

    </main>
  );
}
