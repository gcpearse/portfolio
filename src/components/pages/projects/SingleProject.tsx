import { Project } from "../../../models"

type Props = {
  project: Project
}

const SingleProject: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
    </div>
  )
}

export default SingleProject
