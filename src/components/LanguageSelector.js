import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        <span className="m4">Select a language:</span>
        <i
          className="flag us pointer"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag fi pointer"
          onClick={() => this.context.onLanguageChange("finnish")}
        />
      </div>
    );
  }
}
