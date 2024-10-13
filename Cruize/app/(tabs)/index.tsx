import React 
from 'react';

import { GoogleMap, LoadScript }
from 
'@react-google-maps/api';

import MapComponent 
from './MapComponent';



const 
App = () 
=> {

return (

<div>

<h1>Road Trip Planner</h1>

<MapComponent />

</div>

);

};



const 
mapContainerStyle = {

width: '100%',

height: '400px',

};



const 
center = {

lat: 37.7749, 
// Your default latitude

lng: -122.4194,
// Your default longitude

};



const 
MapComponent = () 
=> {

return (

<LoadScript 
googleMapsApiKey="YOUR_API_KEY">

<GoogleMap

mapContainerStyle={mapContainerStyle}

center={center}

zoom={10}

>

/* please work */

{ 
/* You can add markers or other components here */ 
}

</GoogleMap>

</LoadScript>

);

};



export
default
MapComponent;