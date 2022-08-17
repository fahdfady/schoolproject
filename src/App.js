import "./style/App.css"

import Navbar from "./components/Navbar";
import Home from "./home";
import Register from "./register";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FAQ from "./faq";

import ReactWOW from 'react-wow'
import Footer from "./components/footer";
import About from "./about";
import Presentation from "./presentation";


function App() {

  return (
    <BrowserRouter>
      <div className="App">


        <div className="page-container">
          <div className="not-footer">
            <Navbar />

            <main className="page-body">
              <Routes>

                <Route path="/" element={ <Home /> } />

                <Route path="/about" element={ <About /> } />

                <Route path="/presentation" element={ <Presentation /> } />

                <Route path="/faq" element={ <FAQ /> } />

                <Route path="/register" element={ <Register /> } />

              </Routes>
            </main>
          </div>

          <Footer />
        </div>
      </div >
    </BrowserRouter>
  )

}

export default App;