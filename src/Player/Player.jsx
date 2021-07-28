import React from "react";
import './Player.css'
import Body from '../Body/Body'
import SideBar from '../SideBar/SideBar'
import Footer from "../Footer/Footer";
const Player = ({ spotify }) => {
  return (
    <div className="player">
        <div className="player_body">
            <SideBar/>
            <Body spotify={spotify}/>
        </div>
      <Footer spotify={spotify} />
      
    </div>
  );
};

export default Player;
