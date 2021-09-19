import React, { useState } from 'react'
import { Form } from 'react-advanced-form'
import { Input, Radio } from 'react-advanced-form-addons'
import { isMobile } from "react-device-detect"
import Datepicker from './Datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Sidebar from './Sidebar'
import '../css/form.css'

const Form1 = ({setPage, setFields, fieldValues}) => {
    const [isFemale, setIsFemale] = useState(false)
    const [isMale, setIsMale] = useState(false)
    const handleSubmit = ({ serialized }) => {
        setFields({...fieldValues, ...serialized})
        setPage(2)
        return new Promise(resolve => resolve())
    }
    //const chiLangDict = require('./chi.json')
    //const engLangDict = require('./eng.json')
    //const [langDict, setLangDict] = useState(lang === 'en' ? engLangDict : chiLangDict)

    return (
        <div className="bg-white">
            <div>
                <main className="max-w-8xl px-4 sm:px-6 lg:px-8">
                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                        <Sidebar currentPage={1} isFemale={isFemale || fieldValues.gender && fieldValues.gender === 'female'}/>
                            <div className="lg:col-span-3">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" >
                                    <div className="mt-10 sm:mt-0">
                                        <div>
                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                <Form initialValues={fieldValues} action={handleSubmit}>
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="px-4 py-5 bg-white sm:p-6">
                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="englishName" className="block text-sm font-medium text-gray-700">English Name *</label>
                                                                    <Input type="text" name="englishName" id="englishName" required className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="chineseName" className="block text-sm font-medium text-gray-700">Chinese Name</label>
                                                                    <Input type="text" name="chineseName" id="chineseName" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID Card/Passport No *</label>
                                                                    <Input type="text" name="id" id="id" required className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div>                                      
                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender *</label>
                                                                    <div className="mt-3 flex items-center">
                                                                        <Radio 
                                                                            id="male" 
                                                                            name="gender" 
                                                                            label="Male" 
                                                                            value="male" 
                                                                            checked={(fieldValues.gender && fieldValues.gender === 'male') || isMale} 
                                                                        />
                                                                        <Radio 
                                                                            id="female" 
                                                                            name="gender" 
                                                                            label="Female" 
                                                                            value="female" 
                                                                            checked={(fieldValues.gender && fieldValues.gender === 'female') || isFemale} 
                                                                            onChange={({nextValue})=> {
                                                                                console.log(nextValue)
                                                                                setIsFemale(nextValue === 'female')
                                                                                setIsMale(nextValue === 'male')
                                                                            }} 
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                                                        Date of Birth *
                                                                    </label>
                                                                    <div className={isMobile ? "mobile-date" :"dates"}>
                                                                        <Datepicker id='birthday' name='birthday'/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="place" className="block text-sm font-medium text-gray-700">
                                                                        Place of Birth *
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="place"
                                                                        id="place"
                                                                        required
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6">
                                                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                                        Address*
                                                                    </label>
                                                                    <div className="address">
                                                                    <Input
                                                                        type="textarea"
                                                                        name="street-address"
                                                                        id="street-address"
                                                                        required
                                                                        className="p-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                    </div>
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                                                        Mobile *
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="mobile"
                                                                        id="mobile"
                                                                        required
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                                        Email
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="email"
                                                                        id="email"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                                                                        Tel
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="telephone"
                                                                        id="telephone"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                                                                        Whatsapp
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="whatsapp"
                                                                        id="whatsapp"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="wechat" className="block text-sm font-medium text-gray-700">
                                                                        Wechat
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="wechat"
                                                                        id="wechat"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="line" className="block text-sm font-medium text-gray-700">
                                                                        Line
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="line"
                                                                        id="line"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                                                                        Occupation
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="occupation"
                                                                        id="occupation"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="ethnic-background" className="block text-sm font-medium text-gray-700">
                                                                        Ethnic Background
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="ethnic-background"
                                                                        id="ethnic-background"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                    <label htmlFor="blood-type" className="block text-sm font-medium text-gray-700">
                                                                        Blood Type
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="blood-type"
                                                                        id="blood-type"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="blood-pressure" className="block text-sm font-medium text-gray-700">
                                                                        Blood Pressure
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="blood-pressure"
                                                                        id="blood-pressure"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                                                                        Weight
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="weight"
                                                                        id="weight"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                                                                        Height
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        name="height"
                                                                        id="height"
                                                                        className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                                <div className="col-span-6">
                                                                    <label htmlFor="chief-complaints" className="block text-sm font-medium text-gray-700">
                                                                        Chief Complaints
                                                                    </label>
                                                                    <Input
                                                                        type="text"
                                                                        multiline
                                                                        name="chief-complaints"
                                                                        id="chief-complaints"
                                                                        className="p-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"
                                                                    />
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                            <button 
                                                                type="submit"
                                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                            >
                                                                Next
                                                            </button>
                                                        </div>

                                                    </div>
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
        </div>
    )
}

export default Form1

