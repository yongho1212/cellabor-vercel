import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import CategorySelect from '../@molecule/CategorySelect';
import {editProfile} from '../../apis/user/editProfile';
import {useNavigate, useOutletContext} from 'react-router-dom';
import {useUserQuery, useUserMutation} from '../../services/userQueries';
import {UserType} from '../../types/infuser.types';


// usemutation 추가
export default function ProfileEditPage(){
    const navigate = useNavigate();
    const [category, setCategory] = useState<string[]>([]);
    const { register, handleSubmit, setValue, control } = useForm();
    // const {isLoading, isSuccess, isError, data} = useUserQuery();
    const { userInfo } = useOutletContext<any>();
    const mutation = useUserMutation();
    // const userData = data?.data as UserType;

    useEffect(() => {
        if(userInfo){
            setValue('description', userInfo?.description || '설명');
            setCategory(userInfo?.category || []);
        }
    }, [userInfo]);

    useEffect(() => {
        if(mutation.isSuccess){
            navigate('/profile');
        } else if (mutation.isError){
            alert('ERR');
        };
    }, [mutation]);


    const onSubmit = async (data:any) => {
        const categoryStrings = category.map(item => item);
        const userDataWithCategory = {
            ...data,
            category: categoryStrings
        };
        mutation.mutate(userDataWithCategory);
    };

    const handleCategoriesChange = (newCategories: string[]) => {
        setCategory(newCategories);
        console.log('Selected categories:', newCategories);
    };

    return (
        <div className='flex flex-col h-30 w-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <h3 className="text-2xl font-bold mb-1">About</h3>
                    <textarea
                        {...register('description')}
                        className='w-full h-36 border-gray-200 border-2 p-2 rounded-lg'
                    />
                </div>
                <div className='mb-3'>
                    <h3 className="text-2xl font-bold mb-1">Category</h3>
                    <CategorySelect value={category} onCategoriesChange={handleCategoriesChange}/>
                </div>
                <div className='mb-3'>
                    <h3 className="text-2xl font-bold mb-1">Location</h3>
                    <input
                        {...register('location')}
                        className='w-full border-gray-200 border-2 p-2 rounded-lg'
                    />
                </div>
                    {/*<p>제출</p>*/}
                    {/*<input type="submit"/>*/}
                    <button className="w-full" type="submit" onClick={onSubmit}>
                        Save
                    </button>
            </form>
        </div>
);
}
