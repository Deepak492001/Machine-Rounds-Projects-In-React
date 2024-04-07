import { useState } from "react";
const userGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (checkboxData, length) => {
    let charSet = "",
      generatedPassword = "";
    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);
    if (selectedOption.length === 0) {
      setErrorMessage("Please Select at least one Option");
      setPassword("");
      return;
    }
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Symbols":
          charSet += "~!@#$%^&*+_?";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include UpperCase Letter":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include LowerCase Letter":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      generatedPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatePassword };
};

export default userGeneratePassword;
