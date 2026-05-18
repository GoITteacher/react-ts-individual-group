import { useEffect, useState } from "react";
import css from "./VolumeControl.module.css";

const VolumeControl = () => {
  const [volume, setVolume] = useState(1);

  const handleClickInc = () => {
    if (volume < 10) setVolume(volume + 1);
  };

  const handleClickDec = () => {
    if (volume > 0) setVolume(volume - 1);
  };

  return (
    <div className={css["volumeControl"]}>
      <p>{volume}</p>
      <button onClick={handleClickInc}>increment</button>
      <button onClick={handleClickDec}>decrement</button>
    </div>
  );
};

export default VolumeControl;
