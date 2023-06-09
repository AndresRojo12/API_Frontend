import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  return (

    <header className="d-flex justify-content-center py-3" >
      <ul className="nav nav-pills">
       <NavLink 
       tabIndex={1}
       className='nav-item nav-link '
       to='/'
       >
        TipoEquipo
       </NavLink>

       <NavLink 
       tabIndex={2}
       className='nav-item nav-link '
       to='/estados'
       >
        Estados
       </NavLink>
       <NavLink 
       tabIndex={3}
       className='nav-item nav-link '
       to='/Usuarios'
       >
        Usuarios
       </NavLink>
       <NavLink 
       tabIndex={4}
       className='nav-item nav-link '
       to='/Marcas'
       >
       Marcas
       </NavLink>
       <NavLink 
       tabIndex={5}
       className='nav-item nav-link '
       to='/Inventarios'
       >
        Inventarios
       </NavLink>
      </ul>
    </header>

    
  )
}
