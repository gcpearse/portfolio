import "./App.css"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
