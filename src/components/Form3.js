import React, { useState } from 'react'
import { Field, Form } from 'react-advanced-form'
import { Input } from 'react-advanced-form-addons'
import Sidebar from './Sidebar'
import "../css/form.css"

const Form3 = ({setPage, setFields, fieldValues}) => {
    const [fields, serFieldsCount] = useState([1])

    const addField = (e) => {
        serFieldsCount(fields => [...fields, 1])
    }

    const handleDelete = (index) => {
        serFieldsCount(fields?.splice(0, 1, index))
    }

    const handleSubmit = ({ serialized }) => {
        setFields({...fieldValues, ...serialized})
        console.log({...fieldValues, ...serialized})
        setPage(4)
        return new Promise(resolve => resolve())
    }

    return (
<div className="bg-white">
    <div>
        <main className="max-w-8xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
                <h2 id="products-heading" className="sr-only">Products</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                    <Sidebar currentPage={3} isFemale={fieldValues.gender && fieldValues.gender === 'female'} />
                    <div className="lg:col-span-3">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" >
                            <div className="mt-10 sm:mt-0">
                                <div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <Form initialValues={fieldValues} action={handleSubmit}>
                                            <Field.Group name='hospitalization'>
                                            <div className="shadow overflow-hidden sm:rounded-md">
                                                <div className="px-4 py-5 bg-white sm:p-6">
                                                    <div className="headerInfo">
                                                        <div className="px-4 py-5 sm:px-6">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Major Hospitalizations</h3>
                                                            <p className="mt-1 max-w-3xl text-sm text-gray-500">Due to serious medical illness or operation, write in your most recent hospitalization. Do not include normal pregnancies</p>
                                                        </div>
                                                    </div>
                                                    {fields.map((item, index) =>
                                                    <div className="mb-4 grid grid-cols-8 gap-1">
                                                        <Field.Group name={`record${index}`}>
                                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                <label htmlFor='year' className="block text-sm font-medium text-gray-700">Year</label>
                                                                <Input type="text" name='year' id='year' className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                <label htmlFor={`operation${index}`} className="block text-sm font-medium text-gray-700">Operation / Illness</label>
                                                                <Input type="text" name={`operation${index}`} id={`operation${index}`} className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                <label htmlFor={`name${index}`} className="block text-sm font-medium text-gray-700">Name of Hospital</label>
                                                                <Input type="text" name={`name${index}`} id={`name${index}`} className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                <label htmlFor={`city${index}`} className="block text-sm font-medium text-gray-700">City / State / Country</label>
                                                                <div className="flex">
                                                                    <Input type="text" name={`city${index}`} id={`city${index}`} className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <span className="crossIcon" onClick={() => handleDelete(index)}>
                                                                        <img src="https://img.icons8.com/color/30/000000/delete-sign.png"/>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Field.Group>       
                                                    </div>)}
                                                </div>
                                                <div onClick={addField} className="ml-6 mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add</div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (fieldValues.gender && fieldValues.gender === 'female') {
                                                                setPage(5)
                                                            } else {
                                                                setPage(2)
                                                            }
                                                        }}
                                                        className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >Previous</button>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                    >Next</button>
                                                </div>
                                            </div>
                                        </Field.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div> )
}

export default Form3