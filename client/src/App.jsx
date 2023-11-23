import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Header from "./component/header";

export default function App() {
  return(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/"  element={<Home />}  />
        <Route path="/sign-in"  element={<SignIn />}  />
        <Route path="/sign-up"  element={<SignUp />}  />
        <Route path="/about"  element={<About />}  />
        <Route path="/profile"  element={<Profile />}  />
    </Routes>
   </BrowserRouter>
   );
}