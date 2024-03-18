import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { IoClose, IoMenu } from "react-icons/io5"
import { close, toggle } from "./navSlice"
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
        <li onClick={() => dispatch(close())}>
          <Link to="/">
            Home&nbsp;<FaHome className="nav-icon" />
          </Link>
        </li>
        <li onClick={() => dispatch(close())}>
          <Link to="/projects">
            Projects&nbsp;<FaCode className="nav-icon" />
          </Link>
        </li>
        <li onClick={() => dispatch(close())}>
          <a href="https://github.com/gcpearse" target="_blank">
            GitHub&nbsp;<FaGithub className="nav-icon" />
          </a>
        </li>
        <li onClick={() => dispatch(close())}>
          <a href="https://www.linkedin.com/in/glen-pearse-0b5826112/" target="_blank">
            LinkedIn&nbsp;<FaLinkedin className="nav-icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
