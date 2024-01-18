import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Home from "./components/pages/home/Home"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Projects from "./components/pages/projects/Projects"

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
