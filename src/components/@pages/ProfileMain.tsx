// @flow
import React, {useState, useEffect} from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import {Avatar, Paper, Typography} from '@mui/material';
import {useUserQuery} from '../../services/userQueries';
import {UserType} from '../../types/infuser.types';
import {FaRegEdit} from 'react-icons/fa';

// import FacebookLoginButton from '../@molecule/FacebookCertificateButton';

type Props = {};



const ProfileMain = (props: Props) => {

    const { userInfo } = useOutletContext<any>();

    return (
        <div className='w-full relative p-2'>
            {/*ProfileMain*/}
            <Link
                to={'/profile/edit'}
                className={'absolute right-1 top-1'}
            >
                <FaRegEdit size={20}/>
            </Link>

            <div className="border shadow-sm rounded-lg">
                <table>
                    <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Followers</th>
                        <th>Channels</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    {/*<AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg"/>*/}
                                    {/*<AvatarFallback>JP</AvatarFallback>*/}
                                </Avatar>
                                <div>
                                    <h3 className="font-medium">Jane Doe</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">@janedoe</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<InstagramIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                <span className="text-sm font-medium">100K</span>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<InstagramIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                {/*<TwitterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                {/*<YoutubeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                            </div>
                        </td>
                        <td>
                            <span className="text-sm font-medium">Female</span>
                        </td>
                        <td>
                            <button>Connect</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    {/*<AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg"/>*/}
                                    {/*<AvatarFallback>JD</AvatarFallback>*/}
                                </Avatar>
                                <div>
                                    <h3 className="font-medium">John Doe</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">@johndoe</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<TwitterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                <span className="text-sm font-medium">50K</span>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<TwitterIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                {/*<YoutubeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                            </div>
                        </td>
                        <td>
                            <span className="text-sm font-medium">Male</span>
                        </td>
                        <td>
                            <button>Connect</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-10 w-10">
                                    {/*<AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg"/>*/}
                                    {/*<AvatarFallback>SM</AvatarFallback>*/}
                                </Avatar>
                                <div>
                                    <h3 className="font-medium">Sarah Miller</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">@sarahmiller</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<InstagramIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                                <span className="text-sm font-medium">500K</span>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center gap-2">
                                {/*<InstagramIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>*/}
                            </div>
                        </td>
                        <td>
                            <span className="text-sm font-medium">Female</span>
                        </td>
                        <td>
                            <button>Connect</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className='mb-3'>
                <h3 className="text-2xl font-bold mb-1">About</h3>
                <Paper
                    elevation={1}
                    sx={{padding: '1rem'}}
                >
                    <p className="text-gray-500 dark:text-gray-400">
                        {userInfo?.description}
                    </p>
                </Paper>
            </div>
            <div className='mb-3'>
                <h3 className="text-2xl font-bold mb-1">Category</h3>
                <Paper elevation={1} className='flex'
                       sx={{padding: '1rem'}}
                >
                    {userInfo?.category?.map((item:string, index:number) => {
                        return (
                            <div key={index} className='border-2 w-auto py-1 px-2 mr-2 rounded-lg	'>
                                {item}
                            </div>
                        );
                    })
                    }
                </Paper>
            </div>
            <div className='mb-3'>
                <h3 className="text-2xl font-bold mb-1">Loaction</h3>
                <Paper elevation={1} sx={{padding: '1rem'}}>
                    {userInfo?.location}
                </Paper>
            </div>

        </div>
    );
};

export default ProfileMain;
