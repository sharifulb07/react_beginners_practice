import React from 'react'

function Cup({guest}){
    return(
        <h2>Tea cup for the guest #{guest} </h2>
    )
}

function TeaCup() {
  return (
    <div>
      <Cup guest={2} />
      <Cup guest={4} />
      <Cup guest={6} />
    </div>
  )
}

export default TeaCup
