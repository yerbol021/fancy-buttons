import React from 'react'; //optional
import { useState } from "react";

function LightSwitchButton(props) {
  const { light, setLight } = props;

  const toggleLight = () => {
    setLight(prevLight => (prevLight === 'on' ? 'off' : 'on'));
  };

  return (
    <button className="LightSwitchButton" onClick={toggleLight}>
      {light === 'on' && <span><i>💡</i> I'm on!</span>}
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;
