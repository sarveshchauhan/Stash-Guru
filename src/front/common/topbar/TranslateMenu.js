import { MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';


function TranslateMenu() {

    const { i18n } = useTranslation();
    const [value, setValue] = useState("en");





    const handleChange = (e) => {
        setValue(e.target.value);
        i18n.changeLanguage(e.target.value);
    }


    useEffect(() => {

        setValue(i18n.language);

    }, []);


    // useEffect(() => {

    //     i18n.changeLanguage(value);

    // }, [value]);


    return (
        <>

            <Select
                value={value}
                onChange={handleChange}
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="ro">Romanian</MenuItem>
            </Select>

        </>
    )
}

export default TranslateMenu
