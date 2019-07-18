import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us pointer"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag fi pointer"
            onClick={() => this.onLanguageChange("finnish")}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
