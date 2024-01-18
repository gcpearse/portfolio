import { FaGithub, FaLink } from "react-icons/fa"
import { Project } from "../../../models"

type Props = {
  project: Project
}

const SingleProject: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-wrapper">
      <img src={`./src/assets/${project.imgLink}`} alt="A screenshot of the project on a mobile display" />
      <div className="project-info">
        <h2>{project.title}</h2>
        <h3>{project.tagline}</h3>
        <ul>
          {project.techStack.map((tech) => {
            return (
              <li key={tech}>
                {tech}
              </li>
            )
          })}
        </ul>
        <div className="img-desc">
          <img src={`./src/assets/${project.imgLink}`} alt="A screenshot of the project on a mobile display" />
          <p>{project.description}</p>
        </div>
        <div className="link-container">
          {project.isHosted ? (
            <div className="link-wrapper">
              <a href={project.siteLink} target="_blank">
              <p className="icon-desc">Live Application&nbsp;</p><FaLink />
              </a>
            </div>
          ) : (
            null
          )}
          <div className="link-wrapper">
            <a href={project.repository} target="_blank">
              <p className="icon-desc">GitHub Repository&nbsp;</p><FaGithub />
            </a>
          </div>
        </div></div>
    </div>
  )
}

export default SingleProject
