import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './App.css'
// import {
//   faGithub,
//   faLinkedin,
//   faXTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");

  const Changename = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="text-5xl font-normal h-[80px] w-[50%] text-center my-[70px] bg-[#163c76] p-8 rounded-lg flex justify-center items-center shadow-2xl text-[#b0bc92] ">
          <h1>Github Readme Generator</h1>
        </div>
      </div>
      <div className="container h-full w-[95vw] items-start  bg-gradient-to-r from-[#2b5876] to-[#4e4376] mt-5 mb-5 mx-auto flex justify-evenly rounded-xl break-words">
        <div className=" left-container w-[45%] py-[100px] flex flex-col space-y-4 ">
          <div className="left-container1 bg-white h-[53%] p-[20px] rounded-lg leading-loose">
            <h1 className="text-3xl font-bold underline decoration-purple-400">
              Header
            </h1>
            <h3 className="block text-gray-700 font-bold pt-3">Heading</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={Changename}
            />

            <h3 className="block text-gray-700 font-bold pt-3">Area of Interest</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Web Developer"
            />

            <h3 className="block text-gray-700 font-bold pt-3">Banner</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Web Developer"
            />
            <h3 className="block text-gray-700 font-bold pt-3">Description</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png"
            />

            <h3 className="block text-gray-700 font-bold pt-3">College</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Gyan Ganga Institute of Technology and Sciences"
            />

            <h3 className="block text-gray-700 font-bold pt-3">Skills</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="HTML, CSS, JS, C++, C, React ,Firebase, DSA"
            />
          </div>
        </div>
        <div className="right-container mt-[100px] bg-white h-auto min-h-[400px] w-[45%] p-[20px] rounded-lg break-words">
          <h1 className="text-3xl font-bold underline decoration-purple-400">
            Preview
          </h1>
          {name === "" ? (
            <p>Hello! Myself Pariyul Jain</p>
          ) : (
            <p>
              Hello! Myself , <span>{name}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
