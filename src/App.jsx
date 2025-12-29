import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './app.css'
import About from "./components/About"
import Proyectos from "./components/Proyectos"

function App() {

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-yellow-400 via-yellow-600 to-black">
        <Navbar />
        <Home />
        <About/>
        <Proyectos/>
        <Footer />
      </div>
    </>
  )
}

export default App
