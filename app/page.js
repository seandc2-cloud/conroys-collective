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

      {/* HEADER */}
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

      {/* MAIN IMAGE */}
      <img 
        src="/posture-trainer-hero.png" 
        alt="Conroy’s Collective Clover Logo and Posture Trainer"
        style={{ width: "100%", height: "auto" }}
      />

      {/* PRODUCT 1 */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Smart Posture Trainer
        </h2>

        <img 
          src="/posture-trainer-hero.png"
          alt="Smart Posture Trainer Product"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <strong>$49.99</strong>
        </p>

        <button
          onClick={() => window.location.href = "/checkout?product=Smart%20Posture%20Trainer&price=49.99"}
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Buy Now
        </button>
      </section>

      {/* PRODUCT 2 */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Smart Neck Relaxer
        </h2>

        <img 
          src="/neck-relaxer.png"
          alt="Smart Neck Relaxer Product"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <strong>$59.99</strong>
        </p>

        <button
          onClick={() => window.location.href = "/checkout?product=Smart%20Neck%20Relaxer&price=59.99"}
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Buy Now
        </button>
      </section>

      {/* PRODUCT 3 */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Smart Back Stretcher
        </h2>

        <img 
          src="/back-stretcher.png"
          alt="Smart Back Stretcher Product"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <strong>$39.99</strong>
        </p>

        <button
          onClick={() => window.location.href = "/checkout?product=Smart%20Back%20Stretcher&price=39.99"}
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Buy Now
        </button>
      </section>

      {/* PRODUCT 4 */}
      <section style={{
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Smart Shoulder Massager
        </h2>

        <img 
          src="/shoulder-massager.png"
          alt="Smart Shoulder Massager Product"
          style={{ width: "300px", height: "auto", borderRadius: "10px" }}
        />

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          <strong>$79.99</strong>
        </p>

        <button
          onClick={() => window.location.href = "/checkout?product=Smart%20Shoulder%20Massager&price=79.99"}
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Buy Now
        </button>
      </section>

    </main>
  );
}
