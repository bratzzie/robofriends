import React from 'react';

const Card = ({name, email, id} ) => {
    return(
    <div style={{padding: "10px"}} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
        <div 
        >
        <h1>{name}</h1>
        <p>{email}</p>
        </div>
    </div>
        
    );
}

export default Card