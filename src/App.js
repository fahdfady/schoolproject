import "./style/App.css"

import Navbar from "./components/Navbar";
import Home from "./home";
import anime from "animejs/lib/anime.es.js";

function App() {

  return (
    <div className="App">
      <div className="page-container">
        <div className="not-footer">
          <Navbar />


          <main className="page-body">

            <Home />
          </main>
        </div>

        <footer className="page-footer"></footer>
      </div>
    </div >
  )

}

export default App;