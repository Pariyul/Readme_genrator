import { useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './App.css'
// import {
//   faGithub,
//   faLinkedin,
//   faXTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

function App() {

  const [name, setName]= useState("");
  const [interest, setInterest] = useState("");

  const Changename=(e) =>{
    setName(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="text-5xl font-normal h-[80px] w-[50%] text-center my-[70px] bg-[#163c76] p-8 rounded-lg flex justify-center items-center shadow-2xl text-[#b0bc92] ">
          <h1>Github Readme Generator</h1>
        </div>
      </div>
      <div className="container  h-full w-[95vw] items-start bg-gradient-to-r from-[#2b5876] to-[#4e4376] mt-5 mb-5 mx-auto flex justify-evenly rounded-xl break-words">

        <div className=" lcon w-[45%] py-[100px] flex flex-col space-y-4">
          <div className="lcon1 bg-white h-[53%] rounded-lg p-[20px]">
          <h1 className='text-3xl font-bold underline decoration-purple-400'>Header</h1>
          <h3 className='block text-gray-700 font-bold'>Heading</h3>
          <input className='border-2	border-gray-200' type="text" placeholder='Enter your name'value={name} onChange={Changename} />
          </div>

          <div className="lcon2 lcon1 bg-white h-[53%] p-[20px]">
            <h1 className='text-3xl font-bold underline decoration-purple-400'>Preview</h1>
            {name === "" ? (
              <p>Hello! Myself Pariyul Jain</p>
            ):(
              <p>Hello! Myself ,{" "}
              <span>
                {name}
              </span>
              </p>
            ) }
          </div>
        </div>
      </div>
    </>
  )
}

export default App