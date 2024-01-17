import { useAppDispatch, useAppSelector } from '../app/hooks'
import { IoClose, IoMenu } from 'react-icons/io5'
import { toggle } from '../features/nav/navSlice'
import { FaCode, FaGithub, FaHome, FaLinkedin } from 'react-icons/fa'

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
        <li>Home <FaHome className='nav-icon' /></li>
        <li>Projects <FaCode className='nav-icon' /></li>
        <li>GitHub <FaGithub className='nav-icon' /></li>
        <li>LinkedIn <FaLinkedin className='nav-icon' /></li>
      </ul>
    </nav>
  )
}

export default Nav
