import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
  render() {
    return (
      <button className="ui button primary pointer">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Lähetä")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
