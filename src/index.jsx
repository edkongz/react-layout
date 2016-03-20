"use strict"

import React from "react"

export class FlexContainer extends React.Component {

  render() {
    const defaultStyle = {
      display: "flex"
      ,width: "100vw"
      ,height: "100vh"
      ,boxSizing: "border-box"
    }
    const style = Object.assign(defaultStyle, this.props.style)
    return <div style={ style }>
      { this.props.children }
    </div>
  }
}

export class FlexColumn extends React.Component {

  render() {
    const defaultStyle = {
      display: 'flex'
      ,flexDirection: "column"
      ,boxSizing: "border-box"
      ,width: this.props.width
      ,height: this.props.height
    }

    let flexItem = { flex: this.props.flexItem || "1 0 auto" };
    if (this.props.flexItem === false) flexItem = {}

    const style = Object.assign(defaultStyle, flexItem, this.props.style)
    return <div style={ style }>
      { this.props.children }
    </div>
  }
}

export class FlexRow extends React.Component {

  render() {
    const defaultStyle = {
      display: "flex"
      ,boxSizing: "border-box"
      ,width: this.props.width
      ,height: this.props.height
    }
    let flexItem = { flex: this.props.flexItem || "1 0 auto" };
    if (this.props.flexItem === false) flexItem = {}

    const style = Object.assign(defaultStyle, flexItem, this.props.style)
    return <div style={ style }>{ this.props.children }</div>
  }
}

export class FlexContent extends React.Component {

  render() {
    const defaultStyle = {
      boxSizing: "border-box"
      ,width: this.props.width
      ,height: this.props.height
    }

    let flexItem = { flex: this.props.flexItem || "1 0 auto" };
    if (this.props.flexItem === false) flexItem = {}
    const style = Object.assign(defaultStyle, flexItem, this.props.style)
    return <div style={ style }>{ this.props.children }</div>
  }
}

export const FormRow = props => <FlexRow flexItem={ props.flexItem } style={{ padding: "0 10px" }}>{ props.children }</FlexRow>
export const FormField = props => <FlexContent flexItem={ props.flexItem } style={{ padding: "0 10px" }}>{ props.children }</FlexContent>
export const FormFooter = props => <FlexContent flexItem={ props.flexItem } style={{ padding: 10 }}>{ props.children }</FlexContent>