import { useAppDispatch, useAppSelector } from "../app/hooks"
import { IoClose, IoMenu } from "react-icons/io5"
import { toggle } from "../features/nav/navSlice"
import { FaCode, FaGithub, FaHome, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Nav: React.FC = () => {

  const isToggled = useAppSelector((state) => state.nav.isToggled)
  const dispatch = useAppDispatch()

  return (
    <nav className={!isToggled ? (
      "sidebar"
    ) : (
      "sidebar open-nav"
    )}>
      {!isToggled ? (
        <IoMenu
          className="menu-icon"
          onClick={() => dispatch(toggle())} />
      ) : (
        <IoClose
          className="menu-icon"
          onClick={() => dispatch(toggle())} />
      )}
      <ul>
        <li>
          <Link to="/">
            Home <FaHome className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects <FaCode className="nav-icon" />
          </Link>
        </li>
        <li>
          <a href="https://github.com/gcpearse" target="_blank">
            GitHub <FaGithub className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/glen-pearse-0b5826112/" target="_blank">
            LinkedIn <FaLinkedin className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
