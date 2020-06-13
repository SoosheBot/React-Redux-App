import React from 'react';

const IndianCityInfo = ({info}) => {
    const {
        City,
        State,
        District 
    } = info;

    // console.log('props', info)
    
    return (
        <div className='city-info'>
            <h3>City: {City}</h3>
            <h4>State: {State}</h4>
            <p>District: {District}</p>
        </div>
    );
}

export default IndianCityInfo;