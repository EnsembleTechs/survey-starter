import React, { useState, useEffect } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import FormFemale from './FormFemale'

const MainForm = () => {
    const [curPage, setCurPage] = useState(1)
    const [formReady, setFormReady] = useState(false)
    const [formFieldValues, setFormFieldValues] = useState({})

    useEffect(() => {
        //setFormFieldValues({
        //    englishName: 'Gordon',
        //    mobile: '12345678',
        //    email: 'trgordonb@gmail.com'
        //})
        setFormReady(true)
    },[])

    if (!formReady) {
        return <div></div>
    }

    return (
        <div>
            {
                curPage === 1 && <Form1 setPage={setCurPage} setFields={setFormFieldValues} fieldValues={formFieldValues} />
            }
            {
                curPage === 2 && <Form2 setPage={setCurPage} setFields={setFormFieldValues} fieldValues={formFieldValues} />
            }
            {
                curPage === 3 && <Form3 setPage={setCurPage} setFields={setFormFieldValues} fieldValues={formFieldValues} />
            }
            {
                curPage === 4 && <Form4 setPage={setCurPage} setFields={setFormFieldValues} fieldValues={formFieldValues} />
            }
            {
                curPage === 5 && <FormFemale setPage={setCurPage} setFields={setFormFieldValues} fieldValues={formFieldValues} />
            }
        </div>
    )
}

export default MainForm