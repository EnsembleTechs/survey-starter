import React, { useState } from 'react'
import Datepicker from './Datepicker'
import Select from './Select'
import { Form, Field } from 'react-advanced-form'
import { Input, Checkbox } from 'react-advanced-form-addons'
import Sidebar from './Sidebar'
import "../css/form.css"
import { isMobile } from "react-device-detect"

const Form2 = ({setPage, setFields, fieldValues}) => {
    const [isDiseaseSelected, setDisease] = useState(false)
    const [isBloodSelected, setBlood] = useState(false)
    const [isOrganSelected, setOrgan] = useState(false)

    const handleSubmit = ({ serialized }) => {
        setFields({...fieldValues, ...serialized})
        if (fieldValues.gender === 'female') {
            setPage(5)
        } else {
            setPage(3)
        }
        return new Promise(resolve => resolve())
    }

    const checkData = (field) => {
        if (!fieldValues.IllnessHistory || !fieldValues.IllnessHistory[field]) {
            return false
        } else {
            return fieldValues.IllnessHistory[field]
        }
    }

    const checkData2 = (field1, field2) => {
        if (!fieldValues[field1] || !fieldValues[field1][field2]) {
            return false
        } else {
            let value = fieldValues[field1][field2]
            return value
        }
    }

    const options = [
        { value: 'Father', label: 'Father', },
        { value: 'Mother', label: 'Mother', },
        { value: 'Brother', label: 'Brother' },
        { value: 'Sister', label: 'Sister', },
        { value: 'Spouse', label: 'Spouse', },
        { value: 'Children', label: 'Children' },]
  
    return (
      <div className="bg-white">
        <div>
          <main className="max-w-8xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                <Sidebar currentPage={2} isFemale={fieldValues.gender && fieldValues.gender === 'female'} />
                <div className="lg:col-span-3">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" >
                    <div className="mt-10 sm:mt-0">
                      <div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                          <Form initialValues={fieldValues} action={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                              <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="headerInfo">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Past or Present Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Past or Present Illnesses or Affected Organs</p>
                                  </div>
                                </div>
                                <div className={isMobile ? "ml-1 grid grid-cols-3 gap-6" : "ml-3 grid grid-cols-3 gap-6"}>
                                <Field.Group name="IllnessHistory">
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <Checkbox id='diabetes' name='diabetes' checked={checkData('diabetes')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="diabetes" className="font-medium text-gray-700">Diabetes</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="kidney" name="kidney" checked={checkData('kidney')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="kidney" className="font-medium text-gray-700">Kidney</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="thyroid" name="thyroid" checked={checkData('thyroid')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="thyroid" className="font-medium text-gray-700">Thyroid</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="allergies" name="allergies" checked={checkData('allergies')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="allergies" className="font-medium text-gray-700">Allergies</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="stroke" name="stroke" checked={checkData('stroke')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="stroke" className="font-medium text-gray-700">Stroke</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="cancer" name="cancer" checked={checkData('cancer')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="cancer" className="font-medium text-gray-700">Cancer</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="headache" name="headache" checked={checkData('headache')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="headache" className="font-medium text-gray-700">Headache</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="epilepsy" name="epilepsy" checked={checkData('epilepsy')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="epilepsy" className="font-medium text-gray-700">Epilepsy</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="bronchitis" name="bronchitis" checked={checkData('bronchitis')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="bronchitis" className="font-medium text-gray-700">Bronchitis</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="urinaryTract" name="urinaryTract" checked={checkData('urinaryTract')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="urinaryTract" className="font-medium text-gray-700">Urinary Tract</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="muscle/joint" name="muscle/joint" checked={checkData('muslce/joint')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="muscle/joint" className="font-medium text-gray-700">Muscle</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="stomach/intestinal" name="stomach/intestinal" checked={checkData('stomach/intestinal')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="stomach/intestinal" className="font-medium text-gray-700">Stomach</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="asthma" name="asthma" checked={checkData('asthma')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="asthma" className="font-medium text-gray-700">Asthma</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="anemia" name="anemia" checked={checkData('anemia')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="anemia" className="font-medium text-gray-700">Anemia</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="heart" name="heart" checked={checkData('heart')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="heart" className="font-medium text-gray-700">Heart</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="liverDisease" name="liverDisease" checked={checkData('liverDisease')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="liverDisease" className="font-medium text-gray-700">Liver Disease</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="skin" name="skin" checked={checkData('skin')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="skin" className="font-medium text-gray-700">Skin</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="highBloodPressure" name="highBloodPressure" checked={checkData('highBloodPressure')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="highBloodPressure" className="font-medium text-gray-700">High Blood Pressure</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="highCholesterol" name="highCholesterol" checked={checkData('highCholesterol')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="highCholesterol" className="font-medium text-gray-700">High Cholesterol</label>
                                    </div>
                                  </div>
                                  <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                      <Checkbox id="tuberculosis" name="tuberculosis" checked={checkData('tuberculosis')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                      <label htmlFor="tuberculosis" className="font-medium text-gray-700">Tuberculosis</label>
                                    </div>
                                  </div>
                                  </Field.Group>
                                </div>
                                <div className="headerInfo">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Illness/Affected Member</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500"> Please record any illness of family member . You can select more than one</p>
                                  </div>
                                </div>
                                <Field.Group name="familyMemberIllness">
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" :"grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="allergy" className="font-medium text-gray-700">Allergies (Food/Medication)</label>
                                            </div>
                                            {!isMobile ? 
                                            <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="allergy" name="allergy" options={options} className="basic-multi-select" classNamePrefix="select" />
                                            </div>: null}
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                        <Select isMulti id="allergy" name="allergy" options={options} className="basic-multi-select" classNamePrefix="select" />
                                        </div> : null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="anemia" className="font-medium text-gray-700">Blood Disorders / Anemia</label>
                                            </div>
                                            {!isMobile ? 
                                            <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="anemia" name="anemia" options={options} className="basic-multi-select" classNamePrefix="select" />
                                            </div>: null }
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                        <Select isMulti id="anemia" name="anemia" options={options} className="basic-multi-select" classNamePrefix="select" />
                                        </div>: null }
                                    </div>
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" : "grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="diabetes" className="font-medium text-gray-700">Diabetes</label>
                                            </div>
                                            {!isMobile ?  
                                            <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="diabetes" name="diabetes" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile ?  <div className={"select"}>
                                        <Select isMulti id="diabetes" name="diabetes" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="cholesterol" className="font-medium text-gray-700">Pressure / Cholesterol</label>
                                            </div>
                                            {!isMobile? 
                                            <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="cholesterol" name="cholesterol" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null }
                                        </div>
                                        {isMobile? <div className={"select"}>
                                        <Select isMulti id="cholesterol" name="cholesterol" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null }
                                    </div>
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" : "grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="heartdisease" className="font-medium text-gray-700">Heart Disease</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="heartdisease" name="heartdisease" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                            <Select isMulti id="heartdisease" name="heartdisease" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="stroke" className="font-medium text-gray-700">Stroke & Complications</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="stroke" name="stroke" options={options} className="basic-multi-select" classNamePrefix="select" />
                                            </div> : null}
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                        <Select isMulti name="stroke" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                    </div>
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" : "grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="kidney" className="font-medium text-gray-700">Kidney / Urinary Tract</label>
                                            </div>
                                            {!isMobile ?<div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="kidney" name="kidney" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile? <div className={"search"}>
                                            <Select isMulti id="kidney" name="kidney" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="mental" className="font-medium text-gray-700">Mental Disorder</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="mental" name="mental" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                            <Select isMulti id="mental" name="mental" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                    </div>
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" : "grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="liver" className="font-medium text-gray-700">Liver / Gall bladder Diseases</label>
                                            </div>
                                            {!isMobile ?  <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="liver" name="liver" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> :null}
                                        </div>
                                        {isMobile ?  <div className={"select"}>
                                            <Select isMulti id="liver" name="liver" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> :null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="tuberculosis" className="font-medium text-gray-700">Tuberculosis</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="tuberculosis" name="tuberculosis" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile ? <div className={"select"}>
                                            <Select isMulti id="tuberculosis" name="tuberculosis" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                    </div>
                                    <div className={isMobile ? "grid grid-cols-1 gap-6 mb-8" : "grid grid-cols-2 gap-6 mb-8"}>
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="cancer" className="font-medium text-gray-700">Cancer or Tumors</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="cancer" name="cancer" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null}
                                        </div>
                                        {isMobile ?  <div className={"search"}>
                                            <Select isMulti id="cancer" name="cancer" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null}
                                        <div className="flex items-start justify-between">
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="others" className="font-medium text-gray-700">Others</label>
                                            </div>
                                            {!isMobile ? <div className={isMobile ? "mobile_multi" : "multi"}>
                                            <Select isMulti id="others" name="others" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                            </div> : null }
                                        </div>
                                        {isMobile ?  <div className={"search"}>
                                            <Select isMulti id="others" name="others" options={options} className="basic-multi-select" classNamePrefix="select"/>
                                        </div> : null }
                                    </div>
                                </Field.Group>
                                <div className="headerInfo">
                                  <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Age of Death</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">(if any)</p>
                                  </div>
                                </div>
                                <Field.Group name="ageOfDeath">
                                    <div className="ml-3 grid grid-cols-12 gap-6">
                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="father" className="block text-sm font-medium text-gray-700">Father</label>
                                            <Input type="text" name="father" id="father" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="mother" className="block text-sm font-medium text-gray-700">Mother</label>
                                            <Input type="text" name="mother" id="mother" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="brother" className="block text-sm font-medium text-gray-700">Brother</label>
                                            <Input type="text" name="brother" id="brother" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="sister" className="block text-sm font-medium text-gray-700">Sister</label>
                                            <Input type="text" name="sister" id="sister" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="spouse" className="block text-sm font-medium text-gray-700">Spouse</label>
                                            <Input type="text" name="spouse" id="spouse" className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="children" className="block text-sm font-medium text-gray-700">Children</label>
                                            <Input type="text" name="children" id="children"className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                        </div>
                                    </div>
                                </Field.Group>
                                <div className="headerInfo">
                                  <div className="px-4 py-5 sm:px-6">
                                    <Field.Group name="STD">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5 mb-2">
                                                <Checkbox id="contacted" name="contacted" checked={checkData2('STD','contacted')}  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" onChange={({nextValue}) => {setDisease(nextValue)}}/>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="thyroid" className="font-bold text-gray-700">Ever been infected by sexually transmitted diseases?</label>
                                                </div>      
                                            </div>
                                        </div>
                                        <div>
                                        {isDiseaseSelected ?
                                            <div className="ml-3 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                            <Input type="text" name="kind" id="kind" placeholder="What kind?" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                            <Input type="text" name="treatment" placeholder="Treatment Received?" id="treatment" className="p-2 mt-1 mr-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border border-solid border-gray-300"/>
                                            </div> : null}
                                        </div>
                                    </Field.Group>
                                    <Field.Group name="bloodtransfusion">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5 mb-2">
                                                <Checkbox id="receivedblood" name="receivedblood" checked={checkData2('bloodtransfusion','receivedblood')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" onChange={({nextValue}) => {setBlood(nextValue)}}/>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="receivedblood" className="font-bold text-gray-700">Received blood transfusion? If yes, which date?</label>
                                                </div>      
                                            </div>
                                        </div>   
                                        {!isMobile ? isBloodSelected ?
                                            <div className="dates2 ml-3 flex col-span-3 sm:col-span-3 lg:col-span-3 mb-2">
                                            <Datepicker id="transfusiondate" name="date" className="mt-1" />
                                            </div> : null : null}
                                        <div className='mobileDate'>
                                        {isMobile ? isBloodSelected ?
                                            <div className="dates2 ml-3 flex col-span-3 sm:col-span-3 lg:col-span-3 mb-2">
                                            <Datepicker id="transfusiondate" name="date" className="mt-1" />
                                            </div> : null : null}
                                        </div>
                                    </Field.Group>
                                    <Field.Group name="organtransplant">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5 mb-3">
                                                <Checkbox id="receivedorgan" name="receivedorgan" checked={checkData2('organtransplant','receivedorgan')} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" onChange={({nextValue}) => {setOrgan(nextValue)}}/>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="receivedorgan" className="font-bold text-gray-700">Received organ transplant? If yes, which date?</label>
                                                </div>   
                                            </div>
                                        </div>
                                        {!isMobile ? isOrganSelected ?
                                            <div className="dates2 ml-3 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                <Datepicker id="transplantdate" name="date" />
                                            </div> : null : null
                                        }
                                        <div className='mobileDate'>
                                            {isMobile ? isOrganSelected ?
                                                <div className="dates2 ml-3 flex col-span-1 sm:col-span-3 lg:col-span-2">
                                                    <Datepicker id="transplantdate" name="date" />
                                                </div> : null : null}
                                        </div>
                                    </Field.Group>
                                  </div>
                                </div>
                              </div>
                              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setPage(1)}
                                    className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >Previous</button>
                                <button
                                  type="submit"
                                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >Next</button>
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

export default Form2