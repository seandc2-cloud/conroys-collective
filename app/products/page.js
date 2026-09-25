export default function Products() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>
        Our Products
      </h1>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>

        {/* PRODUCT 1 */}
        <div style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px"
        }}>
          <img 
  src="/posture-trainer-hero.png" 
  alt="Smart Posture Trainer" 
  style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
/>

          <h2 style={{ marginBottom: "10px" }}>Smart Posture Trainer</h2>
          <p style={{ marginBottom: "10px" }}>
            A wearable posture device that gently vibrates when you slouch,
            helping you build better posture habits throughout the day.
          </p>
          <p style={{ fontWeight: "bold" }}>$49.99</p>
              <button style={{
  marginTop: "15px",
  padding: "12px 20px",
  fontSize: "16px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
}}>
  Buy Now
</button>

        </div>
{/* PRODUCT 2 */}
<div style={{
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px"
}}>
  <img 
  src="/posture-trainer-hero.png" 
  alt="Smart Neck Relaxer" 
  style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
/>

  <h2 style={{ marginBottom: "10px" }}>Smart Neck Relaxer</h2>
  <p style={{ marginBottom: "10px" }}>
    A heated neck therapy device that relieves tension, improves circulation,
    and reduces daily stress from phone posture and long work hours.
  </p>
  <p style={{ fontWeight: "bold" }}>$59.99</p>
</div>
{/* PRODUCT 3 */}
<div style={{
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px"
}}>
  <img 
  src="/posture-trainer-hero.png" 
  alt="Smart Back Support Belt" 
  style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
/>

  <h2 style={{ marginBottom: "10px" }}>Smart Back Support Belt</h2>
  <p style={{ marginBottom: "10px" }}>
    A lightweight lumbar support belt designed to reduce lower‑back strain,
    improve posture alignment, and provide comfort during long work sessions.
  </p>
  <p style={{ fontWeight: "bold" }}>$69.99</p>
</div>
{/* PRODUCT 4 */}
<div style={{
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px"
}}>
  <img 
  src="/posture-trainer-hero.png" 
  alt="Smart Shoulder Massager" 
  style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
/>

  <h2 style={{ marginBottom: "10px" }}>Smart Shoulder Massager</h2>
  <p style={{ marginBottom: "10px" }}>
    A portable shoulder massage device that targets tension, improves mobility,
    and helps relieve stress from long workdays and poor posture habits.
  </p>
  <p style={{ fontWeight: "bold" }}>$79.99</p>
</div>

      </div>
    </main>
  );
}
