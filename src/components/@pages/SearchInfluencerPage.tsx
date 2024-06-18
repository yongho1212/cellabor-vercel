import React from 'react';
import {useState} from 'react';
import CardInfluencer from '../@molecule/CardInfluencer';
import SearchbarWithFilter from '../@organism/SearchbarWithFilter';
import {UserType} from '../../types/infuser.types';
import SearchModal from '../@organism/SearchMobilePortal';
import {useResponsive} from '../../hooks/useResponsive';
import {MdFilterAlt} from 'react-icons/md';

import RootContainer from '../@layouts/RootContainer';
import Spacer from '../@atoms/Spacer';


export interface SearchInfluencerProps extends UserType {
    uid: string;
}

export default function SearchInfluencerPage() {
    const [searchResult, setSearchResult] = useState<SearchInfluencerProps[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const {isDesktop, isTablet, isMobile} = useResponsive();

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleDataFromChild = (data: any) => {
        setSearchResult(data);
    };

    return (
        <>
            <RootContainer>
                <div className="container border-2 w-full ">

                    {isMobile ?
                        <>
                            <button onClick={openModal}>
                                <div className="flex items-center justify-center border-2 rounded-md px-2 py-1">
                                    Open Modal
                                    <MdFilterAlt/>
                                </div>
                            </button>

                            <SearchModal isOpen={isModalOpen} onClose={closeModal}>
                                <SearchbarWithFilter
                                    forwardFilter={handleDataFromChild}
                                />
                            </SearchModal>
                        </>
                        :
                        <SearchbarWithFilter
                            forwardFilter={handleDataFromChild}
                        />
                    }

                </div>
            </RootContainer>
            <Spacer height={30}/>
            <RootContainer>
                <div className={'w-full border-2'}>
                    {searchResult.length !== 0 ?
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                        <div className="w-full border-2 flex justify-center items-center ">
                            <div>
                                <p>죄송합니다. 검색 결과 없음</p>
                                <p>필터 수정후 다시 시도하세요.</p>
                            </div>
                        </div>
                    }
                </div>
            </RootContainer>
        </>
    )
        ;
}
