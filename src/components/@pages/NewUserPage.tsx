import { useForm } from 'react-hook-form';
import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {editProfile} from '../../apis/user/editProfile';

import {UserType} from '../../types/infuser.types';
import {useRecoilState} from 'recoil';
import {profileState} from '../../states/user/atoms/loginState';

export default function NewProfile(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [userData, setUserData] = useState<UserType | null>(null);
    const [profile, setProfile] = useRecoilState(profileState);

    const onSubmit = async (data:any) => {
        data.joinDate = new Date().toISOString();
        data.birth = new Date(data.birth).toISOString();
        const response = await editProfile(data!);

        if (response.status === 200) {
            const updatedUser = await response.data;
            if (updatedUser) {
                setProfile(true);
                navigate('/workspace');
            }
            setUserData(updatedUser.user);

        } else {
            console.error('Error updating user');
        }
    };

    return (

        <div className="flex flex-col min-h-[100dvh]">
            <section className="flex-1 flex items-center justify-center px-4 md:px-6">
                <div className="max-w-md w-full space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">NEW PROFILE</h1>
                        <p className="text-gray-500 dark:text-gray-400">Create a new account to get started.</p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="lastName">Name</label>
                                <input {...register('name', {required: true, maxLength: 20})} placeholder="Doe"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="gender">Gender</label>
                                <select {...register('sex')}>
                                    <option value='female'>female</option>
                                     <option value='male'>male</option>
                                     <option value='other'>other</option>
                                </select>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="role">Role</label>
                                <select {...register('role')}>
                                     <option value='influencer'>influencer</option>
                                     <option value='advertiser'>advertiser</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="birthday">Birthday</label>
                                {/*<input id="birthday" type="date"/>*/}
                                <input {...register('birth', {valueAsDate: true})} type='date' id="birthday"/>
                            </div>
                            <div className="grid gap-2">
                            <label htmlFor="phone">Phone Number</label>
                                {/*<input id="phone" placeholder="+1 (555) 555-5555" type="tel"/>*/}
                                <input {...register('phone')} id="phone" placeholder="+82 010-6800-2088" />
                            </div>
                        </div>
                        <button className="w-full" type="submit">
                            등록하기
                        </button>
                    </form>

                </div>
            </section>
        </div>
    );
}
