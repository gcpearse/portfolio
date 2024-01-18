import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Header from "./components/Header"

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
