export default function Home() {
  return (
    <main style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Smart Posture Trainer
      </h1>

      <img 
        src="/Copilot_20260923_155136.png" 
        alt="Posture Trainer" 
        style={{ 
          width: "300px", 
          height: "auto", 
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      />

      <p style={{ 
        fontSize: "18px", 
        maxWidth: "600px", 
        textAlign: "center",
        lineHeight: "1.5"
      }}>
        Improve your posture with gentle vibration reminders that help you sit and stand straighter throughout the day.
      </p>

      <button 
        style={{
          marginTop: "30px",
          padding: "14px 28px",
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
    </main>
  );
}
