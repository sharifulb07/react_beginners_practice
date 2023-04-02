import React from 'react';

function Item({name, isPacked}){
    return(
        <>
        <li>{name} {"  "}{isPacked && '✔'} </li>
        </>
    )
}

function PackagingList() {
  return (
    <>

    <section className='container'>
        <h2>Different Fishes of Southern Part of Bangladesh </h2>
        <Item
        name='Hilsha Fish'
        isPacked={true}
        />
        <Item
        name='Magur Fish'
        isPacked={true}
        />
        <Item
        name='Sting Ray Fish'
        isPacked={false}
        />

    </section>
      
    </>
  )
}

export default PackagingList
