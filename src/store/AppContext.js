import React, { useState } from "react";
export const AppContext = React.createContext({
  current: "",
  changeOption: () => {},
});
const AppContextProvider = (props) => {
  const [currentOption, setCurrentOption] = useState("clock");
  const changeOption = (option) => {
    setCurrentOption(option);
  };
  return (
    <AppContext.Provider
      value={{
        current: currentOption,
        changeOption,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
