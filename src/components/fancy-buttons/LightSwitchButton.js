import React from 'react'; //optional
import { useState } from "react";

function LightSwitchButton(){
  const [light, setLight] = useState();
  return (
    <button className="LightSwitchButton">
      {/* When the state is on */}<span className="on"><i>💡</i> I'm on!</span>
      {/* When the state is off */}<span className="off"><i>💡</i> I'm off!</span>
    </button>
  );
}

export default LightSwitchButton;