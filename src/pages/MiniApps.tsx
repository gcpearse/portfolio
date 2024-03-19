import { useNavigate } from "react-router-dom"
import { miniApps } from "../db/projects"
import SingleProject from "../features/projects/SingleProject"
import { useEffect } from "react"


const MiniApps: React.FC = () => {


  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <section className="projects-section">

      <h1>Mini Apps</h1>

      <div>

        <ul>
          {miniApps.map((project) => {
            return (
              <li key={project.projectId}>
                <SingleProject project={project} />
              </li>
            )
          })}
        </ul>

      </div>

      <div className="btn-wrapper">

        <button
          className="page-nav-btn"
          onClick={() => navigate("/")}>
          Home
        </button>

      </div>

    </section>
  )
}


export default MiniApps
