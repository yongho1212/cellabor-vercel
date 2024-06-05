import React from 'react';
import CampainFilter from '../@organism/CampainFilter';
import CampainList from '../@organism/CampainList';

export default function CampainListPage() {
    return (
        <div>
            <CampainFilter />
            <CampainList />
        </div>
    );
}
