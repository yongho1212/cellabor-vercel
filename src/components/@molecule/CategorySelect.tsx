import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ChangeEvent } from 'react';

interface CategorySelectProps {
    value: string[];
    onCategoriesChange: (newValue: string[]) => void;
}

export default function CategorySelect({ value, onCategoriesChange }: CategorySelectProps) {
    const handleCategoriesChange = (event: ChangeEvent<{}>, newValue: string[]) => {
        onCategoriesChange(newValue);
    };

    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={categories}
            getOptionLabel={(option) => option}
            value={value}
            onChange={handleCategoriesChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Hashtag"
                    placeholder="태그를 선택" />
            )}
            sx={{ width: '100%'}}
        />
    );
}

const categories = [
    'food',
    'fashion',
    'travel',
    'workout',
];
