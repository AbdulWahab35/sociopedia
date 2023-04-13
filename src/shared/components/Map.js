import React, { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({ center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDxrlb9Y-chdUAquDrumsNCjbJiPoW12B8",
  });

  if (!isLoaded) return <h3>Loading.... </h3>;
  return (
    <>
      <div className="container"></div>
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerClassName="container"
      ></GoogleMap>
    </>
  );
};

export default Map;
