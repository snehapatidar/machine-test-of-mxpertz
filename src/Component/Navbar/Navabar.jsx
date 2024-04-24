import './Navabar.css'
import Section from '../Section/Section'
import { NavLink, Link } from "react-router-dom"


function Navabar() {
  
  return (
    <>
      <div className='container_main'>
        <div className='logo_contanier'>
          <Link to={'/'} className='logo_name'>BrainyLingo</Link>
        </div>
        <div className='nav_links'>
          <div className='links'>
            <Link to={'/'} className='links'>Home</Link>
            <Link className='links'>Leaderboard</Link>
            <Link className='links'>Daily Quit</Link>
            <Link className='links'>Genre</Link>
          </div>
        </div>
        <div className='sign_out_container'>
          <div className='sign_out_button'>
            <a>Sign Out</a>
          </div>
        </div>
      </div>
      <Section />
      <NavLink to={"/carddescription"}>
      </NavLink>
    </>
  )
}

export default Navabar