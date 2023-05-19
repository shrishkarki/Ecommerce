import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='h-24 bg-[#f9f9ff] flex items-center pl-10 text-xl font-semibold'>
        <NavLink to="/"  className="text-slate-500">Home / </NavLink> &nbsp; {title}
    </div>
  )
}

export default PageNavigation