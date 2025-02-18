import React from 'react';

const Card = ({name, email, id}) => { 
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='images' src={`https://robohash.org/${id}?set=set4`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ) 
}

export default Card