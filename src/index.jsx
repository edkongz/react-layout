"use strict"

import React from "react"

export const Block = props => {
  const defaultStyle = {
    boxSizing: "border-box"
    ,display: "flex"
    ,flexDirection: props.direction
    ,flex: props.flex
    ,alignItems: "stretch"
  }
  const centered = {
    flex: "0 1 auto"
    ,margin: props.centered && ("auto")
}
  const style = Object.assign(defaultStyle, props.centered ? centered : {}, props.style)
  return <div style={ style }>{ props.children }</div>
}

Block.defaultProps = {
  direction: "row"
  ,flex: "1 0 auto"
  ,centered: false
}

export const FormRow = props => {
  const defaultStyle = {
    boxSizing: "border-box"
    ,display: "flex"
    ,flex: "0 1 auto"
    ,alignItems: "flex-start"
    ,alignSelf: "stretch"
  }
  const style = Object.assign(defaultStyle, props.style)
  return <div style={ style }>{ props.children }</div>
}