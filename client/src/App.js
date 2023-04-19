import React from "react";
import { Landingpage, SignIn, Register, AdminPanal, Cart} from "./pages";
import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Landingpage />} />
        {user.currentUser === null ? (
          <>
            <Route path="/login" exact element={<SignIn/>} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/cart" exact element={<Cart />} />
          </>
        ) : (
          <>
          {
            user.isAdmin && <Route path="/admin" exact element={<AdminPanal />} />
          }
          <Route path="/cart" exact element={<Cart />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


