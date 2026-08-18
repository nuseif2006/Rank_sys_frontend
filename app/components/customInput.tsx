import React from 'react'

const customInput = ({pholder, type, value, onChange}: any) => {
  return (
    <input className="input w-full" placeholder={pholder} type={type || "text"} value={value} onChange={onChange} />
  )
}

export default customInput