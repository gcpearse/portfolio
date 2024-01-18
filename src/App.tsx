import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Home from "./components/pages/home/Home"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Projects from "./components/pages/projects/Projects"
import { useAppDispatch } from "./app/hooks"
import { close } from "./features/nav/navSlice"

const App: React.FC = () => {

  const dispatch = useAppDispatch()

  return (
    <>
      <Nav />
      <Header />
      <main onClick={() => dispatch(close())}>
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
