import {navLinks} from '../constants/index';

const Navbar = () => {


  return (
   <nav className='z-999'>
        <a href='#home' className='flex items-center gap-1' onClick={() => window.location.reload()}>
            <img src='https://ik.imagekit.io/greenraven/MGC/logo.png?updatedAt=1752482482251' className='w-15 md:w-18 lg:w-15'/>
            <p className='title-logo'>M.G.C</p>
        </a>

        <ul>
            {navLinks.map(({id, title}) => (
                <li key={id}>
                   <a href={`#${id}`}>{title}</a>
                </li>
            ))}
        </ul>
   </nav>
  )
}

export default Navbar
