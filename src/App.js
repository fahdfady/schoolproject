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

                <Route path="/register" element={ <Register /> } />
  
              </Routes>
            </main>
          </div>

          <footer className="page-footer"></footer>
        </div>
      </div >
    </BrowserRouter>
  )

}

export default App;