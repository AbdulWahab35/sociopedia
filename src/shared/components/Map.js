import React, { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Spin } from "antd";

const Map = ({ center, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDxrlb9Y-chdUAquDrumsNCjbJiPoW12B8",
  });

  if (!isLoaded)
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    );
  return (
    <>
      <GoogleMap zoom={zoom} center={center} mapContainerClassName="container">
        <Marker position={center} />
      </GoogleMap>
    </>
  );
};

export default Map;
