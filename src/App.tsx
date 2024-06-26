import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./common/Footer"
import Home from "./pages/Home"
import Nav from "./features/nav/Nav"
import Header from "./common/Header"
import Projects from "./pages/Projects"
import { useAppDispatch } from "./app/hooks"
import { closeNav } from "./features/nav/navSlice"
import MiniApps from "./pages/MiniApps"


const App: React.FC = () => {


  const dispatch = useAppDispatch()


  return (
    <>
      <Nav />

      <Header />

      <main onClick={() => dispatch(closeNav())}>

        <Routes>

          <Route
            path="/"
            element={<Home />} />

          <Route
            path="/projects"
            element={<Projects />} />

          <Route
            path="/mini-apps"
            element={<MiniApps />} />

        </Routes>

      </main>

      <Footer />
    </>
  )
}


export default App
