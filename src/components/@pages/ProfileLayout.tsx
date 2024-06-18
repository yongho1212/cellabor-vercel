// @flow
import React, {useState, useEffect, useRef} from 'react';
import {getUserInfo} from '../../apis/user/getProfile';
import firebase from 'firebase/compat';
import {calculateAge} from '../../utils/getAge';
import {Outlet, useParams} from 'react-router-dom';
import {useUserMutation, useUserQuery} from '../../services/userQueries';
import {UserType} from '../../types/infuser.types';
import Skeleton from '@mui/material/Skeleton';
import FacebookLoginbutton from '../@molecule/FacebookCertificateButton';
import {FaRegEdit} from 'react-icons/fa';
import imageUploadS3 from '../../utils/imageUploadS3';
import useS3Upload from '../../hooks/useS3Upload';
import RootContainer from '../@layouts/RootContainer';

type Props = {

};

const ProfileLayout = (props: Props) => {
    const { userId } = useParams<{ userId?: string }>();
    const [imageUrl, setImageUrl] = useState('');
    const {isLoading, isSuccess, isError, data} = useUserQuery(userId!);
    const mutation = useUserMutation();
    const userData = data?.data;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { uploadToS3, loading, url } = useS3Upload();

    useEffect(() => {
        if (url){
            mutation.mutate({profileImg: url});
        }
    }, [url]);

    function editImage(){
        console.log('image');
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    async function saveImg() {
        if (fileInputRef?.current?.files) {
            const file = fileInputRef?.current?.files[0];
            const reader = new FileReader();
            reader.onload = async () => {
                if (reader.result !== null) {
                    setImageUrl(reader.result as string);
                }
            };
            // const imageUrl = await imageUploadS3({ file, dir: 'user' });
            await uploadToS3(file, 'user');
            console.log(url);
            // mutation.mutate({profileImg: imageUrl});
            reader.readAsDataURL(file);
        }
    }

    return (
        <RootContainer>
            <div className='w-full flex justify-center' style={{ height: 'calc(100vh - 60px)', marginTop: '2rem' }}>
                    <div className="w-full flex flex-col md:flex-row gap-4 ">
                        <div className=" w-full md:w-2/5 lg:max-w-xs p-4 ">
                            {isLoading && <p>Loading...</p>}
                            <div className="mb-4 w-48 h-48 m-auto relative">
                                <FaRegEdit
                                    size={20}
                                    style={{position:'absolute', right:0, top: 0, cursor:'pointer'}}
                                    onClick={editImage}
                                />
                                <input
                                    type='file' className='hidden'
                                    ref={fileInputRef}
                                    onChange={saveImg}
                                />
                                {isSuccess ?
                                    <img
                                        src={userData.profileImg}
                                        // alt="Profile"
                                         className="rounded-full w-48 h-48 mx-auto"/>
                                    :
                                    <Skeleton variant="circular" width={'100%'} height={'100%'} animation="wave"/>
                                }
                            </div>
                            {isSuccess ?
                                <>
                                    <p className="text-center text-lg font-semibold mb-2">{userData?.name}</p>
                                    <p className="text-center text-sm">{userData?.email}</p>
                                    <p className="text-center text-sm">{userData?.sex}</p>
                                    <p className="text-center text-sm">{calculateAge(userData?.birth)} 세</p>
                                </>
                                :
                                <>
                                    <Skeleton variant="text" sx={{fontSize: '1.3rem'}}/>
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                                </>
                            }
                            <div>
                                <FacebookLoginbutton/>
                            </div>

                        </div>
                        <Outlet
                            context={{
                                userInfo: data?.data,
                            }}
                        />
                    </div>
            </div>
        </RootContainer>
    );
};

export default ProfileLayout;
