
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";



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
