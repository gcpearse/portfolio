import { Link } from "react-router-dom"
import { projects } from "../../../db/projects"
import SingleProject from "./SingleProject"

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
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
