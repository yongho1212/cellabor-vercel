// @flow
import { useEffect, useState } from 'react';
import { useNavermaps } from 'react-naver-maps';

type Coordinate = {
    lat: number,
    lng: number
}

const useGeocoding = (address: string): Coordinate | null => {
    const navermaps = useNavermaps();
    const [coordinate, setCoordinate] = useState<Coordinate | null>(null);

    useEffect(() => {
        navermaps.Service.geocode(
            { address },
            function (status: any, response: any) {
                if (status !== navermaps.Service.Status.OK) {
                    console.log('Geocoding error');
                    return;
                }

                const { items } = response.result;
                const { x: lng, y: lat } = items[0].point;
                setCoordinate({ lat, lng });
            }
        );
    }, [address, navermaps]);

    return coordinate;
};

export default useGeocoding;
