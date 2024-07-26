import React from 'react'

export default function Histery({histery}) {
  return (
    <div>
      {
        histery.join(', ')
      }
    </div>
  )
}
