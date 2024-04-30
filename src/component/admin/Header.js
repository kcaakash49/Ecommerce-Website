import React from 'react'

const Header = (props) => {
  return (
    <div className='text-2xl font-bold text-center mb-5'>
        {props.name}
    </div>
  )
}

export default Header
