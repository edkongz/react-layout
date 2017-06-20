"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { Block, FormRow } from "react-layout"

ReactDOM.render(<Block style={{ background: "lightgray" }} direction="column">
    <FormRow style={{ background: "orange" }}>
      <div style={{ background: "purple", flex: "1 0 auto" }}>First</div>
      <div style={{ background: "violet", flex: "1 0 auto" }}>First</div>
      <div style={{ background: "purple", flex: "1 0 auto" }}>First</div>
    </FormRow>
    <Block style={{ background: "pink"}} >
      <div style={{ background: "lightblue" }}>Hello world</div>
      <div style={{ background: "red"}}>2</div>
    </Block>
    <Block style={{ background: "salmon"}}>
      <Block style={{ background: "goldenrod" }} centered={ true }>goldenrod</Block>
    </Block>
  </Block>
  ,document.getElementById("content"))