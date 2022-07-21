import React, { useState, useRef, useEffect } from 'react'


import './App.css';
import { IoChevronDownOutline } from "react-icons/io5";
import Business_pic from "./assets/images/sales (2).jpg"
import Sales_pic from "./assets/images/sales representatives.jpg"
import Administrator_pic from "./assets/images/adminstrator.jpg"
import Agriculture_pic from "./assets/images/agriculture scientist.jpg"
import Botanist_pic from "./assets/images/Botanist.jpg"
import Customer_pic from "./assets/images/Customer service.jpg"
import Doctor_pic from "./assets/images/Doctors.jpg"
import Lawyer1_pic from "./assets/images/Lawyers 1.1.jpg"
import lawyer2_pic from "./assets/images/Lawyers.jpg"
import Manufacture_pic from "./assets/images/manufacturers.jpg"
import Pharamcist_pic from "./assets/images/Pharmacist.jpg"

import Sales2_pic from "./assets/images/sales (2).jpg"
import Perscriptive_pic from "./assets/images/SALES -Prescriptive Care.jpg"
import Vendor_pic from "./assets/images/vendor 1.jpg"
import Whole_pic from "./assets/images/whole seller.jpg"
import leafLogo from "./assets/images/leaf_logo_v2.png"
import usFlaglogo from "./assets/images/usflag_logo_v2.png"
import bigPic from "./assets/images/creche.jpg"

import { MdCloudUpload } from "react-icons/md";
import { surnames } from './utils/enum';

import Validator, { ValidationTypes as V_Type, } from './components/shared/formValidator';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { Country, State, City } from 'country-state-city';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  const myRef = useRef(null)
  const [recruitModel, setrecruitModel] = useState({
    surname: localStorage.getItem('surname') ? localStorage.getItem('surname') : "Mr.",
    fullname: localStorage.getItem('fullname') ? localStorage.getItem('fullname') : "",
    firstFname: localStorage.getItem('firstFname') ? localStorage.getItem('firstFname') : "",
    secondFname: localStorage.getItem('secondFname') ? localStorage.getItem('secondFname') : "",
    thirdFname: localStorage.getItem('thirdFname') ? localStorage.getItem('thirdFname') : "",
    email: localStorage.getItem('email') ? localStorage.getItem('email') : "",
    reEmail: localStorage.getItem('reEmail') ? localStorage.getItem('reEmail') : "",
    city: localStorage.getItem('city') ? localStorage.getItem('city') : "Ashkāsham",
    state: localStorage.getItem('state') ? localStorage.getItem('state') : "BDS",
    industry: localStorage.getItem('industry') ? localStorage.getItem('industry') : "",
    country: localStorage.getItem('country') ? localStorage.getItem('country') : "AF",
    postcode: localStorage.getItem('postcode') ? localStorage.getItem('postcode') : "",
    position: localStorage.getItem('position') ? localStorage.getItem('position') : "",
    age: localStorage.getItem('age') ? localStorage.getItem('age') : "",
  })
  const [validationModel, setvalidationModel] = useState({
    fullnameError: null,
    firstFnameError: null,
    emailError: null,
    reEmailError: null,
    mobileError: null,
    cityError: null,
    countryError: null,
    ageError: null,
  });

  const [mobile, setmobile] = useState("")
  const [dob, setdob] = useState(new Date())
  const [all_Countries] = useState(() => Country.getAllCountries())
  const [all_States, setall_States] = useState(() => State.getStatesOfCountry("AF"))
  const [all_Cities, setall_Cities] = useState(() => City.getCitiesOfState("AF", "BDS"))
  const [dateob, setdateob] = useState(new Date('2014-08-18T21:11:54'))

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const handleChange = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      [e.target.name]: e.target.value
    }))
  }

  const handleMobileChange = (value) => {
    localStorage.setItem("mobile", value);
    setmobile(value)
  }
  const handleDobChange = (value) => {
    console.log("runnn", value);
    localStorage.setItem("dob", value);
    setdob(value)
  }

  const setValidation = () => {
    let myvalidation_Obj = {
      ...validationModel,
      fullnameError: Validator(recruitModel.fullname, [V_Type.required], ['Please fill out this required field']),
      firstFnameError: Validator(recruitModel.firstFname, [V_Type.required], ['Please fill out this required field']),
      emailError: Validator(recruitModel.email, [V_Type.required], ['Please fill out this required field']),
      reEmailError: Validator(recruitModel.reEmail, [V_Type.required], ['Please fill out this required field']),
      mobileError: Validator(mobile, [V_Type.required], ['Please fill out this required field']),
      ageError: Validator(recruitModel.age, [V_Type.required], ['Must add your age']),

    };
    setvalidationModel(myvalidation_Obj);
    return Validator(myvalidation_Obj, V_Type.NullCheck);
  };
  const handleSubmit = () => {
    let my_validation = setValidation();
    if (my_validation) {
      console.log('Api will not run', my_validation);
    } else {
      console.log('Api will run', my_validation);
    }
  }
  // ========================= Use Effect ==========================
  useEffect(() => {
    console.log("useEffect 1 run");
    const updatedCountryCode = recruitModel.country
    const updatedStates = State.getStatesOfCountry(updatedCountryCode)
    setall_States(updatedStates)
  }, [recruitModel.country,])
  useEffect(() => {
    console.log("useEffect 2 run");
    const updatedstateCode = recruitModel.state
    const updatedCities = City.getCitiesOfState(recruitModel.country, updatedstateCode)
    setall_Cities(updatedCities)
  }, [recruitModel.state, recruitModel.country])
  return (
    <>
      <section ref={myRef} className='bscontainer-fluid'>
        <section className='row'>
          <div className='col-12 bg-hero-pattern bg-center bg-no-repeat    bg-cover bg-blend-lighten ' style={{ backgroundColor: "#ffffffad" }}>
            <div className='lg:my-10 my-5 lg:px-28 md:px-5'>
              <div className='row  justify-center items-center'>
                <div className='col-4'>
                  <img src={leafLogo} width="55px" alt="leafLogo" />
                </div>
                <div className='col-4 text-center lg:text-6xl md:text-6xl text-5xl font-medium flex items-center justify-center'>
                  <p>RECRUIT</p>
                </div>
                <div className='col-4 '>
                  <img src={usFlaglogo} width="55px" className=' ml-auto' alt="leafLogo" />
                </div>
              </div>
            </div>

            <div className='row justify-center gap-2 mb-4 g-0 '>
              <div className='col-lg-3 col-md-10'>

                <div className=' text-gray-500 text-base font-medium bg-light-gray'>
                  <select name='surname' value={recruitModel.surname} onChange={handleChange} className='w-1/5 h-full py-2 border-gray-400 border-2 border-r-0 outline-blue-400 bg-white'>
                    {surnames.map((sur, i) => <option key={i}>{sur}</option>)}
                  </select>
                  <div className='relative inline-block w-4/5 '>
                    <input name='fullname' value={recruitModel.fullname} onChange={handleChange} type="text" placeholder='Name ' className={`w-full h-full p-2 bg-white  outline-blue-400 border-2 ${validationModel.fullnameError ? "border-red-400" : "border-gray-400"} `} />
                    <span hidden={recruitModel.fullname.length} className='absolute  text-red-400 font-medium text-lg top-1/4 left-16'>*</span>
                  </div>

                </div>
                {validationModel.fullnameError}

              </div>
              <div className='col-lg-3 col-md-10'>
                <div className='relative'>
                  <input name='firstFname' value={recruitModel.firstFname} onChange={handleChange} type="text" placeholder='1st Family Name' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.firstFnameError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.firstFname.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-36'>*</span>
                </div>

                {validationModel.firstFnameError}
              </div>
            </div>
            <div className='row justify-center gap-2 mb-4 g-0 '>
              <div className='col-lg-3 col-md-10'>
                <div className='relative'>
                  <input name='secondFname' value={recruitModel.secondFname} onChange={handleChange} type="email" placeholder='2nd Family Name' className={`w-full outline-blue-400 border-2 p-2 border-gray-400`} />
                  <span hidden={recruitModel.secondFname.length} className='absolute text-gray-400 font-medium text-sm top-1/4 left-40'>(optional)</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-10 relative '>
                <div className='relative'>
                  <input name='thirdFname' value={recruitModel.thirdFname} onChange={handleChange} type="email" placeholder='3rd Family Name' className={`w-full outline-blue-400 border-2 p-2 border-gray-400`} />
                  <span hidden={recruitModel.thirdFname.length} className='absolute text-gray-400 font-medium text-sm top-1/4 left-36'>(optional)</span>
                </div>
              </div>
            </div>

            <div className='row justify-center gap-2 mb-4 g-0 '>
              <div className='col-lg-3 col-md-10'>
                <div className='relative'>
                  <input name='email' value={recruitModel.email} onChange={handleChange} type="email" placeholder='Email Address' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.emailError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.email.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-32'>*</span>
                </div>
                {validationModel.emailError}
              </div>
              <div className='col-lg-3 col-md-10 relative '>
                <div className='relative'>
                  <input name='reEmail' value={recruitModel.reEmail} onChange={handleChange} type="email" placeholder='Re Enter Email Address' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.reEmailError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.reEmail.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-48'>*</span>
                </div>
                {validationModel.reEmailError}
              </div>
            </div>
            <div className='row justify-center gap-2 mb-4 g-0  '>
              <div className='col-lg-3 col-md-10 border-gray-400   bg-white border-2   text-gray-500 text-base font-medium bg-light-gray '>
                <div className='h-full'>
                  <PhoneInput country={'es'} countryCodeEditable={false} enableSearch value={mobile} onChange={handleMobileChange} />
                </div>
              </div>
              <div className='col-lg-3 col-md-10'>
                <input name='industry' value={recruitModel.industry} onChange={handleChange} type="text" placeholder='Current Industry' className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400" />
              </div>
            </div>

            <div className='row justify-center gap-2 mb-4 g-0  '>
              <div className='col-lg-3 col-md-10  '>
                <select name="country" className='w-full outline-blue-700 border-2 px-2 py-2 border-gray-400' value={recruitModel.country} onChange={handleChange}>
                  {all_Countries.map((all_country) => <option value={all_country.isoCode} key={all_country.isoCode}>{all_country.name}</option>)}
                </select>
              </div>
              <div className='col-lg-3 col-md-10  '>
                <div className='row g-1'>
                  <div className='col-6'>
                    <select name="state" value={recruitModel.state} onChange={handleChange} className='w-full outline-blue-400 border-2 px-2 py-2 border-gray-400'>
                      {all_States.map((state) => <option value={state.isoCode} key={state.name}>{state.name}</option>)}
                    </select>
                  </div>
                  <div className='col-6'>
                    <select name="city" value={recruitModel.city} onChange={handleChange} className='w-full outline-blue-400 border-2 px-2 py-2 border-gray-400'>
                      {all_Cities.map((city) => <option value={city.name} key={city.name}>{city.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

            </div>

            <div className='row justify-center gap-2 mb-4 g-0  '>
              <div className='col-lg-3 col-md-10 '>
                <input name='position' value={recruitModel.position} onChange={handleChange} type="text" placeholder='Position or field interest?' className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400 " />
              </div>
              <div className='col-lg-3 col-md-10  '>
                <div className='row g-1'>
                  <div className='col-6'>
                    <div className='relative'>
                      <input name='age' value={recruitModel.age} onChange={handleChange} type="text" placeholder='Age ' className={`w-full outline-blue-400 border-2 px-2 py-2 ${validationModel.ageError ? "border-red-400" : "border-gray-400"}`} />
                      <span hidden={recruitModel.age.length} className='absolute text-red-400 font-medium text-lg top-2 left-11'>*</span>
                    </div>
                    {validationModel.ageError}
                  </div>
                  <div className='col-6'>

                    <DatePicker selected={dob} onChange={handleDobChange} className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400" />
                    {/* <LocalizationProvider dateAdapter={AdapterMoment}>
                      <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={dateob}
                        onChange={(dd) => setdateob(dd)}
                        className="bg-white"
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider> */}

                  </div>
                </div>
              </div>
            </div>

            <div className='row justify-center gap-2 mb-8 g-0 '>
              <div className='col-lg-6 col-md-10'>
                <p className='text-lg text-gray-500 mb-4 '><sup className='text-red-600 font-bold'>*</sup>Mandatory</p>
                <button onClick={handleSubmit} className='text-white bg-gray-900 w-full px-2 py-1 text-3xl font-medium tracking-wide'>SUBMIT</button>
              </div>

            </div>
          </div>

        </section>


        <section className='row mb-8'>
          <div className='col-12 bg-light-red'  >
            <div className='row justify-center text-white lg:text-lg text-xs font-semibold gap-0'>
              <div className='col-lg-2 col-4 cursor-pointer py-1 text-center' data-bs-toggle="collapse" data-bs-target="#aboutRecruit" aria-expanded="false" aria-controls="aboutRecruit">
                ABOUT RECRUIT <IoChevronDownOutline className='inline lg:text-4xl text-sm' />
              </div>
              <div className='col-lg-2 col-4 cursor-pointer border-r border-l  py-1 text-center' data-bs-toggle="collapse" data-bs-target="#HowToApply" aria-expanded="false" aria-controls="HowToApply">
                HOW TO APPLY <IoChevronDownOutline className='inline  lg:text-4xl text-sm' />
              </div>
              <div className='col-lg-2 col-4 cursor-pointer py-1 text-center' data-bs-toggle="collapse" data-bs-target="#whatsNext" aria-expanded="false" aria-controls="whatsNext">
                WHAT'S NEXT <IoChevronDownOutline className='inline  lg:text-4xl text-sm' />
              </div>
            </div>
          </div>
        </section>







      </section>
      <div className='bscontainer'>
        <section>
          <div>
            <div className="collapse mb-8" id="whatsNext">
              <div className="block p-6 rounded-lg shadow-lg bg-white">
                Whats Next content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
            <div className="collapse mb-8" id="aboutRecruit">
              <div className="block p-6 rounded-lg shadow-lg bg-white">
                About Recurit content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
            <div className="collapse mb-8" id="HowToApply">
              <div className="block p-6 rounded-lg shadow-lg bg-white">
                How To Apply content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-4 border-gray-300 border-dashed border-b-red-500  bg-gray-100">
              <div className="space-y-1 text-center">
                <MdCloudUpload size={99} className='inline  text-gray-500' />
                <div>
                  <h1 className='text-5xl font-bold mb-2'>Drag & Drop</h1>
                  <h4 className='text-gray-700 text-2xl font-medium mb-2'>Your file type</h4>
                  <h5 className='text-gray-500 text-xl font-normal mb-2'>or select an option below</h5>
                  <label className='rounded-sm bg-light-red inline-block text-white mb-1 cursor-pointer text-xl tracking-wide font-medium px-8 py-1'>
                    BROWSE MY FILES
                    <input type="file" hidden />
                  </label>
                  <p className='text-xs text-gray-300 font-medium mb-8'>Maximum Upload File Size 35MB</p>
                  <p className='font-normal text-sm'>ALL Filles uploaded here will be scanned to ensure content is benign, contaminated files and threats will be rejected</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>BUSINESS DEVELOPMENT</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4 '>
              <img src={Business_pic} alt="Business_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Sales_pic} className="w-full" alt="Sales_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>SALES REPRESENTATIVES</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>SALES -PRESCRIPTIVE CARE</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Perscriptive_pic} alt="Perscriptive_pic" />
            </div>
          </div>
        </section>
        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Doctor_pic} className="h-full object-none" alt="Doctor_pic" />
            </div>
            <div className='col-lg-6 col-md-12  lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>DOCTORS</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>Lawyers</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={lawyer2_pic} alt="lawyer2_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Pharamcist_pic} alt="Pharamcist_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>CHEMIST / PHARMACIST</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>BOTANY SCIENTIST</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Botanist_pic} alt="Botanist_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Agriculture_pic} alt="Agriculture_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>AGRICULTURE SCIENTIST</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>ADMINISTRATOR</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Administrator_pic} alt="Administrator_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Vendor_pic} alt="Vendor_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>VENDOR</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>MANUFACTURER</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Manufacture_pic} alt="Manufacture_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Whole_pic} alt="Whole_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>WHOLESALER</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>CUSTOMER SUPPORT</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Customer_pic} className="h-full  " alt="Customer_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-last order-first  lg:mb-0 mb-4'>
              <img src={Sales2_pic} alt="Business_pic" />
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <h1 className='text-4xl font-medium mb-4'>CATEGORY NAME HERE</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4'>CATEGORY NAME HERE</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button onClick={executeScroll} className='  text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-800 transition-all'>APPLY</button>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Lawyer1_pic} alt="Lawyer1_pic" />
            </div>
          </div>
        </section>

        <section className='mb-4'>
          <div className="accordion" id="accordionExample">
            <div className=" bg-white   border rounded-none border-gray-900 mb-3  ">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button className=" text-black font-medium px-2 py-1  text-sm   accordion-button collapsed relative flex items-center w-full    text-left bg-white     transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  HOW WE SUPPORT WORKING MOTHERS AND THEIR FAMILIES
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default,
                </div>
              </div>
            </div>

            <div className=" bg-white   border rounded-none border-gray-900  ">
              <h2 className="accordion-header mb-0" id="headthree">
                <button className=" text-black font-medium px-2 py-1  text-sm   accordion-button collapsed relative flex items-center w-full    text-left bg-white     transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  HOW WE SUPPORT WORKING MOTHERS AND THEIR FAMILIES
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headthree" data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default,
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-16'>
          <img src={bigPic} className="w-full" alt='bigPic' />
        </section>
      </div>
      <footer className='bscontainer-fluid bg-light-red text-white text-xs text-center font-normal py-3'>
        COPYRIGHTS© 2022 HPORX LTD, IRELAND. ALL RIGHTS RESERVED. | PRIVACY POLICY | +44 1223 298541 | TERMS OF USE | DIGITAL AGENCY SERVICES | SITE DIRECTORY
      </footer>


    </>


  );
}

export default App;
