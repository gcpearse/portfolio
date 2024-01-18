import { Link } from "react-router-dom"
import { projects } from "../../../db/projects"
import SingleProject from "./SingleProject"
import { useEffect } from "react"

const Projects: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="projects-section">
      <h1>Featured Projects</h1>
      <div>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.projectId}>
                <SingleProject project={project} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="btn-wrapper">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </section>
  )
}

export default Projects
