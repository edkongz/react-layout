"use strict"

import React from "react"

export const FlexContainer = props => {
  const defaultStyle = {
    padding: 0
    ,width: "100vw"
    ,height: "100vh"
    ,boxSizing: "border-box"
  }
  const style = Object.assign(defaultStyle, props.style)
  return <div style={ style }>{ props.children }</div>
}

export const FlexColumn = props => {
  const defaultStyle = {
    display: 'flex'
    ,flexDirection: "column"
    ,boxSizing: "border-box"
    ,width: "100%"
    ,height: "100%"
  }
  const style = Object.assign(defaultStyle, props.style)
  return <div style={ style }>{ props.children }</div>
}

export const FlexRow = props => {
  const defaultStyle = {
    display: "flex"
    ,boxSizing: "border-box"
  }
  const style = Object.assign(defaultStyle, props.style)
  return <div style={ style }>{ props.children }</div>
}


export const FlexContent = props => {
  const defaultStyle = {
    boxSizing: "border-box"
  }
  const centered = { margin: "auto" }

  const style = Object.assign(defaultStyle, centered, props.style)
  return <div style={ style }>{ props.children }</div>
}
