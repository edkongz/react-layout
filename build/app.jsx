"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { FlexContainer, FlexColumn, FlexRow, FlexContent } from "react-layout"

ReactDOM.render(
  <FlexContainer>
    <FlexColumn>
      <FlexContent style={{ background: "orange" }} flexItem={ false }>4</FlexContent>
      <FlexRow style={{ border: "1px solid blue" }}>
        <FlexContent style={{ background: "red" }} flexItem={ false }>1</FlexContent>
        <FlexContent style={{ background: "purple", display: "flex" }}>
          <FlexRow style={{ background: "green" }}>
            <FlexColumn flexItem={false} style={{ background: "yellow" }}>
              <FlexContent flexItem={false}>hello</FlexContent>
            </FlexColumn>
            <FlexContent flexItem={ false }>world</FlexContent>
          </FlexRow>
        </FlexContent>
      </FlexRow>
    </FlexColumn>
    Block
  </FlexContainer>
  ,document.getElementById("content"))