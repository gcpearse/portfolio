import { useAppDispatch, useAppSelector } from '../app/hooks'
import { IoClose, IoMenu } from "react-icons/io5"
import { toggle } from '../features/nav/navSlice'

const Nav: React.FC = () => {

  const isToggled = useAppSelector((state) => state.nav.isToggled)
  const dispatch = useAppDispatch()

  return (
    <nav className={!isToggled ? (
      'sidebar'
    ) : (
      'sidebar open-nav'
    )}>
      {!isToggled ? (
        <IoMenu
          className='menu-icon'
          onClick={() => dispatch(toggle())} />
      ) : (
        <IoClose
        className='menu-icon'
        onClick={() => dispatch(toggle())} />
      )}
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>GitHub</li>
      </ul>
    </nav>
  )
}

export default Nav
