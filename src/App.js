import "./App.css";
import Navigation from "./Navigation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <NavBar />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        pauseOnHover
      /> */}
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
