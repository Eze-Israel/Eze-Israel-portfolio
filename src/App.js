
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="outlet">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
