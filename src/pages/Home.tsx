import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Home: React.FC = () => {


  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <section>

      <article className="contents-wrapper">

        <div className="profile-wrapper">

          <div className="text-wrapper">

            <span>Hello</span>

            <h1>I'm Glen</h1>

            <h2>Junior Software Engineer</h2>

            <p>Software engineering allows me to channel my creativity and express my imagination in a precise way. There is something immensely satisfying about seeing an application take shape before your eyes, and knowing that you built it from the ground up.</p>

            <p>Above all, what I love about development is that each day is an opportunity to learn something new in a complex, fast-paced, and relentlessly innovative field.</p>

            <p>For each project on this site, my goal has been to create elegant, user-friendly designs supported by clean, readable code.</p>

          </div>

        </div>

        <div className="img-wrapper">

          <img
            className="profile-img"
            src="/gp.jpeg"
            alt="A photograph of Glen smiling at the camera." />

        </div>

      </article>

      <div className="btn-wrapper">

        <button
          className="page-nav-btn"
          onClick={() => navigate("/projects")}>
          View my projects
        </button>

      </div>

    </section>
  )
}

export default Home
