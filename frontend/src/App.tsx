import "./App.css";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Outlet />;
}

export default App;
