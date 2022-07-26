import React, { useState, useRef, useEffect, forwardRef } from 'react'

import './App.css';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
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
import leafLogo2 from "./assets/images/Logo-leaf-Top-red-V2.png"
import usFlaglogo from "./assets/images/usflag_logo_v2.png"
import bigPic from "./assets/images/creche.jpg"
import cloudImage from "./assets/images/cloud.png"

import { MdCloudUpload } from "react-icons/md";
import { surnames } from './utils/enum';

import Validator, { ValidationTypes as V_Type, } from './components/shared/formValidator';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { AiFillCalendar } from 'react-icons/ai'
import { Country, State, City } from 'country-state-city';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { FiFacebook } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import PopUp from './components/popup/popup';
import FollowUs from './components/socialIcons/Icons';
import ReactCountryFlag from 'react-country-flag';
// import Calendar from "react-"
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import TextField from '@mui/material/TextField';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function App() {
  const myRef = useRef(null)
  const dropzoneRef = useRef(null)
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
    // postcode: localStorage.getItem('postcode') ? localStorage.getItem('postcode') : "",
    position: localStorage.getItem('position') ? localStorage.getItem('position') : "",
    mobile: localStorage.getItem('mobile') ? localStorage.getItem('mobile') : "",
    age: localStorage.getItem('age') ? localStorage.getItem('age') : "",
  })

  const language = ['English' , 'Spanish']
  const [lang , setLang] = useState("English")
  
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
  const [dateob, setdateob] = useState(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const [uploadFiles, setuploadFiles] = useState([])
  const [selectedDay, setSelectedDay] = useState(null);
  const [file, setFile] = useState('');
  const [isShow, setIsShow] = useState(false);

  const dropItem = ["ABOUT RECRUIT", "HOW TO APPLY", " WHAT'S NEXT"]
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const handleChange = (e) => {
    localStorage.setItem(e.target.name, e.target.value);
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      [e.target.name]: e.target.value
    }))
  }

  console.log("recruitModel", recruitModel)


  const handleMobileChange = (value) => {
    localStorage.setItem("mobile", value);
    setmobile(value)
  }
  const handleDobChange = (value) => {
    console.log("runnn", value);
    localStorage.setItem("dob", value);
    setdateob(value)
  }



  const handleDropdown = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    }
    else {
      setActiveIndex(index)

    }
  }

  const setValidation = () => {
    debugger
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

  const handlePlaces = (isoCode, name) => {
    localStorage.setItem(name, isoCode);
    setrecruitModel((prevmodel) => ({
      ...prevmodel,
      [name]: isoCode
    }))
  }


  const handleSubmit = () => {
    let my_validation = setValidation();
    if (my_validation) {
      console.log('Api will not run', my_validation);
    }
    else if (file === '') {
      setIsShow(true)
    }
    else {
      alert("Data Send Succesfully ")


    }
  }

  let findEmptyFile = Object.values(recruitModel).filter((f) => f !== '')

  let checkData = findEmptyFile.length === Object.keys(recruitModel).length


  // ************************* Date Picker function *********************

  const renderCustomInput = ({ ref }) => (
    < div className='relative cursor-pointer'>
      <input
        readOnly
        ref={ref} // necessary
        placeholder="yyy-mm-dd"
        value={dateob ? `${dateob.year}/${dateob.month}/${dateob.day}` : ''}
        className={`date_picker w-full outline-blue-400 cursor-pointer z-30  border-2 px-2 py-2 ${validationModel.dateob ? "border-red-400" : "border-gray-400"}`}
      // a styling class
      />
      <div className=" absolute top-3 cursor-pointer right-5">
        <AiFillCalendar />
      </div>
    </div >
  )

  // ========================= Use Effect ==========================

  useEffect(() => {
    const dropZone = document.querySelector('#dropzone')
    dropzoneRef.current.addEventListener('dragover', (e) => {
      e.preventDefault()
      dropzoneRef.current.classList.add("border-l-red-500", "border-r-red-500", "border-t-red-500")
    })
    dropzoneRef.current.addEventListener('drop', (e) => {
      e.preventDefault()
      console.log(e.dataTransfer.files);
      setuploadFiles((prevfiles) => ([
        ...prevfiles,
        ...e.dataTransfer.files
      ]))
      dropzoneRef.current.classList.remove("border-l-red-500", "border-r-red-500", "border-t-red-500")
    })
    return () => {
      dropzoneRef.current.removeEventListener('dragover', () => { })
      dropzoneRef.current.removeEventListener('drop', () => { })
    }
  }, [])
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
            <div className='lg:my-10 my-5 lg:px-28 md:px-5 px-6'>
              <div className='row  justify-center items-center'>
                <div className='col-4'>
                  <figure>
                    <img src={leafLogo2} className="md:w-16 w-11 " alt="leafLogo" />
                    <figcaption className='text-left md:-ml-6 -ml-3 mt-1 text-xs text-red-600 font-semibold '>
                      {/* CULTIVATED WELLNESS */}
                      Cultivated Wellness
                    </figcaption>
                  </figure>
                </div>
                <div className='col-4 text-center lg:text-6xl md:text-6xl text-3xl font-medium flex items-center justify-center'>
                  <p>RECRUIT</p>
                </div>
                <div className='col-4 '>
                  <figure className='flex flex-col justify-center '>
                    <img src={usFlaglogo} className=" ml-auto  md:w-16 w-11 " alt="leafLogo" />
                    <figcaption className='text-center md:mr-1  mr-1  mt-1 text-xs text-red-600 font-semibold  '>
                      {/* Language */}
                      <div className="dropdown relative w-1/5 float-right">
                        <button className=" w-full h-full dropdown-toggle p-2 ml-4 transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="surdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          {language.find((s_name) => s_name === lang)}
                          
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                          </svg>
                        </button>
                        <ul className=" dropdown-menu absolute w-100   overflow-y-auto  bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="surdropdown">
                          {language.map((sur, i) => {
                            return (
                              <li key={i} >
                                <span onClick={() => setLang(sur)} className=" cursor-pointer dropdown-item text-sm py-2 px-4  font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{sur}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className='row justify-center gap-2 mb-4 g-0 '>
              <div className='col-lg-3 col-md-10'>

                <div className=' text-gray-500 text-base font-medium bg-light-gray flex'>
                  {/* <select name='surname' value={recruitModel.surname} onChange={handleChange} className='w-1/5 h-full py-2 border-gray-400 border-2 border-r-0 outline-blue-400 bg-white'>
    {surnames.map((sur, i) => <option key={i}>{sur}</option>)}
  </select> */}
                  <div className="dropdown relative w-1/5">
                    <button className=" w-full bg-white border-2 border-r-0 h-full  border-gray-400 text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="surdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      {surnames.find((s_name) => s_name === recruitModel.surname)}
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                      </svg>
                    </button>
                    <ul className=" dropdown-menu absolute w-full  max-h-52 overflow-y-auto overflow-x-hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="surdropdown">
                      {surnames.map((sur, i) => {
                        return (
                          <li key={i} >
                            <span onClick={() => handlePlaces(sur, "surname")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{sur}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
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
            <div className='row justify-center  gap-2 mb-4 g-0 w-full flex-col-reverse lg:flex-row md:items-center  md:flex-col-reverse sm:flex-col-reverse '>
              <div className='col-lg-3 col-md-10 email_hide'>
                <div className='relative'>
                  <input name='email' value={recruitModel.email} onChange={handleChange} type="email" placeholder='Email Address' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.emailError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.email.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-32'>*</span>
                </div>
                {validationModel.emailError}
              </div>
              <div className='col-lg-3 col-md-10 relative thirdname_show'>
                <div className='relative'>
                  <input name='thirdFname' value={recruitModel.thirdFname} onChange={handleChange} type="email" placeholder='3rd Family Name ' className={`w-full outline-blue-400 border-2 p-2 border-gray-400`} />
                  <span hidden={recruitModel.thirdFname.length} className='absolute text-red-400 font-medium text-xs top-1/3 left-40'>(optional)</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-10 '>
                <div className='relative'>
                  <input name='secondFname' value={recruitModel.secondFname} onChange={handleChange} type="text" placeholder='2nd Family Name ' className={`w-full outline-blue-400 border-2 p-2 border-gray-400`} />
                  <span hidden={recruitModel.secondFname.length} className='absolute text-red-400 font-medium  text-xs top-1/3 left-40'>(optional)</span>
                </div>
              </div>


            </div>

            <div className='row justify-center gap-2 mb-4 g-0 flex-col-reverse lg:flex-row md:items-center  md:flex-col-reverse sm:flex-col-reverse   '>

              <div className='col-lg-3 col-md-10 relative '>
                <div className='relative'>
                  <input name='reEmail' value={recruitModel.reEmail} onChange={handleChange} type="email" placeholder='Re Enter Email Address' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.reEmailError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.reEmail.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-48'>*</span>
                </div>
                {validationModel.reEmailError}
              </div>
              <div className='col-lg-3 col-md-10 relative thirdname_hide'>
                <div className='relative'>
                  <input name='thirdFname' value={recruitModel.thirdFname} onChange={handleChange} type="email" placeholder='3rd Family Name ' className={`w-full outline-blue-400 border-2 p-2 border-gray-400`} />
                  <span hidden={recruitModel.thirdFname.length} className='absolute text-red-400 font-medium text-xs top-1/3 left-40'>(optional)</span>
                </div>
              </div>
              <div className='col-lg-3 col-md-10 email_show'>
                <div className='relative'>
                  <input name='email' value={recruitModel.email} onChange={handleChange} type="email" placeholder='Email Address' className={`w-full outline-blue-400 border-2 p-2 ${validationModel.emailError ? "border-red-400" : "border-gray-400"}`} />
                  <span hidden={recruitModel.email.length} className='absolute text-red-400 font-medium text-lg top-1/4 left-32'>*</span>
                </div>
                {validationModel.emailError}
              </div>

            </div>
            <div className='row justify-center gap-2 mb-4 g-0  '>
              <div className={`col-lg-3 col-md-10`} >
                {/* <div className='h-full relative'> */}

                <PhoneInput country={'es'} dropdownClass={"custom-dropdown"} enableSearch disableSearchIcon countryCodeEditable={false} value={mobile} onChange={handleMobileChange} />
                {validationModel.mobileError}
                {/* </div> */}

              </div>
              <div className='col-lg-3 col-md-10'>
                <select name="country" value={recruitModel.country} onChange={handleChange} className='w-full h-10 outline-blue-400 border-2 px-2 py-2 border-gray-400' >
                  {all_Countries.map((all_country) => <option value={all_country.isoCode} key={all_country.isoCode}>{all_country.name.substring(0, 33)}</option>)}
                </select>
              </div>
            </div>

            <div className='row justify-center gap-2 mb-4 g-0   '>
              <div className='col-lg-3 col-md-10  '>
                <input name='industry' value={recruitModel.industry} onChange={handleChange} type="text" placeholder='Current Industry' className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400" />

              </div>
              <div className='col-lg-3 col-md-10 city_group_hide '>
                <div className='row g-1'>
                  <div className='col-6'>
                    <div className="dropdown relative">
                      <button className=" w-full bg-white border-2 border-gray-400 text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="statedropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {all_States.find((state) => state.isoCode === recruitModel.state)?.name}
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      </button>
                      <ul className=" dropdown-menu   absolute w-full  max-h-52 overflow-y-scroll overflow-x-hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="statedropdown">
                        {all_States.map((state) => {
                          return (
                            <li key={state.isoCode}>
                              <span onClick={() => handlePlaces(state.isoCode, "state")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{state.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="dropdown relative">
                      <button className=" w-full bg-white border-2 border-gray-400 text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="citydropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {all_Cities.find((city) => city.name === recruitModel.city)?.name}
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      </button>
                      <ul className=" dropdown-menu   absolute w-full  max-h-52 overflow-y-scroll overflow-x-hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="citydropdown">
                        {all_Cities.map((city) => {
                          return (
                            <li key={city.name}>
                              <span onClick={() => handlePlaces(city.name, "city")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{city.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-10 postion_show '>
                <input name='position' value={recruitModel.position} onChange={handleChange} type="text" placeholder='Position of Interest?' className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400 " />
              </div>

            </div>

            <div className='row justify-center gap-2 mb-4 g-0  '>
              <div className='col-lg-3 col-md-10 position_hide'>
                <input name='position' value={recruitModel.position} onChange={handleChange} type="text" placeholder='Position of Interest?' className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400 " />
              </div>
              <div className='col-lg-3 col-md-10 city_group_show '>
                <div className='row g-1'>
                  <div className='col-6'>
                    <div className="dropdown relative">
                      <button className=" w-full bg-white border-2 border-gray-400 text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="statedropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {all_States.find((state) => state.isoCode === recruitModel.state)?.name}
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      </button>
                      <ul className=" dropdown-menu   absolute w-full  max-h-52 overflow-y-scroll overflow-x-hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="statedropdown">
                        {all_States.map((state) => {
                          return (
                            <li key={state.isoCode}>
                              <span onClick={() => handlePlaces(state.isoCode, "state")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{state.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className="dropdown relative">
                      <button className=" w-full bg-white border-2 border-gray-400 text-gray-400 dropdown-toggle p-2   focus:outline-blue-400 focus:ring-0 active:border-blue-400   transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="citydropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        {all_Cities.find((city) => city.name === recruitModel.city)?.name}
                        {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg> */}
                      </button>
                      <ul className=" dropdown-menu   absolute w-full  max-h-52 overflow-y-scroll overflow-x-hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden m-0 bg-clip-padding border-none " aria-labelledby="citydropdown">
                        {all_Cities.map((city) => {
                          return (
                            <li key={city.name}>
                              <span onClick={() => handlePlaces(city.name, "city")} className=" cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "  >{city.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
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

                    <DatePicker
                      value={dateob}
                      onChange={setdateob}
                      renderInput={renderCustomInput} // render a custom input
                      shouldHighlightWeekends
                    />
                    {/* />
                    {/* <DatePicker selected={dob} onChange={handleDobChange} className="w-full outline-blue-400 border-2 px-2 py-2 border-gray-400" /> */}
                    {/* <DatePicker
                      className={`w-full outline-blue-400 border-2 px-2 py-2 ${validationModel.dateob ? "border-red-400" : "border-gray-400"}`}
                      selected={dob}
                      onChange={handleDobChange}
                      withPortal
                      showYearDropdown
                      fixedHeight
                      customInput={<ExampleCustomInput />}
                    /> */}

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
                <p className='text-lg text-red-600 mb-4  '><sup className='text-red-600 font-bold'>*</sup>Mandatory</p>
                <button onClick={handleSubmit} className={`text-white ${checkData ? `bg-green-600` : `bg-gray-900`} w-full px-2 py-1 text-3xl font-medium tracking-wide`}>SUBMIT</button>
              </div>

            </div>
          </div>

        </section>


        <section className='row mb-8'>
          <div className='col-12 bg-light-red'  >
            <div className='row justify-center text-white lg:text-lg text-xs font-semibold gap-0'>
              {dropItem.map((item, index) => (
                <div key={index} className=' dropdowns col-lg-2 col-4 cursor-pointer flex py-1 text-center md:text-center md:d-flex md-justify-center  hover:bg-red-600 transition-all' onClick={() => handleDropdown(index)} >
                  <p className=' links   py-1  '>{item} </p>  {index === activeIndex ?
                    <IoChevronUpOutline className=' arrow_icon inline lg:text-4xl text-sm ' />
                    :
                    <IoChevronDownOutline className=' arrow_icon inline lg:text-4xl text-sm' />}

                </div>

              ))}

            </div>
          </div>
        </section>







      </section>
      <div className='bscontainer'>
        <section>
          <div>
            {activeIndex === 2 ?
              <div className=" mb-8" >
                <div className="block p-6 rounded-lg shadow-lg bg-white">
                  Whats Next content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
              : activeIndex === 0 ?
                <div className=" mb-8" >
                  <div className="block p-6 rounded-lg shadow-lg bg-white">
                    About Recurit content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
                : activeIndex === 1 ?
                  <div className=" mb-8" id="HowToApply">
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                      How To Apply content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                  </div>
                  : null

            }
            <div id="dropzone" ref={dropzoneRef} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-4 border-gray-300 border-dashed border-b-red-500  bg-gray-100">
              <div className="space-y-1 text-center items-center flex justify-center flex-col">
                {/* <MdCloudUpload size={99} className='inline  text-blue-300' /> */}
                <img src={cloudImage} className="w-55 h-40  " alt="cloud_image" />
                <div>
                  <h1 className='text-5xl font-bold mb-2'>Drag & Drop</h1>
                  <h4 className='text-gray-700 text-2xl font-medium mb-2'>Your file type</h4>
                  <div className='row justify-center'>
                    {uploadFiles.map((file, i) => {
                      return (
                        <div key={i} className='col-1   '>
                          <GoFileMedia className='inline text-red-500' size={44} />
                        </div>
                      )
                    })}
                  </div>

                  <h5 className='text-gray-500 text-xl font-normal mb-2'>or select an option below</h5>
                  <label className={`rounded-sm ${file ? ` bg-green-600 ` : `bg-light-red`}  inline-block text-white mb-1 cursor-pointer text-xl tracking-wide font-medium px-8 py-1`}>
                    BROWSE MY FILES
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} hidden />
                  </label>
                  <p className='text-xs text-gray-500 font-medium mb-8'>Maximum Upload File Size 35MB</p>
                  <p className='font-normal text-sm'>All files uploaded here will be scanned to ensure content is benign, contaminated files and threats will be rejected</p>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>


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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-lg-6 col-md-12 lg:order-first order-last'>
              <h1 className='text-4xl font-medium mb-4 '>LAWYERS</h1>
              <p className='font-semibold text-xs leading-6 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
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
              <div>
                <button onClick={executeScroll} className='mb-2 mr-4 text-white text-lg font-medium py-1 px-10  bg-light-red hover:bg-green-600 transition-all'>APPLY</button>
                <span className='block md:inline'>
                  <ReactCountryFlag className='mr-1' countryCode="ES" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="DE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="GB" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="US" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="IE" svg style={{ width: '1.5em', height: '1.5em', }} />
                  <ReactCountryFlag className='mx-1' countryCode="CA" svg style={{ width: '1.5em', height: '1.5em', }} />
                </span>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 lg:order-last order-first lg:mb-0 mb-4'>
              <img src={Lawyer1_pic} alt="Lawyer1_pic" />
            </div>
          </div>
        </section>

        <section className='mb-4'>
          <div className="accordion" id="accordionExample">
            <div className=" bg-white   border rounded-none border-gray-900 mb-3   ">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button className=" text-black font-medium px-2 py-1  text-sm    accordion-button collapsed relative flex items-center w-full    text-left bg-white     transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <p> HOW WE SUPPORT WORKING  <span className='sami_filed'>MOTHERS</span> AND THEIR FAMILIES</p>
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
                  <p> HOW WE SUPPORT WORKING  <span className='sami_filed'>FATHERS</span> AND THEIR FAMILIES</p>
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
      {isShow && <PopUp permition={isShow} Toggle={(value) => setIsShow(value)} />}

      <footer className='bscontainer-fluid bg-light-red d-flex text-white text-xs text-center font-normal py-3 footer '>
        COPYRIGHTS © 2022 HPORX LTD, IRELAND. ALL RIGHTS RESERVED.
        <span className='footer_text'>
          |  <span className='hover:underline cursor-pointer'>PRIVACY POLICY </span>
          | <span className='hover:underline cursor-pointer' >+44 1223 298541 </span>
          | <span className='hover:underline cursor-pointer' > TERMS OF USE </span>
          | <span className='hover:underline cursor-pointer' > DIGITAL AGENCY SERVICES </span>
          | <span className='hover:underline cursor-pointer' >SITE DIRECTORY </span>
        </span>
        <div className='footer_social '>
          <FollowUs />
        </div>
      </footer>


    </>


  );
}

export default App;
