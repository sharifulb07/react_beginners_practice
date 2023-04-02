import React from 'react';

import { people } from './Data';
import { getImageUrl } from './Utils';



function RenderList() {

    const itemList=people.map((person)=>
    <li key={person.id}>
        <img
        src={getImageUrl(person)}
        alt={person.name}
        />

        <p>
            <b>{person.name}</b>
            {' '+person.profession+' '}
            known for  {person.accomplishment}
        </p>
    </li>
    )

  return (
    <div>
        <h2> Scientists </h2>
        {itemList}
    </div>
  )
}

export default RenderList
