import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({currentPageTitle}) => {
  return (
    <div className='w-full flex gap-3 m-3'>
        <Link to={'/'}>Home</Link>
        <span>/</span>
        <p>{currentPageTitle}</p>
    </div>
  )
}

export default BreadCrumb;