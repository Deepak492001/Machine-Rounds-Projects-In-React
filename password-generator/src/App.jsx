import { useState } from "react";
import "./styles.css";
import "./App.css";

import userGeneratePassword from "./userGeneratePassoword.jsx";
import PasswordStrengthIndicator from "./hooks/PasswordStrengthIndicator.jsx";
import Button from "./components/Button.jsx";
import CheckBox from "./components/Checkbox.jsx";

function App() {
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Symbols", state: false },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include UpperCase Letter",
      state: false,
    },
    {
      title: "Include LowerCase Letter",
      state: false,
    },
  ]);
  const [length, setLength] = useState(7);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    let updatedCheckBoxData = [...checkboxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckboxData(updatedCheckBoxData);
  };
  const { password, errorMessage, generatePassword } = userGeneratePassword();
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <>
      <div className="container">
        {/* Password Text and Copy */}
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <Button
              text={copied ? "Copied" : "copy"}
              onClick={handleCopy}
              customClass="copyBtn"
            />
          </div>
        )}
        {/* Character Length */}
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* Checkboxes */}
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <CheckBox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.state}
              />
            );
          })}
        </div>
        {/* Strength */}
        <PasswordStrengthIndicator password={password} />

        {/* Error Handling */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        {/* Generate Button */}
        <Button
          text="Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
          customClass="generateBtn"
        />
      </div>
    </>
  );
}

export default App;
