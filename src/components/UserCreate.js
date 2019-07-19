import React from "react";
import Field from "./Field";
import Button from "./Button";
import LangSelect from "./LanguageSelector";

const UserCreate = () => {
  return (
    <div className="ui form">
      <div className="field">
        <LangSelect />
      </div>
      <div className="field">
        <Field />
      </div>
      <div className="field">
        <Button />
      </div>
    </div>
  );
};

export default UserCreate;
