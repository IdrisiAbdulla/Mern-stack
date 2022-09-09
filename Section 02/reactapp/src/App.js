import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventHandling from "./components/EventHandling";
import Todo from "./components/Todo";
import Register from "./components/Register";
import Product from "./components/Product";
import UserManager from "./components/UserManager";
import {Toaster}from "react-hot-toast";


function App() {
  return (
    <div>
      <Toaster position ="bottom-right"/>
      <BrowserRouter>
        <Header />

        {/* /* <Link to="/Home">Home</Link> */}
            {/* <Link to="/Login">Login</Link> */ }

        <Routes>
          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login />} path="Login" />
          <Route element={<EventHandling />} path="/EventHandling" />
          <Route element={<Todo />} path="/Todo" />
          <Route element={<Register />} path="/Register" />
          <Route element={<Product />} path="/Product" />
          <Route element={<UserManager />} path="/UserManager" />

          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
