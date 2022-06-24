import React from "react";
import { useHistory } from "react-router-dom";

import dressCodePic from "../../../../Assets/images/TheDressCode_Logo_CMYK__Stacked_DarkGrey.png";

import "./DressCodeMen.css";


const DressCodeMen = () => {
  const history = useHistory();

  const navigateClicked = () => {
    history.push("/AdditionalInfoPage");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="mainContainerDressCode">
        <div className="innerContainerDressCode">
          <div className="dressCodeLeft">
            <img src={dressCodePic} alt="" className="dressCodeImg" />
          </div>

          <div className="dressCodeRights">
            <div className="verticalLine"></div>
            <div className="topStylishTailTxtBtn">
              <p className="personalStylingTxt">
                Personal <span className="spPersonalStyling">Styling</span>,
                tailored <span className="spPersonalStyling">just</span> for{" "}
                <span className="spPersonalStyling">you.</span>
              </p>

              <button className="btnTakeStyleQuiz" onClick={navigateClicked}>
                Take your style quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressCodeMen;
