export default function Home() {
  return (
    <main>

      {/* HERO BANNER */}
      <section style={{
        width: "100%",
        padding: "60px 20px",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        borderRadius: "8px",
        marginBottom: "40px"
      }}>
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Conroy’s Collective
        </h1>

        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Smart Wearables for Better Posture, Comfort & Daily Wellness
        </p>

        <button 
          onClick={() => window.location.href = "/products"}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Shop Now
        </button>
      </section>

      <header style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ddd",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold"
      }}>
        Conroy’s Collective
      </header>

      <img 
        src="/posture-trainer-hero.png" 
        alt="Conroy’s Collective Clover Logo and Posture Trainer"
        style={{ width: "100%", height: "auto" }}
      />

      {/* Product Section */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Smart Posture Trainer
        </h2>

        <img 
          src="/posture-trainer-hero.png"
          alt="Posture Trainer Product"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <strong>$49.99</strong>
        </p>

        <button style={{
          marginTop: "20px",
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Buy Now
        </button>
      </section>

    </main>
  );
}
