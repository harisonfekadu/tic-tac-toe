import React from "react";
import "./style.scss";
import {TurnLabelPropTypes} from "../../types"

const TurnLabel: React.FC<TurnLabelPropTypes> = ({playerName, playerMark}) => {
  return <div className="label">
    <span className="player-mark-label">{playerMark}</span>
    <span className="player-name-label">{playerName}</span>'s turn
    </div>;
};

export default TurnLabel;
