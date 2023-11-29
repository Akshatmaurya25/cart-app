import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
      <div className="flex flex-col">

        <Navbar />
        <div className="h-screen dark:bg-gray-800 text-white flex justify-center items-center ">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
