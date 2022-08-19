import { useState } from 'react'
import mapboxgl from 'mapbox-gl';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapStyles from "./LocationMap.module.scss"
import LocationInfo from './component/LocationInfo';

function LocationMap({ location }) {
  const [isDisplay, setIsDisplay] = useState(true)
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY

  const handlePinClick = () => {
    setIsDisplay(!isDisplay)
  }

  const handleCloseBtn = () => {
    setIsDisplay(false)
  }

  return (
    <div className={mapStyles.mapWrapper}>
      <Map
        initialViewState={{
          longitude: location[0].longitude,
          latitude: location[0].latitude,
          zoom: 18
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={106.67179622944951}
          latitude={10.775547111098687}
          anchor="bottom"
          color="red"
          scale="1"
          onClick={handlePinClick}
        >
        </Marker>
        {isDisplay && <LocationInfo location={location[0]} handleCloseBtn={handleCloseBtn} />}
      </Map>


    </div>
  )
}

export default LocationMap

