import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchInfo } from '../actions';
import IndianCityInfo from './IndianCityInfo';

const IndianCities = props => {
    useEffect(() => {
        props.fetchInfo();
        // eslint-disable-next-line
    }, []);

    if (props.isFetching) {
        return <h3>Loading Indian Cities Data in Flag Colors...</h3>    
    }

    // console.log('cities', props.cities)

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.cities.map((info, index) => (
            <IndianCityInfo key={index} info={info}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.cities,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchInfo })(IndianCities);