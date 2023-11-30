import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Technology from "./Pages/Technology";
import Mensaje from "./Components/Mensaje";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>

      <div>
        <Mensaje />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<Technology />} path="/technology"></Route>
        </Routes>

        <Footer />

      </div>




    </>
  )
}
export default App;