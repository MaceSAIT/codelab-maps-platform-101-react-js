/**
 * Copyright 2024 Google LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
import {APIProvider, Map, MapCameraChangedEvent, Pin, AdvancedMarker} from '@vis.gl/react-google-maps';

import React from 'react';
import { createRoot } from "react-dom/client";

type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
    {key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }},
    {key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 }},
    {key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 }},
    {key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 }},
    {key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 }},
    {key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 }},
    {key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 }},
    {key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 }},
    {key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 }},
    {key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 }},
    {key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 }},
    {key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 }},
    {key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 }},
    {key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 }},
    {key: 'barangaroo', location: { lat: - 33.8605523, lng: 151.1972205 }},
];


const App = () => (
    <APIProvider apiKey={'AIzaSyBkHRS-qYuWfJSZ0iOeTiG9XANnOZI0R9Y'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
            defaultZoom={13}
            mapId='DEMO_MAP_ID'
            defaultCenter={ { lat: 51.05373355597089, lng: -114.07158095471553 } }
            onCameraChanged={ (ev: MapCameraChangedEvent) =>
                console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }>
            <PoiMarkers pois={locations} />
        </Map>
    </APIProvider>
);

const PoiMarkers = (props: {pois: Poi[]}) => {
    return (
        <>
        {props.pois.map( (poi: Poi) => (
            <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
        ))}
        </>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;