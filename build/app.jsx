"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { FlexContainer, FlexColumn, FlexRow, FlexContent } from "react-layout"

ReactDOM.render(
  <FlexContainer>
    <FlexColumn>
      <FlexContent style={{ width: "200px"}}>Hello world</FlexContent>
    </FlexColumn>
  </FlexContainer>
  ,document.getElementById("content"))