import React from "react";
import ButtonItem from "./ButtonItem";
const ButtonList = () => {
  const Buttonaray = ["Home", "Suggestions", "Sports", "Movies", "comedy"];
  return (
    <div>
      <ButtonItem name={Buttonaray[0]} />
      <ButtonItem name="suggestion" />
      <ButtonItem name="sports" />
      <ButtonItem name="Movies" />
      <ButtonItem name="comedy" />
      {Buttonaray.map((item) => (
        <ButtonItem key={item} name={item} />
      ))}
    </div>
  );
};
export default ButtonList;
