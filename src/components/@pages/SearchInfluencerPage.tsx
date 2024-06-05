import React from 'react';
import {
    TextField,
    Button,
    Menu,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
import {useState} from 'react';
import CardInfluencer from '../@molecule/CardInfluencer';

import {searchUser} from '../../apis/user/searchUser';
import {userList} from '../../mockups/userData';
import SearchbarWithFilter from '../@organism/SearchbarWithFilter';
import {UserType} from '../../types/infuser.types';

export interface SearchInfluencerProps extends UserType {
    uid: string;
}

export default function SearchInfluencerPage() {
    const [searchResult, setSearchResult] = useState<SearchInfluencerProps[]>([]);

    const handleDataFromChild = (data: any) => {
        setSearchResult(data);
    };

    console.log(searchResult);


    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <SearchbarWithFilter
                forwardFilter={handleDataFromChild}
            />
            {searchResult.length !== 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <>
                        {searchResult.map((item, index) => (
                            <CardInfluencer
                                key={index}
                                index={index}
                                {...item}
                                isLoaded={true}
                            />
                        ))}
                    </>
                </div>
                :
                <div className="w-full h-1/2 border-2 flex justify-center items-center">
                    <p>none</p>
                </div>
            }
        </div>
    );
}
