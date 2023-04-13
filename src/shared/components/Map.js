import React, { useRef, useEffect } from "react";

const Maping = async ({ center, zoom }) => {
  const mapRef = useRef();

  const { Map } = await window.google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await window.google.maps.importLibrary("marker");

  useEffect(() => {
    const map = new Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new AdvancedMarkerView({ position: center, map: map });
  }, [center, zoom]);

  return <div style={{ width: "100%", height: "100%" }} ref={mapRef}></div>;
};

export default Maping;
