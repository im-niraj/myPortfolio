import React, { useState, useEffect } from 'react';
import './Project.css';
import instacartProject from '../../assets/instacart.png';
import sugarcosmeticProject from '../../assets/sugarcosmetic.png';
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';

export default function Project() {
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setCounter(counter + 1);
    //     }, 1000);

    //     return() => {
    //         clearInterval(interval);
    //     };
    // });

  return (
    <div className='project-container' id='Projects'>
    <div className='project-header'>
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className='header-underline'>
            <span className='header-underline1'></span>
        </span>
    </div>

    <div className="projectDetails">
        <div className="projectCard">
        <div className="project-card">
            <div className='projectName'>
                <h3>Instacart clone</h3>
            </div>
            <div className='projectImg'>
                <img src={instacartProject} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our first collaborative project, there were six members assigned for the project. It took around 4 days to complete the task. In this project, my contribution was I had to build the grocery page and cart page.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/itsme-brijeshrai/InstaCart-Clone" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://glowing-kashata-fe5a26.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>



        <div className="project-card">
            <div className='projectName'>
                <h3>Sugercosmetic clone</h3>
            </div>
            <div className='projectImg'>
                <img src={sugarcosmeticProject} alt="" />
            </div>
            <div className='projectInfo'>
                <div className="contentProject">
                This was our second collaborative project, there were again six members assigned for the project. It took around 3 days to complete the task. In this project, my contribution was I had to build the trending page and product cart page.
                </div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/ravinishadcoder/SUGAR-Cosmetic-Clone" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://melodic-malabi-d69a87.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>


        {/* <div className="project-card">
            
        </div>
        <div className="project-card">
            hello
        </div> */}
        </div>
    </div>
</div>
  )
}
