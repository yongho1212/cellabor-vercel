// @flow
import {Button, Slider, Typography} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/lab';
import {ArrowDropDownIcon} from '@mui/x-date-pickers';
import styled from 'styled-components';
import CategorySelect from '../@molecule/CategorySelect';
import TextField from '@mui/material/TextField';
import {searchUser} from '../../apis/user/searchUser';

type Props = {
    forwardFilter: (filter: { name:string, age: number[], sex: string[], category: string[] }) => void,
};

function valuetext(value: number) {
    return `${value}세`;
}

const SearchbarWithFilter = ({forwardFilter}: Props) => {

    const [name, setName] = useState('');
    const [age, setAge] = React.useState<number[]>([20, 37]);
    const [sex, setSex] = React.useState(() => ['male', 'female']);
    const [category, setCategory] = useState<string[]>([]);
    const data = {name, age, sex, category};

    console.log(data);

    const handleSex = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setSex(newFormats);
    };

    const handleAgeChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setAge(newValue);
        }
    };


    const handleCategoriesChange = (newCategories: string[]) => {
        setCategory(newCategories);
        console.log('Selected categories:', newCategories);
    };

    const sendData = async () => {
        const res  = await searchUser(data);

        forwardFilter(res);
    };


    return (
        <SearchbarContainer>
            <FormControl>
                <Typography variant="h6" gutterBottom>
                    이름
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="이름"
                    variant="outlined"
                    value={name}
                    fullWidth
                    onChange={event => setName(event.target.value)}
                />
            </FormControl>

            <FormControl>
                <Typography variant="h6" gutterBottom>
                    성별
                </Typography>
                <ToggleButtonGroup
                    value={sex}
                    onChange={handleSex}
                    aria-label="sex"

                >
                    <ToggleButton value="male" aria-label="male">
                        남성
                    </ToggleButton>
                    <ToggleButton value="female" aria-label="female">
                        여성
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormControl>

            <FormControl>
                <Typography variant="h6" gutterBottom>
                    나이
                </Typography>
                <Slider
                    value={age}
                    onChange={handleAgeChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={100}
                />
            </FormControl>

            <FormControl>
                <Typography variant="h6" gutterBottom>
                    카테고리
                </Typography>
                <CategorySelect
                    value={category}
                    onCategoriesChange={handleCategoriesChange}
                />
            </FormControl>

            <Button onClick={sendData} fullWidth variant="contained">
                검색
            </Button>
        </SearchbarContainer>
    );
};

export default SearchbarWithFilter;

const SearchbarContainer = styled.div`
    width: 100%;
    padding: 1rem;
    
    //border-radius: 8px;
    //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormControl = styled.div`
  margin-bottom: 1.5rem;
`;
