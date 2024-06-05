import React, { useEffect, useRef, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {Text} from '../@atoms';

interface DateInputProps {
    onChange: (birthdate: Date) => void;
    label?: string;
}

const BirthdayInput: React.FC<DateInputProps> = ({ onChange, label }) => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const monthInput = useRef<HTMLInputElement>(null);
    const dayInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (year.length === 4 && monthInput.current !== null) {
            monthInput.current.focus();
        }
    }, [year]);

    useEffect(() => {
        if (month.length === 2 && dayInput.current !== null) {
            dayInput.current.focus();
        }
    }, [month]);

    useEffect(() => {
        if (day.length === 2) {
            // onBirthdateChange(`${year}-${month}-${day}`); // string 형식
            const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
            onChange(date);
        }
    }, [day, month, year]);

    return (
        <BirthInputContainer>
            <BirthDayContaineer>
                <InputTimeInfo
                    type='text'
                    value={year}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
                    maxLength={4}
                    placeholder='2000'
                />
                <InputTimeInfo
                    ref={monthInput}
                    type='text'
                    value={month}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMonth(e.target.value)}
                    maxLength={2}
                    placeholder='01'
                />
                <InputTimeInfo
                    ref={dayInput}
                    type='text'
                    value={day}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDay(e.target.value)}
                    maxLength={2}
                    placeholder='01'
                />
            </BirthDayContaineer>
        </BirthInputContainer>
    );
};

export default BirthdayInput;

const BirthInputContainer = styled.div`
    width: 100%;
`;

const BirthDayContaineer = styled.div`
    display: flex;
    width: 100%;
`;

const InputTimeInfo = styled.input`
    width: 33.3%;
    height: 40px;
    border-width: 0 0 1px 0;
    border-bottom-color: #9c9c9c;
    font-size: 14px;  
`;
