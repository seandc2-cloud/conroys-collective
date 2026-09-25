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
          <h2 style={{ marginBottom: "10px" }}>Smart Posture Trainer</h2>
          <p style={{ marginBottom: "10px" }}>
            A wearable posture device that gently vibrates when you slouch,
            helping you build better posture habits throughout the day.
          </p>
          <p style={{ fontWeight: "bold" }}>$49.99</p>
        </div>
{/* PRODUCT 2 */}
<div style={{
  border: "1px solid #ccc",
  padding: "20px",
  borderRadius: "8px"
}}>
  <h2 style={{ marginBottom: "10px" }}>Smart Neck Relaxer</h2>
  <p style={{ marginBottom: "10px" }}>
    A heated neck therapy device that relieves tension, improves circulation,
    and reduces daily stress from phone posture and long work hours.
  </p>
  <p style={{ fontWeight: "bold" }}>$59.99</p>
</div>

      </div>
    </main>
  );
}
