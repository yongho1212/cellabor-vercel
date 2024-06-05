// @flow
import {Button, Slider} from '@mui/material';
import React, {useState, useEffect} from 'react';
import {ToggleButton, ToggleButtonGroup} from '@mui/lab';
import {ArrowDropDownIcon} from '@mui/x-date-pickers';
import styled from 'styled-components';
import CategorySelect from '../@molecule/CategorySelect';
import TextField from '@mui/material/TextField';
import { searchADCampaigns } from '../../apis/campaign/searchADCampaigns';

type Props = {
    forwardFilter: (filter: { age: number[], sex: string[] }) => void,
};

function valuetext(value: number) {
    return `${value}원`;
}

const ADWorkspaceSearchbar = ({forwardFilter}: Props) => {

    const [title, setTitle] = useState('');
    const [reward, setReward] = React.useState<number[]>([20, 37]);
    const [sex, setSex] = React.useState(() => ['male', 'female']);
    const [category, setCategory] = useState<string[]>([]);
    const data = {title, reward, sex, category};

    const handleSex = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setSex(newFormats);
    };

    const handleRewardChange = (event: Event, newValue: number | number[]) => {
        setReward(newValue as number[]);
    };

    const handleCategoriesChange = (newCategories: string[]) => {
        setCategory(newCategories);
        console.log('Selected categories:', newCategories);
    };

    const sendData = async () => {
        const res  = await searchADCampaigns(data);

        forwardFilter(res);
    };


    return (
        <>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <FilterItemSection>
                <ToggleButtonGroup
                    value={sex}
                    onChange={handleSex}
                    aria-label="sex"
                >
                    <ToggleButton value="male" aria-label="male">
                        male
                    </ToggleButton>
                    <ToggleButton value="female" aria-label="female">
                        female
                    </ToggleButton>
                </ToggleButtonGroup>
            </FilterItemSection>
            <FilterItemSection>
                <Slider
                    // getAriaLabel={() => 'Temperature range'}
                    value={reward}
                    onChange={handleRewardChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disabled={false}
                />
            </FilterItemSection>
            <FilterItemSection>
                <CategorySelect
                    value={category} onCategoriesChange={handleCategoriesChange}
                />
            </FilterItemSection>

            <Button onClick={sendData}>
                search
            </Button>
        </>
    );
};

export default ADWorkspaceSearchbar;


const FilterItemSection = styled.div`
    border-bottom: darkgray 1px solid;
    margin: 1rem 0px;
    padding: 1rem;
`;
