import React from 'react';

const GoogleMap = props => {
  const { ip, country_name, city, latitude, longitude } = props.data;

  return (
    <div>
      <h1>My Location on Google Map</h1>
      <p>My IP is: {ip}</p>
      <p>I am currently in {city}</p>
      <p>In the state of {country_name}</p>
      <p>My Latitude is {latitude}</p>
      <p>My Longitude is {longitude}</p>
      <iframe title="my-ip-location" 
        width={450}
        height={250}
        frameBorder={0}
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/search?key=${props.googleAPI}&q=${latitude},${longitude}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
