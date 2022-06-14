import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '131vh',
    height: '70vh'
};

const center = {
    lat: -6.175110,
    lng: 106.865036
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCdhr5A_0YaUs16un0dns4D4uTT5SfGkCg"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='Maps'>
            <div className='my-5 border-2 shadow-md mx-auto w-4/5'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                onLoad={onLoad}
                onUnmount={onUnmount}>   
            </GoogleMap>
            </div>
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </div>
    ) : <></>
}

export default React.memo(MyComponent)