import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import Colorcontext from "../contexts/ColorContext";
import ColorContext from "../contexts/ColorContext";

export default class Button extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color} pointer`}>
            <LanguageContext.Consumer>
              {value => (value === "english" ? "Submit" : "Lähetä")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
