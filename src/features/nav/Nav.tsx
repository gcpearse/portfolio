import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { IoClose, IoMenu } from "react-icons/io5"
import { toggleNav } from "./navSlice"
import NavMenu from "./NavMenu"


const Nav: React.FC = () => {


  const isToggled = useAppSelector(state => state.nav.isToggled)

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
          onClick={() => dispatch(toggleNav())} />
      ) : (
        <IoClose
          className="menu-icon"
          onClick={() => dispatch(toggleNav())} />
      )}

      <NavMenu />

    </nav>
  )
}


export default Nav
