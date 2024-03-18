import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./common/Footer"
import Home from "./pages/Home"
import Nav from "./features/nav/Nav"
import Header from "./common/Header"
import Projects from "./pages/Projects"
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
