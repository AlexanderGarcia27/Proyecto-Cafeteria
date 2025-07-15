import { InlineWidget } from "react-calendly";

const Reservacion = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
        <h2 style={{fontSize: "2.5rem", color: "#fff"}}>Realiza tu reservación</h2>
      </div>
      <InlineWidget
        url="https://calendly.com/2022259-utsh/30min"
        styles={{ minWidth: "320px", height: "700px", margin: 0, marginTop: -50}}
        pageSettings={{
          backgroundColor: "c97a2b",
          primaryColor: "1a1a1a",
          textColor: "ffffff",
        }}
        prefill={{ name: "", email: "" }}
      />
    </div>
  );
};

export default Reservacion;
