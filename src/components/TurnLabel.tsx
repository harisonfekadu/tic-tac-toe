import React from "react";
import "./TurnLabel.scss"

type TurnLabelPropTypes = {
  playerName: string;
  playerMark: string;
};

const TurnLabel: React.FC<TurnLabelPropTypes> = ({playerName, playerMark}) => {
  return <div className="label">
    <span className="player-mark-label">{playerMark}</span>
    <span className="player-name-label">{playerName}</span>'s turn
    </div>;
};

export default TurnLabel;
