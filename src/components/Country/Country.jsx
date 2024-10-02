import PropTypes from 'prop-types';
import './Country.css';
import { useState } from 'react';

const Country = ({countryInfo,handleVisitedCountry}) => {

    const{name,flags,population,area,cca3}=countryInfo;

    const [visit,setVisit]=useState(false);
   
    return (
        <div className={`country ${visit && 'visited'}`}>
        <img src={flags?.png} alt="" />
            <h3>{name?.common}</h3>
            <h4>{population}</h4>
            <h4>{area}</h4>
            <h4><small>Code: {cca3}</small></h4>
            <button onClick={()=>{setVisit(!visit);handleVisitedCountry(countryInfo)}}>{visit?'Visited':'Going'}</button>
        </div>
    );
};

Country.propTypes={
 countryInfo:PropTypes.object,
 handleVisitedCountry:PropTypes.func
}

export default Country;