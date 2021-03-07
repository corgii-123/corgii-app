import React from 'react'

export default function MessageBox({message, children}) {
  return (
    <>
      <div className="alert alert-info">
        {message}
      </div>
      <div className="row center">
        {children}
      </div>
    </>
  )
}