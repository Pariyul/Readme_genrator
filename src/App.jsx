import { useRef, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [desc, setDesc] = useState("");
  const [banner, setBanner] = useState("");
  const [college, setCollege] = useState("");
  const [skills, setSkills] = useState("");
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");
  const [task6, setTask6] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [x, setX] = useState("");
  const [insta, setInsta] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [feature1, setfeature1] = useState(false);
  const [feature2, setfeature2] = useState(false);
  const [feature3, setfeature3] = useState(false);
  const [feature4, setfeature4] = useState(false);
  const [feature5, setfeature5] = useState(false);
  const textDivRef = useRef(null);

  const handleCopy = () => {
    const textToCopy = textDivRef.current.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy!"));
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeInterest = (i) => {
    setInterest(i.target.value);
  };

  const changeDescp = (d) => {
    setDesc(d.target.value);
  };

  const changeBanner = (b) => {
    setBanner(b.target.value);
  };

  const collegeName = (c) => {
    setCollege(c.target.value);
  };

  const skillsName = (s) => {
    setSkills(s.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="text-5xl font-normal h-[80px] w-[50%] text-center my-[70px] bg-[#163c76] p-8 rounded-lg flex justify-center items-center shadow-2xl text-[#b0bc92] ">
          <h1>GitHub Readme Generator</h1>
        </div>
      </div>

      <div className="container h-full w-[95vw] items-start  bg-gradient-to-r from-[#2b5876] to-[#4e4376] mt-5 mb-5 mx-auto flex justify-evenly rounded-xl break-words">
        <div className="left-container w-[45%] py-[100px] flex flex-col space-y-4">
          <div className="left-container1 bg-white h-[53%] p-[20px] rounded-lg">
            <h2 className="text-3xl font-bold underline decoration-purple-500 mb-6">
              Header
            </h2>

            <h3 className="block text-gray-700 font-bold text-xl my-2">Heading</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={changeName}
            />

            <h3 className="block text-gray-700 font-bold mt-5 text-xl my-2 ">
              Area of interest
            </h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Web Developer"
              value={interest}
              onChange={changeInterest}
            />

            <h3 className="block text-gray-700 font-bold mt-5 text-xl  my-2">Banner</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png"
              value={banner}
              onChange={changeBanner}
            />

            <h3 className="block text-gray-700 font-bold mt-5 text-xl my-2">Description</h3>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter Your Description"
              value={desc}
              onChange={changeDescp}
            />

            <h3 className="block text-gray-700 font-bold mt-5 text-xl my-2 ">College</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Gyan Ganga Institute of Technology and Sciences"
              value={college}
              onChange={collegeName}
            />

            <h3 className="block text-gray-700 font-bold mt-5 text-xl  my-2">Skills</h3>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="HTML, CSS, JS, C++, C, React ,Firebase, DSA"
              value={skills}
              onChange={skillsName}
            />
          </div>
          <div className="left-container2  bg-white  p-[20px] rounded-lg">
            <h2 className="text-3xl font-bold underline decoration-purple-500 mb-3">
              What are you doing now?
            </h2>
            <div className="flex justify-evenly">
              <div className="left">
                <h3 className="block text-gray-700 text-xl font-bold ">
                  🚧 I’m currently working on...
                </h3>
                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task1}
                  onChange={(e) => {
                    setTask1(e.target.value);
                  }}
                />
                <h3 className="mt-4 block text-gray-700 text-xl font-bold ">
                  📑 I'm Currently Learning...
                </h3>

                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task2}
                  onChange={(e) => {
                    setTask2(e.target.value);
                  }}
                />
                <h3 className="mt-4 block text-gray-700 text-xl font-bold ">
                  🏅 My Favourite Hobby...
                </h3>
                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task3}
                  onChange={(e) => {
                    setTask3(e.target.value);
                  }}
                />
              </div>
              <div className="right">
                <h3 className="block text-gray-700 text-xl font-bold ">
                  🗡️ Look At My this Project...
                </h3>
                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task4}
                  onChange={(e) => {
                    setTask4(e.target.value);
                  }}
                />
                <h3 className="mt-4 block text-gray-700 text-xl font-bold ">
                  🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website...
                </h3>
                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task5}
                  onChange={(e) => {
                    setTask5(e.target.value);
                  }}
                />
                <h3 className="mt-4 block text-gray-700 text-xl font-bold ">
                  📣 Ask Me About...
                </h3>
                <input
                  className="w-[100%] mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Your Answer Here"
                  value={task6}
                  onChange={(e) => {
                    setTask6(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="left-container3  bg-white  p-[20px] rounded-lg">
            <h2 className="text-3xl font-bold underline decoration-purple-500 mb-6">
              Connect With Me
            </h2>
            <div className="social-media flex justify-between my-5">
              <div className="icon ">
                <FontAwesomeIcon icon={faGithub} className="h-[3em]" />
              </div>
              <div className="address">
                <input
                  placeholder="Github Link"
                  value={github}
                  onChange={(e) => {
                    setGithub(e.target.value);
                  }}
                  className="border border-solid border-gray-500 rounded-lg p-2 h-[3.25rem] w-[34rem]"
                />
              </div>
            </div>
            <div className="social-media flex justify-between my-5">
              <div className="icon ">
                <FontAwesomeIcon icon={faLinkedin} className="h-[3em]" />
              </div>
              <div className="address">
                <input
                  placeholder="LinkedIn Link"
                  value={linkedin}
                  onChange={(e) => {
                    setLinkedin(e.target.value);
                  }}
                  className="border border-solid border-gray-500 rounded-lg p-2 h-[3.25rem] w-[34rem]"
                />
              </div>
            </div>
            <div className="social-media flex justify-between my-5">
              <div className="icon ">
                <FontAwesomeIcon icon={faXTwitter} className="h-[3em]" />
              </div>
              <div className="address">
                <input
                  placeholder="X Twitter Link"
                  value={x}
                  onChange={(e) => {
                    setX(e.target.value);
                  }}
                  className="border border-solid border-gray-500 rounded-lg p-2 h-[3.25rem] w-[34rem]"
                />
              </div>
            </div>
            <div className="social-media flex justify-between my-5">
              <div className="icon ">
                <FontAwesomeIcon icon={faInstagram} className="h-[3em]" />
              </div>
              <div className="address">
                <input
                  placeholder="Instagram Link"
                  value={insta}
                  onChange={(e) => {
                    setInsta(e.target.value);
                  }}
                  className="border border-solid border-gray-500 rounded-lg p-2 h-[3.25rem] w-[34rem]"
                />
              </div>
            </div>
          </div>
          <div className="left-container4  bg-white h-[53%] p-[20px] rounded-lg">
            <h2 className="text-3xl font-bold underline decoration-purple-500 mb-6">
              Add on Features
            </h2>
            <div className="github-username flex justify-between my-[40px]">
              <div className="icon ">
                <FontAwesomeIcon icon={faGithub} className="h-[3em]" />
              </div>
              <div>
                <input
                  placeholder="GitHub Username"
                  value={githubUsername}
                  onChange={(e) => {
                    setGithubUsername(e.target.value);
                  }}
                  className="username border border-solid border-gray-500 rounded-lg p-2 h-[3.25rem] w-[34rem]"
                />
              </div>
            </div>
            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="profileViews" className="ml-5 ">
                Add Profile Views
              </label>
              <input
                type="checkbox"
                onClick={(e) => {
                  setfeature1(!feature1);
                }}
                id="profileViews"
                className="ml-5 custom-checkbox"
              />
            </div>
            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="profileViews" className="ml-5 ">
                Add Trophies Section
              </label>
              <input
                type="checkbox"
                id="profileViews"
                checked={feature2 === true ? true : false}
                onClick={(e) => {
                  setfeature2(!feature2);
                }}
                className="ml-5 custom-checkbox"
              />
            </div>
            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="profileViews" className="ml-5 ">
                Add Streaks Section
              </label>
              <input
                type="checkbox"
                id="profileViews"
                onClick={(e) => {
                  setfeature3(!feature3);
                }}
                className="ml-5 custom-checkbox"
              />
            </div>
            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="profileViews" className="ml-5 ">
                Add Top Language Usage
              </label>
              <input
                type="checkbox"
                id="profileViews"
                onClick={(e) => {
                  setfeature4(!feature4);
                }}
                className="ml-5 custom-checkbox"
              />
            </div>
            <div className="checkbox text-2xl font-bold m-[15px] label-with-dot">
              <label htmlFor="profileViews" className="ml-5 ">
                Add Readme State
              </label>
              <input
                type="checkbox"
                id="profileViews"
                onClick={(e) => {
                  setfeature5(!feature5);
                }}
                className="ml-5 custom-checkbox"
              />
            </div>

            <style jsx>{`
              .label-with-dot {
                display: flex;
                align-items: center; /* Vertically centers the dot and the text */
              }

              .label-with-dot::before {
                content: "";
                display: inline-block;
                width: 7px;
                height: 7px;
                background-color: #000; /* Dark dot color */
                border-radius: 50%;
                margin-right: 4px; /* Space between dot and text */
              }
            `}</style>
            <style jsx>{`
              .custom-checkbox {
                width: 17px;
                height: 17px;
              }
            `}</style>
          </div>
        </div>

        <div className="right-container mt-[100px] bg-white h-auto min-h-[400px] w-[45%] p-[20px] rounded-lg break-words">
          <h2 className="text-3xl font-bold underline decoration-purple-700">
            Preview
          </h2>

          {name === "" ? (
            <p className=" mt-[15px] text-slate-900 text-3xl text-center font-bold ">
              Hello! Myself, Pariyul Jain
            </p>
          ) : (
            <p className=" mt-[15px] text-slate-700 text-2xl text-center font-bold ">
              Hello! Myself,{" "}
              <span className="mt-[15px] text-slate-950 text-3xl font-bold">
                {name}
              </span>
            </p>
          )}
          {interest === "" ? (
            <p className=" mt-[15px] text-slate-700 text-xl font-bold text-center flex justify-center">
              Enthusiastic Learner 📖 | Web Developer 💻
            </p>
          ) : (
            <p className=" mt-[15px] text-slate-700 text-center text-xl font-bold">
              I am a interested in{" "}
              <span className="mt-[15px] text-slate-950 text-2xl font-bold ">
                {interest}
              </span>
            </p>
          )}

          <span className="block p-4 rounded-lg">
            {banner === "" ? (
              <a href="https://images.ctfassets.net/wfutmusr1t3h/2sX2KYqfnGuZTqWIDUUdEI/5e36aaaab860a3bd4e026fa52d597d87/og-image-24.jpg">
                <img
                  src="https://images.ctfassets.net/wfutmusr1t3h/2sX2KYqfnGuZTqWIDUUdEI/5e36aaaab860a3bd4e026fa52d597d87/og-image-24.jpg"
                  alt="default banner"
                />
              </a>
            ) : (
              <img src={banner} alt="custom banner" />
            )}
          </span>
          {desc === "" ? (
            <center className="text-black-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              dolore tempora cupiditate! Inventore quod voluptatum quos,
              laudantium quas ut est ducimus doloribus obcaecati! Iusto dicta
              eum sapiente modi laboriosam option.
            </center>
          ) : (
            <p className=" mt-[25px] text-center text-slate-750 text-xl">
              {desc}
            </p>
          )}
          <div className="m-[30px]">
            {college === "" ? (
              <span className="mt-[10px] font-bold ">
                Gyan Ganga Institute Of Technology And Sciences
              </span>
            ) : (
              <p className=" mt-[10px] text-slate-700 text-xl font-bold">
                {college}
              </p>
            )}
            <br />
            <br />
            {skills === "" ? (
              <span className="mt-[5px] font-bold ">
                Skills: HTML, CSS, JS, C++, C, React ,Firebase, DSA
              </span>
            ) : (
              <p className=" mt-[15px] text-slate-700 text-xl font-bold">
                Skills: {skills}
              </p>
            )}
          </div>
          {task1 === "" &&
          task2 === "" &&
          task3 === "" &&
          task4 === "" &&
          task5 === "" &&
          task6 === "" ? (
            ""
          ) : (
            <h2 className="text-black text-2xl font-bold mt-[30px]">
              What I am Doing
            </h2>
          )}
          <span className="text-black text-xl">
            {task1 === "" ? null : (
              <p className="my-4">
                {" "}
                🚧 I’m currently working on{" "}
                <span className="font-bold ">{task1}</span>{" "}
              </p>
            )}
            {task2 === "" ? null : (
              <p className="my-4">
                📑 I'm Currently Learning{" "}
                <span className="font-bold">{task2}</span>{" "}
              </p>
            )}
            {task3 === "" ? null : (
              <p className="my-4">
                🏅 My Favourite Hobby <span className="font-bold">{task3}</span>{" "}
              </p>
            )}
            {task4 === "" ? null : (
              <p className="my-4">
                🗡️ Look At My this Project{" "}
                <span className="font-bold">{task4}</span>{" "}
              </p>
            )}
            {task5 === "" ? null : (
              <p className="my-4">
                🏴󠁧󠁢󠁷󠁬󠁳󠁿 My Personal Website{" "}
                <span className="font-bold">{task5}</span>{" "}
              </p>
            )}
            {task6 === "" ? null : (
              <p className="my-4">
                📣 Ask Me About <span className="font-bold">{task6}</span>{" "}
              </p>
            )}
          </span>
          <div className="link-display mt-[50px] flex justify-start">
            <div className="mx-[25px]">
              {github === "" ? null : (
                <a href={github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="h-[2.5em]" />
                </a>
              )}
            </div>
            {linkedin === "" ? null : (
              <div className="mx-[25px]">
                <a href={linkedin} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="h-[2.5em]" />
                </a>
              </div>
            )}
            {x === "" ? null : (
              <div className="mx-[25px]">
                <a href={x} target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} className="h-[2.5em]" />
                </a>
              </div>
            )}
            {insta === "" ? null : (
              <div className="mx-[25px]">
                <a href={insta} target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className="h-[2.5em]" />
                </a>
              </div>
            )}
          </div>
          <div className=" flex flex-col items-center justify-center mt-[50px] ">
            {feature1 === false &&
            feature2 === false &&
            feature3 === false &&
            feature4 === false &&
            feature4 === false ? null : (
              <h2 className="text-black text-3xl font-bold mt-[30px]">
                Github Status
              </h2>
            )}

            {feature1 === false ? (
              ""
            ) : (
              <p className="my-[30px]">
                {" "}
                <img
                  src={`https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=0e75b6&style=flat`}
                />{" "}
              </p>
            )}
            {feature2 === false ? (
              ""
            ) : (
              <p className="my-[30px]">
                {" "}
                <a href="https://github.com/ryo-ma/github-profile-trophy">
                  <img
                    src={`https://github-profile-trophy.vercel.app/?username=${githubUsername}`}
                    alt={githubUsername}
                  />
                </a>{" "}
              </p>
            )}
            {feature3 === false ? (
              " "
            ) : (
              <p className="my-[30px]">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&`}
                  alt={githubUsername}
                />
              </p>
            )}
            {feature4 === false ? (
              " "
            ) : (
              <p className="my-[30px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact`}
                />
              </p>
            )}
            {feature5 === false ? (
              " "
            ) : (
              <p className="my-[30px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en`}
                />
              </p>
            )}
          </div>
          <br />
        </div>
      </div>

      <div className="container min-h-[200px] w-full flex justify-center items-center bg-customBackground mt-5 mb-5 mx-auto relative h-auto rounded-lg p-[15px]">
        <div className="w-full relative">
          <h2 className="text-3xl font-bold underline decoration-purple-500 mb-6 py-2 px-4">
            Code
          </h2>

          <button
            onClick={handleCopy}
            className="absolute top-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 border-2 border-blue-900 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Copy Code!
          </button>
          <div
            ref={textDivRef}
            className="code bg-black text-white min-h-[80px] h-auto mx-auto p-[20px] w-full rounded-lg"
          >
            <p>{`<h1 align="center"> Hello! Myself, ${name}  </h1>`}</p>
            <p> {`<h3 align="center"> ${interest} </h3>`} </p>
            <p>{`<img 
              src="${
                banner === ""
                  ? "https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png"
                  : banner
              }"
              alt=""
              style="width:100%; max-width:600px;"
            />`}</p>
            <p> {`<p align="center"> ${desc} </p>`} </p>
            <p> {`<h3 align="center"> ${college} </h3>`} </p>
            <p> {`<h3 align="center"> Skills: ${skills} </h3>`} </p>
            <p>
              {" "}
              {task1 === ""
                ? null
                : `<h3> 🚧 I’m currently working on ${task1} </h3>`}{" "}
            </p>
            <p>
              {" "}
              {task2 === ""
                ? null
                : `<h3> 📑 I'm Currently Learning... ${task2} </h3>`}{" "}
            </p>
            <p>
              {" "}
              {task3 === ""
                ? null
                : `<h3> 🏅 My Favourite Hobby ${task3} </h3>`}{" "}
            </p>
            <p>
              {" "}
              {task4 === ""
                ? null
                : `<h3> 🗡️ Look At My this Project ${task4} </h3>`}{" "}
            </p>
            <p>
              {" "}
              {task5 === ""
                ? null
                : `<h3> 🏴 My Personal Website ${task5} </h3>`}{" "}
            </p>
            <p>
              {" "}
              {task6 === "" ? null : `<h3> 📣 Ask Me About ${task6} </h3>`}
            </p>
            <p>
              {" "}
              {feature1 === false &&
              feature2 === false &&
              feature3 === false &&
              feature4 === false &&
              feature5 === false
                ? ""
                : `<p > <h2 align="center" margin> Github Status </h2> </p>`}{" "}
            </p>
            <p>
              {feature1 === false ? (
                ""
              ) : (
                <p>
                  {feature1 === false
                    ? ""
                    : ` <p align="center"> <img src="https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=0e75b6&style=flat" alt="${githubUsername}">  </p>`}
                </p>
              )}
            </p>

            {feature2 === false
              ? ""
              : `<p align="center">
                <a href="https://github.com/ryo-ma/github-profile-trophy">
            <img
              src="https://github-profile-trophy.vercel.app/?username=${githubUsername}"
            />
          </a>
              </p>`}
            <br />
            {feature3 === false
              ? " "
              : `<p align="center"> <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}" /> </p>`}
            {feature4 === false
              ? " "
              : `<p align="center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&show_icons=true&locale=en&layout=compact"
            />
          </p>`}
            <br />
            {feature5 === false
              ? " "
              : `<p className="my-[30px] " align="center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&locale=en"
            />
          </p>`}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;