import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [50, 18.0, 0],
        center: [-8, -20],
        scale: 900
      }}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Geographies
        geography="/geojson-file.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-68.819464984635214, -35.36874002057325]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="white" fontSize={18}>
          {"I'm in Mendoza"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
