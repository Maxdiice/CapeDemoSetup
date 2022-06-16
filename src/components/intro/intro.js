import Radio from '@mui/material/Radio';
import React, { useEffect, useRef } from "react";
import './introStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import GetSVG from '../../util/util';

function Intro(props) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2971EB",
      }
    },
  });

  return (
        <div className="container-info">
          <div className="icon">
            <SvgIcon component={GetSVG(props.icon)} inheritViewBox />
          </div>
          <div className={"info"}>
            <p>{props.questionTitle}</p>
          </div>
        </div>
  )
}

export default Intro;