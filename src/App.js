import './App.css';
import { FaChevronDown } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import Business_pic from "./assets/images/sales (2).jpg"

function App() {
  return (
    <>
      <section className='bscontainer-fluid'>
        <section className='row'>
          <div className='col-12 bg-hero-pattern bg-center bg-no-repeat h-screen bg-cover bg-blend-lighten ' style={{ backgroundColor: "#ffffffad" }}>
            <div className='row'>
              <div className='col-4'>
                sdf
              </div>
              <div className='col-4 text-center text-8xl font-medium'>
                RECRUIT
              </div>
              <div className='col-4'>
                sdf
              </div>
            </div>
            <div className='row justify-center gap-2 '>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" placeholder='Name *' className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
              <div className='col-3 border-gray-400 border-2 bg-gray-50 py-4 text-gray-500 text-lg font-medium my-custom-style' >
                <input type="text" className="w-full h-full bg-gray-50 focus-visible:outline-none " style={{ background: "#F0F0F0" }} />
              </div>
            </div>
            <div className='row justify-center gap-2 '>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" placeholder='Name *' className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
            </div>
            <div className='row justify-center gap-2 '>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" placeholder='Name *' className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
            </div>
            <div className='row justify-center gap-2 '>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" placeholder='Name *' className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
              <div className='col-3 border-gray-400 border-2 bg-transparent py-4 text-gray-500 text-lg font-medium'>
                <input type="text" className="w-full h-full bg-transparent focus-visible:outline-none " />
              </div>
            </div>
          </div>

        </section>

        <section className='row'>
          <div className='col-12 ' style={{ background: "#E84025" }}>
            <div className='row justify-center text-white text-lg font-semibold gap-0'>
              <div className='col-2  py-1 text-center'>
                ABOUT RECRUIT <IoChevronDownOutline size={40} className='inline' />
              </div>
              <div className='col-2 border-r border-l  py-1 text-center'>
                HOW TO APPLY <IoChevronDownOutline size={40} className='inline' />
              </div>
              <div className='col-2  py-1 text-center'>
                WHAT'S NEXT <IoChevronDownOutline size={40} className='inline' />
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className='bscontainer'>
        <section className='my-14' >
          <div className='row'>
            <div className='col-6'>
              <h1 className='text-5xl font-medium mb-6'>BUSINESS DEVELOPMENT</h1>
              <p className='font-semibold text-xs leading-8 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button className='  text-white text-xl font-semibold py-3 px-14  bg-red-500'>APPLY</button>
            </div>
            <div className='col-6  '>
              <img src={Business_pic} alt="Business_pic" />
            </div>
          </div>
        </section>

        <section className='my-14' >
          <div className='row'>
            <div className='col-6  '>
              <img src={Business_pic} alt="Business_pic" />
            </div>
            <div className='col-6'>
              <h1 className='text-5xl font-medium mb-6'>BUSINESS DEVELOPMENT</h1>
              <p className='font-semibold text-xs leading-8 text-justify mb-4'>The significant global impact of the Coronavirus Disease SARS-CoV-2 which impact off the world in 2019. We understand
                that you would prefer to work at a distance, from home preferably all the protective bubble that home represents for the
                safety of your family, colleagues, neighbors, and friends. Our company offers you a rare example to work in the open at
                your pace and not your schedule with unlimited earning potential for more information on this opportunity, please
                contact our human resources department by filling out the form above adding your recent work experience in a resume
                summary of experience (CV) and we will respond after reviewing your submission. We thank you for considering our
                company as an opportunity for employment.</p>
              <button className='  text-white text-xl font-semibold py-3 px-14  bg-red-500'>APPLY</button>
            </div>
          </div>
        </section>


      </div>
    </>


  );
}

export default App;
