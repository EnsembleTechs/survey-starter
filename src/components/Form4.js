import React, { useState } from 'react'
import { Form, Field } from 'react-advanced-form'
import { Input, Checkbox } from 'react-advanced-form-addons'
import Sidebar from './Sidebar'
import "../css/form.css"
import { isMobile } from "react-device-detect"

const Form4 = ({setPage, setFields, fieldValues}) => {
    const [isTobaccoSelected, setTobacco] = useState(false)
    const [isMarijuanaSelected, setMarijuana] = useState(false)
    const [isAlcoholSelected, setAlcohol] = useState(false)
    const [isCaffieneSelected, setCaffiene] = useState(false)
    const [isCocaine, setCocaine] = useState(false)

    const handleSubmit = ({ serialized }) => {
        setFields({...fieldValues, ...serialized})
        console.log({...fieldValues, ...serialized})
        return new Promise(resolve => resolve())
    }

    return (
    <div className="bg-white">  
        <main className="max-w-8xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
                <h2 id="products-heading" className="sr-only">Products</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                    <Sidebar currentPage={4} isFemale={fieldValues.gender && fieldValues.gender === 'female'} />
                    <div className="lg:col-span-3">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" >
                            <div className="mt-10 sm:mt-0">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <Form initialValues={fieldValues} action={handleSubmit}>
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="headerInfo">
                                                    <div className="px-4 py-5 sm:px-6">
                                                        <h3 className="text-lg leading-6 font-medium text-gray-900">List all medications </h3>
                                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">All medications currently taking including vitamins, oral contraceptives and other herbal remedies</p>
                                                    </div>
                                                </div>
                                                <Field.Group name='medications'>
                                                    <div className="grid grid-cols-1 gap-1">
                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <Input type="text" name="taking" id="taking" className="p-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                        </div>
                                                    </div>
                                                    <div className="headerInfo">
                                                        <div className="px-4 py-5 sm:px-6">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900">List all medications that you develop allergies</h3>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-1">
                                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                            <Input type="text" name="allergic" id="allergic" className="p-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                        </div>
                                                    </div>
                                                </Field.Group>
                                                <Field.Group name="habits">
                                                    <div className="headerInfo">
                                                        <div className="px-4 py-5 sm:px-6">
                                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Habits</h3>
                                                            <p className="mt-1 mb-3 max-w-2xl text-sm text-gray-500"> Please record your habits</p>
                                                            <Field.Group name="tobacco">
                                                                <div className="flex items-start py-1">
                                                                    <div className="flex items-center h-5">
                                                                        <Checkbox id="tobaccoIsHabit" name="tobaccoisHabit" onChange={({nextValue}) => {setTobacco(nextValue)}} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>                                                       
                                                                        <div className="ml-3 text-sm">
                                                                            <label htmlFor="tobaccoIsHabit" className="font-bold text-gray-700">Tobacco</label>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                {(!isMobile  && isTobaccoSelected)? 
                                                                <div>
                                                                    <div className="flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                        <Input type="text" name="frequency" id="tobacco-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                        <Input type="text" name="startAge" placeholder="Age Started" id="tobacco-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    </div>
                                                                </div> : null}
                                                                
                                                                {(isMobile && isTobaccoSelected)? 
                                                                <div className=" ml-2 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                    <Input type="text" name="frequency" id="tobacco-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <Input type="text" name="startAge" placeholder="Age Started" id="tobacco-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div> : null}
                                                            </Field.Group>
                                                            <Field.Group name="marijuana">
                                                                <div className="flex items-start py-1">
                                                                    <div className="flex items-center h-5">
                                                                        <Checkbox id="marijuanaIsHabit" name="marijuanaisHabit" onChange={({nextValue}) => {setMarijuana(nextValue)}} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>                                                       
                                                                        <div className="ml-3 text-sm">
                                                                            <label htmlFor="marijuanaIsHabit" className="font-bold text-gray-700">Marijuana</label>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                {(!isMobile  && isMarijuanaSelected)? 
                                                                <div>
                                                                    <div className="flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                        <Input type="text" name="frequency" id="marijuana-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                        <Input type="text" name="startAge" placeholder="Age Started" id="marijuana-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    </div>
                                                                </div> : null}
                                                                
                                                                {(isMobile && isMarijuanaSelected)? 
                                                                <div className=" ml-2 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                    <Input type="text" name="frequency" id="marijuana-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <Input type="text" name="startAge" placeholder="Age Started" id="marijuana-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div> : null}
                                                            </Field.Group>
                                                            <Field.Group name="alcohol">
                                                                <div className="flex items-start py-1">
                                                                    <div className="flex items-center h-5">
                                                                        <Checkbox id="alcoholIsHabit" name="alcoholisHabit" onChange={({nextValue}) => {setAlcohol(nextValue)}} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>                                                       
                                                                        <div className="ml-3 text-sm">
                                                                            <label htmlFor="alcoholIsHabit" className="font-bold text-gray-700">Alcohol</label>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                {(!isMobile && isAlcoholSelected)? 
                                                                <div>
                                                                    <div className="flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                        <Input type="text" name="frequency" id="alcohol-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                        <Input type="text" name="startAge" placeholder="Age Started" id="alcohol-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    </div>
                                                                </div> : null}
                                                                
                                                                {(isMobile && isAlcoholSelected)? 
                                                                <div className=" ml-2 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                    <Input type="text" name="frequency" id="alcohol-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <Input type="text" name="startAge" placeholder="Age Started" id="alcohol-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div> : null}
                                                            </Field.Group>
                                                            <Field.Group name="caffeine">
                                                                <div className="flex items-start py-1">
                                                                    <div className="flex items-center h-5">
                                                                        <Checkbox id="caffeineIsHabit" name="caffeineisHabit" onChange={({nextValue}) => {setCaffiene(nextValue)}} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>                                                       
                                                                        <div className="ml-3 text-sm">
                                                                            <label htmlFor="caffeineIsHabit" className="font-bold text-gray-700">Caffeine</label>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                {(!isMobile && isCaffieneSelected)? 
                                                                <div>
                                                                    <div className="flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                        <Input type="text" name="frequency" id="caffeine-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                        <Input type="text" name="startAge" placeholder="Age Started" id="caffeine-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    </div>
                                                                </div> : null}
                                                                {(isMobile && isCaffieneSelected)? 
                                                                <div className=" ml-2 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                    <Input type="text" name="frequency" id="caffeine-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <Input type="text" name="startAge" placeholder="Age Started" id="caffeine-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div> : null}
                                                            </Field.Group>
                                                            <Field.Group name="cocaine">
                                                                <div className="flex items-start py-1">
                                                                    <div className="flex items-center h-5">
                                                                        <Checkbox id="cocaineIsHabit" name="cocaineisHabit" onChange={({nextValue}) => {setCocaine(nextValue)}} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>                                                       
                                                                        <div className="ml-3 text-sm">
                                                                            <label htmlFor="cocaineIsHabit" className="font-bold text-gray-700">Cocaine</label>
                                                                        </div>
                                                                    </div>
                                                                </div> 
                                                                {(!isMobile && isCocaine)? 
                                                                <div>
                                                                    <div className="flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                        <Input type="text" name="frequency" id="cocaine-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                        <Input type="text" name="startAge" placeholder="Age Started" id="cocaine-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    </div>
                                                                </div> : null}
                                                                {(isMobile && isCocaine)? 
                                                                <div className=" ml-2 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                                    <Input type="text" name="frequency" id="cocaine-frequency" placeholder="Frequency" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                    <Input type="text" name="startAge" placeholder="Age Started" id="cocaine-agestart" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div> : null}
                                                            </Field.Group>
                                                            <div className="headerInfo">
                                                                <div className="px-4 py-5 sm:px-6">
                                                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Other drugs</h3>
                                                                    <Input type="text" name="otherDrugs" id="otherDrugs" className="p-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Field.Group>                              
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setPage(3)}
                                                    className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                >Previous</button>
                                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Complete</button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>)
}

export default Form4