import "./App.css";
import Navigation from "./Navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import image from "./assets/images/svg.png";

function App() {
  return (
    <div
      style={{
        background: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        objectFit: "cover",
        width: "100%",
        height: "100%",
        Position: "absolute",
      }}
    >
      <div>
        <NavBar />
        <Navigation />
        <Footer />
      </div>
    </div>
  );
}

export default App;
