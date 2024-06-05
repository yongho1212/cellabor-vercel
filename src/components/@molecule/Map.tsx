// @flow
import React, {useState, useEffect} from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

type Props = {
    mapCenter: {
        lat: number,
        lng: number
    },
    markerPosition: {
        lat: number,
        lng: number
    }
};
const Map = ({ mapCenter, markerPosition }: Props) => {
    const navermaps = useNavermaps();

    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(mapCenter.lat, mapCenter.lng)}
            defaultZoom={15}
        >
            <Marker
                defaultPosition={new navermaps.LatLng(markerPosition.lat, markerPosition.lng)}
            />
        </NaverMap>
    );
};

export default Map;
