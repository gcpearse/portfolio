import { FaCode, FaGithub, FaHome, FaLinkedin, FaReact } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { closeNav } from "./navSlice"


const NavMenu: React.FC = () => {


  const dispatch = useAppDispatch()
  

  return (
    <ul>

    <li onClick={() => dispatch(closeNav())}>
      <Link to="/">
        Home&nbsp;<FaHome className="nav-icon" />
      </Link>
    </li>

    <li onClick={() => dispatch(closeNav())}>
      <Link to="/projects">
        Projects&nbsp;<FaCode className="nav-icon" />
      </Link>
    </li>

    <li onClick={() => dispatch(closeNav())}>
      <Link to="/mini-apps">
        Mini Apps&nbsp;<FaReact className="nav-icon" />
      </Link>
    </li>

    <li onClick={() => dispatch(closeNav())}>
      <a
        href="https://github.com/gcpearse"
        target="_blank">
        GitHub&nbsp;<FaGithub className="nav-icon" />
      </a>
    </li>

    <li onClick={() => dispatch(closeNav())}>
      <a
        href="https://www.linkedin.com/in/glen-pearse-0b5826112/"
        target="_blank">
        LinkedIn&nbsp;<FaLinkedin className="nav-icon" />
      </a>
    </li>

  </ul>
  )
}


export default NavMenu
