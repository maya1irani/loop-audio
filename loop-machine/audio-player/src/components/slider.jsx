import React, { useState, useEffect } from "react";
export default function Slider(props) {
  //this component holds an infrastructure for the seek cursor - not working
  const [position, setPosition] = useState(0);
  const durationSound = 17.528145833333333; //all sounds have the same duration

  useEffect(() => {
    setPosition(props.precentage);
  }, [props.precentage]);
  return (
    <div className="seek">
      <label>
        Cursor:
        <span>
          <input
            className="range"
            type="range"
            min="0"
            max={durationSound ? durationSound.toFixed(2) : 0}
            step="0.01"
            // value={props.seek}
            onChange={props.onChange}
            //onMouseDown={this.handleMouseDownSeek}
            //onMouseUp={this.handleMouseUpSeek}
          />
        </span>
      </label>
    </div>
  );
}
