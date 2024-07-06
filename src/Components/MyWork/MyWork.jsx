import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_1 from '../../assets/project_1.svg'
import project_2 from '../../assets/project_2.svg'
import project_3 from '../../assets/project_3.svg'
import project_4 from '../../assets/project_4.svg'
import project_5 from '../../assets/project_5.svg'
import project_6 from '../../assets/project_6.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <img src={project_1} alt="" />
        <img src={project_2} alt="" />
        <img src={project_3} alt="" />
        <img src={project_4} alt="" />
        <img src={project_5} alt="" />
        <img src={project_6} alt="" />
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
