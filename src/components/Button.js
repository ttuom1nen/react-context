import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "submit" : "Lähetä";
    return <button className="ui button primary pointer">{text}</button>;
  }
}
