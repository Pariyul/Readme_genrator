import { useState } from "react";
// import './App.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faGithub
//   // faLinkedin,
//   // faXTwitter,
//   // faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [banner,setBanner] =useState("");
  const [des, setDes] = useState("");
  const [clg, setClg] = useState("");
  const [skills, setSkills] = useState("")
  const [task1, setTask1] = useState("")
  const [task2, setTask2] = useState("")
  const [task3, setTask3] = useState("")
  const [task4, setTask4] = useState("")
  const [task5, setTask5] = useState("")
  const [task6, setTask6] = useState("")

  const Changename = (e) => {
    setName(e.target.value);
  };
  const ChangeInst =(e) =>{
    setInterest(e.target.value);
  }
  const Changebanner = (e) =>{
    setBanner(e.target.value);
  }
  const Changedes =(e)=>{
    setDes(e.target.value);
  } 
  const Changeclg =(e) =>{
    setClg(e.target.value);
  }
  const ChangeSkill = (e) =>{
    setSkills(e.target.value);
  }
  const ChangeTask1 = (e) =>{
    setTask1(e.target.value);
  }
  const ChangeTask2 = (e) =>{
    setTask2(e.target.value);
  }
  const ChangeTask3 = (e) =>{
    setTask3(e.target.value);
  }
  const ChangeTask4 = (e) =>{
    setTask4(e.target.value);
  }
  const ChangeTask5 = (e) =>{
    setTask5(e.target.value);
  }
  const ChangeTask6 = (e) =>{
    setTask6(e.target.value);
  }


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

            <h3 className="block text-gray-700 font-bold pt-3">
              Area of Interest
            </h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Web Developer"
              value={interest}
              onChange={ChangeInst}
            />

            <h3 className="block text-gray-700 font-bold pt-3">Banner</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png"
              value={banner}
              onChange={Changebanner}
            />
            <h3 className="block text-gray-700 font-bold pt-3">Description</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Enter your description"
              value={des}
              onChange={Changedes}
            />

            <h3 className="block text-gray-700 font-bold pt-3">College</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="Gyan Ganga Institute of Technology and Sciences"
              value={clg}
              onChange={Changeclg}
            />

            <h3 className="block text-gray-700 font-bold pt-3">Skills</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              type="text"
              placeholder="HTML, CSS, JS, C++, C, React ,Firebase, DSA"
              value={skills}
              onChange={ChangeSkill}
            />
          </div>

          <div className="left-container1 bg-white h-[53%] p-[20px] rounded-lg leading-loose">
            <h1 className="text-3xl font-bold underline decoration-purple-400">
              What are you doing now?
            </h1>
            <div className="flex mx-4 space-x-5">
              <div>
                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    🚧I’m currently working on...
                  </h3>
                  <input
                    type="text"
                    className="w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task1}
                    onChange={ChangeTask1}
                  />
                </div>

                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    📑I’m currently learning...
                  </h3>
                  <input
                    type="text"
                    className="w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task2}
                    onChange={ChangeTask2}
                  />
                </div>

                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    🏅My Favourite Hobby...
                  </h3>
                  <input
                    type="text"
                    className="w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task3}
                    onChange={ChangeTask3}
                  />
                </div>
              </div>
              <div>
                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    🗡️ Look At My this Project...
                  </h3>
                  <input
                    type="text"
                    className="w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task4}
                    onChange={ChangeTask4}
                  />
                </div>

                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website...
                  </h3>
                  <input
                    type="text"
                    className="w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task5}
                    onChange={ChangeTask5}
                  />
                </div>

                <div>
                  <h3 className="mt-4 block text-gray-700 text-xl font-bold">
                    {" "}
                    📣 Ask Me About...
                  </h3>
                  <input
                    type="text"
                    className=" w-full my-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    placeholder="Your answer here"
                    value={task6}
                    onChange={ChangeTask6}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="left-container2 bg-white h-[53%] p-[20px] rounded-lg ">
            <h1 className="font-bold text-3xl underline decoration-purple-400 ">
              Connect With Me
            </h1>
            <div className="social-media flex justify-between my-5">
              <div className="icon"></div>
              <input
                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none "
                type="text"
                placeholder="Github Link"
              />
            </div>

            <div className="social-media flex justify-between my-5">
              <div className="icon"></div>
              <input
                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none "
                type="text"
                placeholder="Linkedin Link"
              />
            </div>

            <div className="social-media flex justify-between my-5">
              <div className="icon"></div>
              <input
                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none "
                type="text"
                placeholder="X Twitter Link"
              />
            </div>

            <div className="social-media flex justify-between my-5">
              <div className="icon"></div>
              <input
                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none "
                type="text"
                placeholder="Instagram Link"
              />
            </div>
          </div>
{/* ------4container */}
          <div className="left-container3 bg-white h-[53%] p-[20px] rounded-lg">
            <h2 className="font-bold text-3xl underline decoration-purple-400">Add On Features</h2>

            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot ">
              <label htmlFor="profileViews" className="ml-5">
                Add Profile Views
              </label>
              <input
                type="checkbox"
                onClick={(e) => {
                  setfeature1(!feature1);
                }}
                id="profileViews"
                className="size-4 ml-5"
              />
            </div>
            <div className="text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="Trophies section" className="ml-5">Add Trophies Section
              </label>
              <input 
              type="checkbox" 
              className="size-4 ml-5"
              />
            </div>

            <div className="text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="Streaks section" className="ml-5">Add Streaks Section
              </label>
              <input 
              type="checkbox" 
              className="size-4 ml-5"
              />
            </div>

            <div className="text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="Lang section" className="ml-5"> Add Top Language Usage
              </label>
              <input 
              type="checkbox" 
              className="size-4 ml-5"
              />
            </div>

            <div className="text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="Readme section" className="ml-5"> Add Readme State
              </label>
              <input 
              type="checkbox" 
              className="size-4 ml-5"
              />
            </div>


          </div>
        </div>

        {/* ----------right */}
        <div className="right-container mt-[100px] bg-white h-auto min-h-[400px] w-[45%] p-[20px] rounded-lg break-words">
          <h1 className="text-3xl font-bold underline decoration-purple-400">
            Preview
          </h1>
          {name === "" ? (
            <p className="font-bold text-3xl flex justify-center mt-4">Hello! Myself, Pariyul Jain</p>
          ) : (
            <p className="font-bold text-2xl flex justify-center mt-4">
              Hello! Myself , <span>{name}</span>
            </p>
          )}
          {
            interest === "" ?(
              <p className="font-bold text-2xl flex justify-center mt-4 text-slate-700">Enthusiastic Learner 📖 | Web Developer 💻</p>
            ):(
              <p className="font-bold text-2xl flex justify-center mt-4 text-slate-700 ">I am a interested in  
              <span className="font-bold text-2xl flex justify-center text-black ms-2">{interest}</span>

              </p>
            )
          }
          <span>
          {
            banner == ""?(
              <a href="https://images.ctfassets.net/wfutmusr1t3h/2sX2KYqfnGuZTqWIDUUdEI/5e36aaaab860a3bd4e026fa52d597d87/og-image-24.jpg">
              <img 
              className=" h-[250px] w-[550px] mt-5 ml-[35px]"
              src="https://images.ctfassets.net/wfutmusr1t3h/2sX2KYqfnGuZTqWIDUUdEI/5e36aaaab860a3bd4e026fa52d597d87/og-image-24.jpg" 
              alt="default banner" />
              </a>
            ):(
              <img 
              className="h-[200px] w-[550px] mt-5 ml-[32px]"
              src={banner} alt="custom banner" />
            )
          }
          </span>

          {
            des ===""?(
              <center className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor eveniet consequatur voluptatibus vel repellat, sint ut alias, magnam veritatis repellendus earum perspiciatis deleniti officiis, mollitia quia nostrum? Laboriosam, nobis!</center>
            ):(
              <p className="text-center mt-[25px] text-xl text-slate-750">{des}</p>
            )
          }

          {
            clg ===""?(
              <p className="font-bold text-center mt-[25px] text-lg ">
                Gyan Ganga Institute of Technology and Sciences
              </p>
            ):(
              <p className="font-bold text-center mt-[25px] text-xl text-slate-700">{clg}</p>
            )
          }

          {
            skills ===""?(
              <p className="font-bold text-center mt-[25px] text-lg ">
                Skills : HTML, CSS, JS, C++, C, React ,Firebase, DSA
              </p>
            ):(
              <p className="font-bold text-center mt-[25px] text-xl text-slate-700">Skills : {skills}</p>
            )
          }

          {
            task1 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="font-bold text-2xl mt-[25px] text-start">What I am Doing</h2>
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">🚧 I'm currently working on <span className="font-bold text-black">{task1}</span> </h2></p>
            )
          }

          {
            task2 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">📑I’m Currently Learning <span className="font-bold text-black">{task2}</span> </h2></p>
            )
          }

          {
            task3 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">🏅My Favourite Hobby <span className="font-bold text-black">{task3}</span> </h2></p>
            )
          }
            {
            task4 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">🗡️ Look At My this Project <span className="font-bold text-black">{task4}</span> </h2></p>
            )
          }
            {
            task5 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website <span className="font-bold text-black">{task5}</span> </h2></p>
            )
          }
            {
            task6 == ""?(
              <p></p>
            ):(
          
              <p >
                <h2 className="text-xl text-start text-slate-700 mt-[15px]">📣 Ask Me About <span className="font-bold text-black">{task6}</span> </h2></p>
            )
          }

        </div>
      </div>
    </>
  );
}

export default App;
