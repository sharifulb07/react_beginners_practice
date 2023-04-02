import React from 'react';


const Profile=()=>{
    return(
        <>
        <img 
        src='https://i.imgur.com/MK3eW3As.jpg'
        alt='greate scientist here '
        />
        
        </>
    )
}

function Gallery() {
  return (
    <section style={{display:'flex', justifyContent:"space-around", margin:'50px'}}>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      
    </section>
  )
}

export default Gallery
