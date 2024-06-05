// @flow
import React, {useState, useEffect, Context, useContext} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
    birthday: Dayjs,
    setBirthday: (date: Dayjs) => void;
};

interface PwInputProps {
    context: Context<any>;
}


const BirthInput = ({context}: PwInputProps) => {

    const contextValue = useContext(context);
    if (!contextValue){
        throw new Error('Login Context not found');
    }
    const { userInfo, handleInputChange } = contextValue;

    return (
        <>
            <DatePicker
                label="Custom format"
                value={userInfo.birthday}
                onChange={(newValue) => {
                    if(newValue){
                        const date = newValue.format('YYYY-MM-DD');
                        handleInputChange('birthday',date);
                    }
                }}
                sx={{width: '80%'}}
            />
        </>

    );
};

export default BirthInput;
