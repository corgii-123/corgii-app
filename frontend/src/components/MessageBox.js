import React from 'react'

export default function MessageBox({message}) {
  return (
    <div className="alert alert-info">
      {message}
    </div>
  )
}