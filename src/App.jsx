import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Home />
    </div>
  );
}

export default App;
