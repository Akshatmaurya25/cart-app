import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Signup from "./components/Signup";
import  Login  from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
  

      <BrowserRouter>
      <div className="flex flex-col">

        <Navbar />
        <div className="h-fit p-8 min-h-screen dark:bg-gray-800 text-white flex justify-center items-center ">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    
    </>
  );
}

export default App;
