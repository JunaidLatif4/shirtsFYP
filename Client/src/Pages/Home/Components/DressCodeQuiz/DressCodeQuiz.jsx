import React from 'react'
import { Link, useHistory } from "react-router-dom";

import pic from '../../../../Assets/images/TheDressCode_Logo_CMYK__Primary_White.png'

import './DressCodeQuiz.css'


const DressCodeQuiz = () => {
  const history = useHistory();

  const navigateClicked = () => {
    history.push("/AdditionalInfoPage");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className='topMainContainerDCQuiz'>
        <div className='mainContainerDCQuiz'>
          <div className='dressCodeQuizDiv'>
            <img src={pic} alt="" className="dressCodeQuizImg" />
          </div>

          {/* <button className='takeQuizDCBtn' onClick={navigateClicked} >Take your style quiz</button> */}

        </div></div>
    </>
  )
}

export default DressCodeQuiz